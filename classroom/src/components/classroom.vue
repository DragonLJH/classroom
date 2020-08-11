<template>
  <div class="classroom">
    <el-table :data="data.tableData" style="width: 100%">
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ }}</p>
            <p>住址: {{ }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "classroom",
  data() {
    return {
      data: {
        month: 0,
        day: 0,
        tableData: [
          {
            classroom: "first",
            time: "2020-05-01",
            reserve: "zs",
            projectName: "java",
            projectManager: "ls",
            remark: "123"
          },
          {
            classroom: "second",
            time: "2020-05-02",
            reserve: "ls",
            projectName: "html",
            projectManager: "ww",
            remark: "234"
          }
        ]
      }
    };
  },
  beforeCreate() {
    /*this.$axios
        .post("http://", {})
        .then(response => {})
        .catch(function(error) {
          // 请求失败处理
          console.log(error);
        });*/
  },
  mounted() {
    this.newDate();
    this.newTableData();
  },
  methods: {
    newDate() {
      var month = new Date().getMonth() + 1 + "";
      var day = 0;
      if (["1", "3", "5", "7", "8", "10", "12"].indexOf(month) != -1) {
        day = 31;
      } else if (["4", "6", "9", "11"].indexOf(month) != -1) {
        day = 30;
      } else {
        day = 28;
      }
      console.log(day);
      this.data.month = month;
      this.data.day = day;
    },
    newTableData() {
      var tests = [
        {
          classroom: "first",
          time: "2020-05-01",
          reserve: "zs",
          projectName: "javaWeb",
          projectManager: "ls",
          remark: "123"
        },
        {
          classroom: "second",
          time: "2020-05-02",
          reserve: "ls",
          projectName: "html css javascript",
          projectManager: "ww",
          remark: "234"
        }
      ];

      for (var x = 0; x < tests.length; x++) {
        var test = tests[x];
        console.log(test)
        for (var i = 0; i < this.data.tableData.length; i++) {
          var time = this.data.tableData[i].time;
          var classroom = this.data.tableData[i].classroom;

          if (time === test.time && classroom === test.classroom) {
            this.data.tableData[i] = test;
          }
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.cell {
  text-align: center;
}
</style>
<style scoped>
.name-wrapper > .el-tag {
  color: #000;
  background: none;
  border: none;
  text-align: center;
  width: 100%;
}
</style>

