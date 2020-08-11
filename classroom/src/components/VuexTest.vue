<template>
  <div class="hello">
    <div class="block">
      <el-switch
        style="display: block"
        v-model="flag"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="显示"
        inactive-text="隐藏"
      ></el-switch>
      <span class="demonstration">月</span>
      <el-date-picker
        value-format="yyyy-M"
        v-model="$store.state.date"
        @change="changeDate"
        type="month"
        placeholder="选择月"
      ></el-date-picker>
    </div>
    <el-card class="box-card">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :xs="3" :sm="6" :md="4" :lg="3" :xl="1">日期</el-col>
        <el-col :xs="3" :sm="6" :md="4" :lg="3" :xl="1">第一课室</el-col>
        <el-col :xs="3" :sm="6" :md="4" :lg="3" :xl="1">第二课室</el-col>
        <el-col :xs="3" :sm="6" :md="4" :lg="3" :xl="1">第三课室</el-col>
        <el-col :xs="3" :sm="6" :md="4" :lg="3" :xl="1">第四课室</el-col>
        <el-col :xs="3" :sm="6" :md="4" :lg="3" :xl="1">第五课室</el-col>
        <el-col :xs="3" :sm="6" :md="4" :lg="3" :xl="1">第六课室</el-col>
      </el-row>
      <div v-for=" (item, index)  in $store.state.day" :key="index">
        <el-row class="row-bg" type="flex" justify="center">
          <el-col :xs="3" :sm="6" :md="4" :lg="3" :xl="1">{{$store.state.month}}月{{item}}日</el-col>
          <el-col :xs="3" :sm="6" :md="4" :lg="3" :xl="1">
            <el-tooltip placement="top" effect="light">
              <div slot="content" >
                <div v-if="$store.state.Adata[index][0] != null" class="tipStyle">
                  <div>classroom : 第{{$store.state.Adata[index][0].classroom}}课室</div>
                  <div>time : {{$store.state.Adata[index][0].time}}</div>
                  <div>reserve : {{$store.state.Adata[index][0].reserve}}</div>
                  <div>projectName : {{$store.state.Adata[index][0].projectName}}</div>
                  <div>projectManager : {{$store.state.Adata[index][0].projectManager}}</div>
                  <div>remark : {{$store.state.Adata[index][0].remark}}</div>
                </div>
              </div>
               <el-button v-show="flag"
                id="class1"
                @click="onClick"
              >{{$store.state.Adata[index][0] != null ? $store.state.Adata[index][0].projectName :" "}}</el-button>
            </el-tooltip>
          </el-col>
          <el-col :xs="3" :sm="6" :md="4" :lg="3" :xl="1">
            <el-tooltip placement="top" effect="light">
              <div slot="content">
                <div v-if="$store.state.Adata[index][1] != null" class="tipStyle">
                  <div>classroom : 第{{$store.state.Adata[index][1].classroom}}课室</div>
                  <div>time : {{$store.state.Adata[index][1].time}}</div>
                  <div>reserve : {{$store.state.Adata[index][1].reserve}}</div>
                  <div>projectName : {{$store.state.Adata[index][1].projectName}}</div>
                  <div>projectManager : {{$store.state.Adata[index][1].projectManager}}</div>
                  <div>remark : {{$store.state.Adata[index][1].remark}}</div>
                </div>
              </div>
               <el-button v-show="flag"
                id="class2"
                @click="onClick"
              >{{$store.state.Adata[index][1] != null ? $store.state.Adata[index][1].projectName :" "}}</el-button>
            </el-tooltip>
          </el-col>
          <el-col :xs="3" :sm="6" :md="4" :lg="3" :xl="1">
            <el-tooltip placement="top" effect="light">
              <div slot="content">
                <div v-if="$store.state.Adata[index][2] != null" class="tipStyle">
                  <div>classroom : 第{{$store.state.Adata[index][2].classroom}}课室</div>
                  <div>time : {{$store.state.Adata[index][2].time}}</div>
                  <div>reserve : {{$store.state.Adata[index][2].reserve}}</div>
                  <div>projectName : {{$store.state.Adata[index][2].projectName}}</div>
                  <div>projectManager : {{$store.state.Adata[index][2].projectManager}}</div>
                  <div>remark : {{$store.state.Adata[index][2].remark}}</div>
                </div>
              </div>
               <el-button v-show="flag"
                id="class3"
                @click="onClick"
              >{{$store.state.Adata[index][2] != null ? $store.state.Adata[index][2].projectName :" "}}</el-button>
            </el-tooltip>
          </el-col>
          <el-col :xs="3" :sm="6" :md="4" :lg="3" :xl="1">
            <el-tooltip placement="top" effect="light">
              <div slot="content">
                <div v-if="$store.state.Adata[index][3] != null" class="tipStyle">
                  <div>classroom : 第{{$store.state.Adata[index][3].classroom}}课室</div>
                  <div>time : {{$store.state.Adata[index][3].time}}</div>
                  <div>reserve : {{$store.state.Adata[index][3].reserve}}</div>
                  <div>projectName : {{$store.state.Adata[index][3].projectName}}</div>
                  <div>projectManager : {{$store.state.Adata[index][3].projectManager}}</div>
                  <div>remark : {{$store.state.Adata[index][3].remark}}</div>
                </div>
              </div>
               <el-button v-show="flag"
                id="class4"
                @click="onClick"
              >{{$store.state.Adata[index][3] != null ? $store.state.Adata[index][3].projectName :" "}}</el-button>
            </el-tooltip>
          </el-col>
          <el-col :xs="3" :sm="6" :md="4" :lg="3" :xl="1">
            <el-tooltip placement="top" effect="light">
              <div slot="content">
                <div v-if="$store.state.Adata[index][4] != null" class="tipStyle">
                  <div>classroom : 第{{$store.state.Adata[index][4].classroom}}课室</div>
                  <div>time : {{$store.state.Adata[index][4].time}}</div>
                  <div>reserve : {{$store.state.Adata[index][4].reserve}}</div>
                  <div>projectName : {{$store.state.Adata[index][4].projectName}}</div>
                  <div>projectManager : {{$store.state.Adata[index][4].projectManager}}</div>
                  <div>remark : {{$store.state.Adata[index][4].remark}}</div>
                </div>
              </div>
               <el-button v-show="flag"
                id="class5"
                @click="onClick"
              >{{$store.state.Adata[index][4] != null ? $store.state.Adata[index][4].projectName :" "}}</el-button>
            </el-tooltip>
          </el-col>
          <el-col :xs="3" :sm="6" :md="4" :lg="3" :xl="1">
            <el-tooltip placement="top" effect="light">
              <div slot="content">
                <div v-if="$store.state.Adata[index][5] != null" class="tipStyle">
                  <div>classroom : 第{{$store.state.Adata[index][5].classroom}}课室</div>
                  <div>time : {{$store.state.Adata[index][5].time}}</div>
                  <div>reserve : {{$store.state.Adata[index][5].reserve}}</div>
                  <div>projectName : {{$store.state.Adata[index][5].projectName}}</div>
                  <div>projectManager : {{$store.state.Adata[index][5].projectManager}}</div>
                  <div>remark : {{$store.state.Adata[index][5].remark}}</div>
                </div>
              </div>
               <el-button v-show="flag"
                size="medium"
                id="class6"
                @click="onClick"
              >{{$store.state.Adata[index][5] != null ? $store.state.Adata[index][5].projectName :" "}}</el-button>
            </el-tooltip>
          </el-col>
        </el-row>
      </div>
    </el-card>

    <el-dialog :title="$store.state.adate" :visible.sync="$store.state.dialog">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">classroom</el-col>
        <el-col :xs="9" :sm="9" :md="9" :lg="9" :xl="9">{{$store.state.aclassroom}}</el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">reserve</el-col>
        <el-col :xs="9" :sm="9" :md="9" :lg="9" :xl="9">{{$store.state.reserve}}</el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">projectName</el-col>
        <el-col :xs="9" :sm="9" :md="9" :lg="9" :xl="9">{{$store.state.projectName}}</el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">projectManager</el-col>
        <el-col :xs="9" :sm="9" :md="9" :lg="9" :xl="9">{{$store.state.projectManager}}</el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">remark</el-col>
        <el-col :xs="9" :sm="9" :md="9" :lg="9" :xl="9">{{$store.state.remark}}</el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-form :model="form">
          <el-form-item label="reserve" label-width="120px">
            <el-input v-model="form.reserve" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="projectName" label-width="120px">
            <el-input v-model="form.projectName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="projectManager" label-width="120px">
            <el-input v-model="form.projectManager" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="remark" label-width="120px">
            <el-input v-model="form.remark" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
      </el-row>

      <div slot="footer" class="dialog-footer">
         <el-button v-show="flag" @click="$store.state.dialog = false">取 消</el-button>
         <el-button v-show="flag" type="primary" @click="$store.state.dialog = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      flag: false,
      form: {
        reserve: "",
        projectName: "",
        projectManager: "",
        remark: ""
      }
    };
  },
  created() {
    console.log("this.$route.query.user", this.$route.query.user);
    console.log("created");

    this.thisDay(new Date().getMonth() + 1 + "");
    // this.thisData();
    this.nowData(new Date().getFullYear() + "-" + (new Date().getMonth() + 1));
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  methods: {
    thisDay(month) {
      this.$store.commit("thisDay", month);
    },
    thisData() {
      this.$store.commit("thisData");
    },
    nowData(date) {
      this.$store.commit("nowData", date);
    },
    onClick(e) {
      this.$store.commit("onClick", e);
    },
    changeDate(e) {
      this.flag = false;
      this.$store.commit("changeDate", e);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (max-width: 800px) {
  .hello {
    min-width: 800px;
  }
}

.el-drawer__body .el-row .el-col {
  text-align: center;
}

.el-col {
  border: solid 1px #eee;
  margin: 5px;
  padding: 5px;
  height: 50px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.el-col > button {
  border: none;
}

.table {
  margin: 20px 0px;
}

.table > span {
  display: inline-block;
  width: 100px;
  height: 50px;
  border: solid 1px #ccc;
  padding: 4px;
  margin: 4px;
  text-align: center;
  line-height: 50px;
  overflow: hidden;
}
.topTable > span {
  display: inline-block;
  width: 100px;
  height: 50px;
  border: solid 1px #ccc;
  padding: 4px;
  margin: 4px;
  text-align: center;
  line-height: 50px;
  overflow: hidden;
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
