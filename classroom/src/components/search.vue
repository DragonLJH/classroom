
<template>
  <div class="search">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <el-input
          :placeholder="elselect != ''?'根据完整的'+elselect+'查询':'请先选择根据什么内容再查询'"
          v-model="value"
          class="input-with-select"
        >
          <el-select v-model="elselect" slot="prepend" :placeholder="elselect">
            <el-option label="reserve" value="reserve"></el-option>
            <el-option label="projectName" value="projectName"></el-option>
            <el-option label="projectManager" value="projectManager"></el-option>
          </el-select>
          <el-button @click="search" slot="append" icon="el-icon-search"></el-button>
          <el-button @click="searchReset" slot="append" icon="el-icon-refresh"></el-button>
        </el-input>
      </el-col>
    </el-row>
    <el-table :data="thisList" style="width: 100%">
      <el-table-column prop="time" label="time" width="180"></el-table-column>
      <el-table-column prop="classroom" label="classroom" width="180"></el-table-column>
      <el-table-column prop="reserve" label="reserve"></el-table-column>
      <el-table-column prop="projectName" label="projectName"></el-table-column>
      <el-table-column prop="projectManager" label="projectManager"></el-table-column>
      <el-table-column prop="remark" label="remark"></el-table-column>
    </el-table>
    <div class="block">
      <span class="demonstration"></span>
      <el-pagination
        background
        @current-change="handleCurrentChange"
        layout="total,prev, pager, next"
        :total="searchList.length"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      searchList: [],
      thisList: [],
      elselect: "",
      value: ""
    };
  },
  methods: {
    handleCurrentChange(val) {
      let allList = this.searchList;
      let showList = [];
      showList = allList.filter(function(value, index, array) {
        return index < val * 10 && index >= (val - 1) * 10;
      });
      this.thisList = showList;
    },
    search() {
      let allList = this.list;
      let select = this.elselect;
      let search = this.value;
      let newList = allList.filter(function(value) {
        if (select === "reserve") {
          return value.reserve === search;
        } else if (select === "projectName") {
          return value.projectName === search;
        } else if (select === "projectManager") {
          return value.projectManager === search;
        }
      });
      this.searchList = newList;
      this.handleCurrentChange(1);
    },
    searchReset() {
      this.searchList = this.list;
      this.handleCurrentChange(1);
    }
  },
  mounted() {
    this.$axios
      .get("/api/test")
      .then(response => {
        this.list = response.data.data;
        this.searchList = response.data.data;
        this.handleCurrentChange(1);
      })
      .catch(function(error) {
        // 请求失败处理
        console.log(error);
      });
  }
};
</script>

<style scoped>
</style>