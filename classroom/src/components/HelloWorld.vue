<template>
  <div class="hello">
    <div class="block">
      <span class="demonstration">月</span>
      <el-date-picker
        value-format="yyyy-M"
        v-model="date"
        @change="changeDate"
        type="month"
        placeholder="选择月"
      ></el-date-picker>
    </div>
    <el-card class="box-card">
      <div class="topTable">
        <span>日期</span>
        <span>第一课室</span>
        <span>第二课室</span>
        <span>第三课室</span>
        <span>第四课室</span>
        <span>第五课室</span>
        <span>第六课时</span>
      </div>
      <div class="table" v-for=" (item, index)  in day" :key="index">
        <span>{{month}}月{{item}}日</span>
        <span>
          <el-tooltip placement="top" effect="light">
            <div slot="content">
              <div v-if="Adata[index][0] != null" class="tipStyle">
                <div>classroom : 第{{Adata[index][0].classroom}}课室</div>
                <div>time : {{Adata[index][0].time}}</div>
                <div>reserve : {{Adata[index][0].reserve}}</div>
                <div>projectName : {{Adata[index][0].projectName}}</div>
                <div>projectManager : {{Adata[index][0].projectManager}}</div>
                <div>remark : {{Adata[index][0].remark}}</div>
              </div>
            </div>
            <el-button
              id="class1"
              @click="onClick"
            >{{Adata[index][0] != null ? Adata[index][0].projectName :" "}}</el-button>
          </el-tooltip>
        </span>
        <span>
          <el-tooltip placement="top" effect="light">
            <div slot="content">
              <div v-if="Adata[index][1] != null" class="tipStyle">
                <div>classroom : 第{{Adata[index][1].classroom}}课室</div>
                <div>time : {{Adata[index][1].time}}</div>
                <div>reserve : {{Adata[index][1].reserve}}</div>
                <div>projectName : {{Adata[index][1].projectName}}</div>
                <div>projectManager : {{Adata[index][1].projectManager}}</div>
                <div>remark : {{Adata[index][1].remark}}</div>
              </div>
            </div>
            <el-button
              id="class2"
              @click="onClick"
            >{{Adata[index][1] != null ? Adata[index][1].projectName :" "}}</el-button>
          </el-tooltip>
        </span>
        <span>
          <el-tooltip placement="top" effect="light">
            <div slot="content">
              <div v-if="Adata[index][2] != null" class="tipStyle">
                <div>classroom : 第{{Adata[index][2].classroom}}课室</div>
                <div>time : {{Adata[index][2].time}}</div>
                <div>reserve : {{Adata[index][2].reserve}}</div>
                <div>projectName : {{Adata[index][2].projectName}}</div>
                <div>projectManager : {{Adata[index][2].projectManager}}</div>
                <div>remark : {{Adata[index][2].remark}}</div>
              </div>
            </div>
            <el-button
              id="class3"
              @click="onClick"
            >{{Adata[index][2] != null ? Adata[index][2].projectName :" "}}</el-button>
          </el-tooltip>
        </span>
        <span>
          <el-tooltip placement="top" effect="light">
            <div slot="content">
              <div v-if="Adata[index][3] != null" class="tipStyle">
                <div>classroom : 第{{Adata[index][3].classroom}}课室</div>
                <div>time : {{Adata[index][3].time}}</div>
                <div>reserve : {{Adata[index][3].reserve}}</div>
                <div>projectName : {{Adata[index][3].projectName}}</div>
                <div>projectManager : {{Adata[index][3].projectManager}}</div>
                <div>remark : {{Adata[index][3].remark}}</div>
              </div>
            </div>
            <el-button
              id="class4"
              @click="onClick"
            >{{Adata[index][3] != null ? Adata[index][3].projectName :" "}}</el-button>
          </el-tooltip>
        </span>
        <span>
          <el-tooltip placement="top" effect="light">
            <div slot="content">
              <div v-if="Adata[index][4] != null" class="tipStyle">
                <div>classroom : 第{{Adata[index][4].classroom}}课室</div>
                <div>time : {{Adata[index][4].time}}</div>
                <div>reserve : {{Adata[index][4].reserve}}</div>
                <div>projectName : {{Adata[index][4].projectName}}</div>
                <div>projectManager : {{Adata[index][4].projectManager}}</div>
                <div>remark : {{Adata[index][4].remark}}</div>
              </div>
            </div>
            <el-button
              id="class5"
              @click="onClick"
            >{{Adata[index][4] != null ? Adata[index][4].projectName :" "}}</el-button>
          </el-tooltip>
        </span>
        <span>
          <el-tooltip placement="top" effect="light">
            <div slot="content">
              <div v-if="Adata[index][5] != null" class="tipStyle">
                <div>classroom : 第{{Adata[index][5].classroom}}课室</div>
                <div>time : {{Adata[index][5].time}}</div>
                <div>reserve : {{Adata[index][5].reserve}}</div>
                <div>projectName : {{Adata[index][5].projectName}}</div>
                <div>projectManager : {{Adata[index][5].projectManager}}</div>
                <div>remark : {{Adata[index][5].remark}}</div>
              </div>
            </div>
            <el-button
              id="class6"
              @click="onClick"
            >{{Adata[index][5] != null ? Adata[index][5].projectName :" "}}</el-button>
          </el-tooltip>
        </span>
      </div>
    </el-card>
    <el-drawer title="我是标题" :visible.sync="drawer">
      <div>{{adate}}---{{aclassroom}}</div>
      <div>{{reserve}}</div>
      <div>{{projectName}}</div>
      <div>{{projectManager}}</div>
      <div>{{remark}}</div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
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
      drawer: false,
      adate: "",
      aclassroom: "",
      reserve: "",
      projectName: "",
      projectManager: "",
      remark: ""
    };
  },
  mounted() {
    this.thisDay(new Date().getMonth() + 1 + "");
    // this.thisData();
    this.nowData(new Date().getFullYear() + "-" + (new Date().getMonth() + 1));
  },
  beforeMount() {},
  methods: {
    thisDay(month) {
      console.log(month);
      if ("1,3,5,7,8,10,12".indexOf(month) != -1 && month != "2") {
        this.day = 31;
      } else if ("4,6,9,11".indexOf(month) != -1) {
        this.day = 30;
      } else if ("2" === month) {
        this.day = 28;
      }
    },
    thisData() {
      var list = [];
      for (var i = 0; i < this.day; i++) {
        var alist = [];
        for (var j = 0; j < 6; i++) {
          alist.push("a" + j);
        }
        list.push(alist);
      }
      console.log(list);
    },
    nowData(date) {
      this.$axios
        .get(
          "https://www.easy-mock.com/mock/5f040685e94ad2735324a235/classroom/all"
        )
        .then(res => {
          var theDate = date;
          var year = theDate.split("-")[0];
          var month = theDate.split("-")[1];
          // var thisList = this.Adata;
          console.log("theDate", theDate);

          //使用 axios 获取后台数据
          var list = res.data.data;
          console.log("list", list);
          console.log("list.length", list.length);
          for (let i = 0; i < list.length; i++) {
            //判断年份填充数据
            if (year === parseInt(list[i].time.split("-")[0]) + "") {
              //判断月份填充数据
              if (month === parseInt(list[i].time.split("-")[1]) + "") {
                //获取list[i]中的天数，-1是天数和下标数差一
                let aday = parseInt(list[i].time.split("-")[2]) - 1;
                console.log("aday", aday);
                //获取list[i]中的课室，-1是课室数和下标数差一
                let classroom = parseInt(list[i].classroom) - 1;
                console.log("classroom", classroom);
                //获取项目名称
                // let projectName = list[i].projectName;
                // console.log(list[i]);
                // console.log(parseInt(list[i].time.split("-")[2]));
                // console.log(parseInt(list[i].classroom));
                // thisList[aday][classroom] = projectName;
                //将获取的项目名称根据天数课室进行填充
                // this.$set(this.Adata[aday], classroom, projectName);

                // 将list[i]对象填充进指定位置
                this.$set(this.Adata[aday], classroom, list[i]);
              }
            }
          }
          // console.log(thisList);

          // this.Adata = thisList;
          console.log(this.Adata);
        })
        .catch(e => {
          console.log("获取数据失败");
        });
    },
    onClick(e) {
      //改变 drawer 的值打开drawer抽屉
      this.drawer = true;

      console.log(e.target.id);
      //获取 projectName 的值
      let projectName = e.path[0].innerText;
      let adate = "";
      console.log("projectName:" + projectName);
      //根据 projectName 的值判断 使用e.path[2]或者使用e.path[3] 来获取月数天数
      //根据 e.path.length 的长度判断 使用e.path[2]或者使用e.path[3] 来获取月数天数
      if (projectName === "" || e.path.length === 11) {
        adate = e.path[2].children[0].innerText;
      } else {
        adate = e.path[3].children[0].innerText;
      }

      adate = this.date + "-" + adate.split("月")[1].split("日")[0];
      this.adate = adate;

      //根据 e.screenX  的值判断classroom的值
      let aclassroom = 0;

      switch (e.target.id) {
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
      }
      this.aclassroom = aclassroom;
      this.$axios
        .get("http://localhost:1111/classroom/" + adate + "/" + aclassroom)
        .then(res => {
          console.log(res.data);
          this.reserve = "";
          this.projectName = "";
          this.projectManager = "";
          this.remark = "";
          if (res.data[0].length != 0) {
            this.reserve = res.data[0].reserve;
            this.projectName = res.data[0].projectName;
            this.projectManager = res.data[0].projectManager;
            this.remark = res.data[0].remark;
          }
        })
        .catch(e => {
          console.log("获取数据失败");
        });
    },
    changeDate(e) {
      var month = e.split("-")[1];
      this.month = month;
      this.thisDay(month);
      var aday = this.day;
      for (let i = 0; i < aday; i++) {
        if (this.Adata[i].length != 0) {
          this.Adata[i].splice(0);
        }
      }
      this.nowData(e);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table {
  margin: 20px 0px;
}

.table > span {
  display: inline-block;
  width: 100px;
  height: 50px;
  border: solid 1px #ccc;
  padding: 5px;
  margin: 5px;
  text-align: center;
  line-height: 50px;
}
.topTable > span {
  display: inline-block;
  width: 100px;
  height: 50px;
  border: solid 1px #ccc;
  padding: 5px;
  margin: 5px;
  text-align: center;
  line-height: 50px;
}

.table > span > button {
  border: none;
}

.table > span > button :hover {
  background-color: none;
}

.el-button {
  width: 80px;
  height: 40px;
}

.el-button:hover {
  color: #000;
  background-color: rgba(1, 1, 1, 0);
}

.el-button:focus {
  color: #000;
  background-color: rgba(1, 1, 1, 0);
}

.tipStyle {
  width: 200px;
  height: 200px;
  line-height: 20px;
}
.tipStyle > div {
  font-size: 16px;
  padding: 5px 0px;
}
</style>
