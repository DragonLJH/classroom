<template>
  <div id="LoginRegister">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
        <el-card shadow="hover">
          <h2>ULOGIN</h2>
          <el-form label-width="80px" ref="form">
            <el-input placeholder="USER" v-model="user">
              <i slot="prefix" class="el-input__icon el-icon-user"></i>
            </el-input>
            <el-input type="password" placeholder="PASSWORD" v-model="password">
              <i slot="prefix" class="el-input__icon el-icon-lock"></i>
            </el-input>
            <div class="buttonF">
              <el-button type="primary" size="small" @click="login">Login</el-button>
              <el-button type="primary" size="small" @click="dialog = true">Register</el-button>
            </div>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
    <el-dialog center title="UREGISTER" :visible.sync="dialog">
      <el-row type="flex" class="row-bg" justify="center">
        <el-form label-width="80px" ref="form">
          <el-input placeholder="USER" v-model="user" @change="checkUser">
            <i slot="prefix" class="el-input__icon el-icon-user"></i>
          </el-input>
          <el-input type="password" placeholder="PASSWORD" v-model="password">
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
          </el-input>
        </el-form>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialog = false">取 消</el-button>
        <el-button type="primary" @click="register">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "LoginRegister",
  data() {
    return {
      user: "",
      password: "",
      dialog: false
    };
  },
  methods: {
    login() {
      this.$axios
        .get("/api/login")
        .then(res => {
          var data = res.data;
          var user = this.user;
          var password = this.password;
          if (
            data != null &&
            data.user === user &&
            data.password === password
          ) {
            console.log("true");
            this.$router.push({ path: "VuexTest", query: { user: user } });
          }
        })
        .catch(e => {
          console.log("获取数据失败", e);
        });
    },
    register() {},
    checkUser() {}
  }
};
</script>

<style>
.el-input__inner {
  border: none;
  border-radius: 0;
  border-bottom: solid 1px #eee;
}
.el-dialog {
  width: 100%;
}
</style>

<style scoped>
.el-card {
  height: 500px;
}

.el-input {
  margin: 30px 0px;
}
.buttonF {
  width: 100%;
  margin: 30px 0px;
  display: flex;
}
.buttonF > .el-button {
  flex: 1;
}
</style>       

