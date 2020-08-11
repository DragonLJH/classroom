import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        dialog: false,
        drawer: false,
        date: new Date().getFullYear() + "-" + (new Date().getMonth() + 1),
        month: new Date().getMonth() + 1 + "",
        day: 0,
        Adata: [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ],
        adate: "",
        aclassroom: "",
        reserve: "",
        projectName: "",
        projectManager: "",
        remark: ""
    },
    mutations: {
        add(state) {
            state.count++;
        },
        addN(state, step) {
            state.count += step;
        },
        subtra(state) {
            state.count--;
        },
        subtraN(state, step) {
            state.count -= step;
        }
        ,
        nowData(state, date) {
            console.log(date)
            axios.get("/api/test").then(res => {
                console.log("res", res)
                console.log("state.Adata", state.Adata)
                var theDate = date;
                var year = theDate.split("-")[0];
                var month = theDate.split("-")[1];
                //使用 axios 获取后台数据
                var list = res.data.data;
                for (var i = 0; i < list.length; i++) {
                    //判断年份填充数据
                    if (year === parseInt(list[i].time.split("-")[0]) + "") {
                        //判断月份填充数据
                        if (month === (parseInt(list[i].time.split("-")[1])) + "") {
                            //获取list[i]中的天数，-1是天数和下标数差一
                            let aday = parseInt(list[i].time.split("-")[2]) - 1;
                            let classroom = parseInt(list[i].classroom) - 1;
                            state.Adata[aday][classroom] = list[i];
                            //获取list[i]中的天数，-1是天数和下标数差一
                            // let aday = parseInt(list[i].time.split("-")[2]) - 1;
                            // console.log("aday", aday)
                            //获取list[i]中的课室，-1是课室数和下标数差一
                            // let classroom = parseInt(list[i].classroom) - 1;
                            // console.log("classroom", classroom)
                            // this.state.$set(this.state.Adata[aday], classroom, list[i]);
                        }
                    }
                }
                console.log("state.Adata", state.Adata)
            }).catch(e => {
                console.log("获取数据失败", e);
            });
        },
        onClick(state, e) {
            state.adate = "",
                state.aclassroom = "",
                state.reserve = "",
                state.projectName = "",
                state.projectManager = "",
                state.remark = "",
                //改变 dialog 的值打开dialog对话框
                state.dialog = true;
            //获取 projectName 的值
            let projectName = e.path[0].innerText;
            let adate = "";
            let day = "";
            let flagclassroom = "";
            //根据 projectName 的值判断 使用e.path[2]或者使用e.path[3] 来获取月数天数
            //根据 e.path.length 的长度判断 使用e.path[2]或者使用e.path[3] 来获取月数天数
            if (projectName === "" || e.path.length === 11) {
                adate = e.path[2].children[0].innerText;
                flagclassroom = e.path[0].id;
                console.log("e.path[0].id",e.path[0].id);
            } else {
                adate = e.path[3].children[0].innerText;
                if(e.path[1].id === ""){
                    flagclassroom = e.path[0].id;
                }else{
                    flagclassroom = e.path[1].id;
                }
            }
            
            // console.log(adate);
            day = parseInt(adate.split("月")[1].split("日")[0]);
            //根据 e.screenX  的值判断classroom的值
            let aclassroom = 0;

            switch (flagclassroom) {
                case "class1":
                    aclassroom = 1;
                    break;
                case "class2":
                    aclassroom = 2;
                    break;
                case "class3":
                    aclassroom = 3;
                    break;
                case "class4":
                    aclassroom = 4;
                    break;
                case "class5":
                    aclassroom = 5;
                    break;
                case "class6":
                    aclassroom = 6;
                    break;
                default:
            };
            var obj = state.Adata[day - 1][aclassroom - 1];

            if (obj != null) {

                state.adate = obj.time;
                state.aclassroom = obj.classroom;
                state.reserve = obj.reserve;
                state.projectName = obj.projectName;
                state.projectManager = obj.projectManager;
                state.remark = obj.remark;
            } else {
                state.adate = adate;
                state.aclassroom = aclassroom;
            }


        },
        thisDay(state, month) {
            if ("1,3,5,7,8,10,12".indexOf(month) != -1 && month != "2") {
                state.day = 31;
            } else if ("4,6,9,11".indexOf(month) != -1) {
                state.day = 30;
            } else if ("2" === month) {
                state.day = 28;
            }
        },
        thisData(state) {
            var list = [];
            for (var i = 0; i < state.day; i++) {
                var alist = [];
                for (var j = 0; j < 6; i++) {
                    alist.push("a" + j);
                }
                list.push(alist);
            }
            console.log(list);
        },
        changeDate(state, e) {
            var month = e.split("-")[1];
            state.month = month;
            this.commit("thisDay", state.month)
            var aday = state.day;
            for (let i = 0; i < aday; i++) {
                if (state.Adata[i].length != 0) {
                    state.Adata[i].splice(0);
                }
            }
            this.commit("nowData", e)
        }

    },
    actions: {

    }
})