<template>
  <div class="hello">
    <h1>Test API</h1>
    <div class="container">
      <div class="row mt-0 mb-0">
        <div class="col-md-4 col-sm-4 col-lg-4">

        </div>

        <div class="col-md-4 col-sm-4 col-lg-4">
          <div class="row mt-0 mb-0">
            <div class="col-md-12 col-sm-12 col-lg-12 mt-1 mb-1">
              <div class="form-group">
                <label for="txtUsername">User Name</label>
                <input type="email" class="form-control" id="txtUsername" aria-describedby="emailHelp"
                  placeholder="Enter user name" v-model="userNameLogin" maxlength="10">
                <small id="emailHelp" class="form-text text-muted">We'll never share your username with anyone
                  else.</small>
              </div>
            </div>
            <div class="col-md-12 col-sm-12 col-lg-12 mt-1 mb-1">
              <div class="form-group">
                <label for="txtPassword">Password</label>
                <input type="password" class="form-control" id="txtPassword" placeholder="Password" maxlength="10"
                  v-model="passwordLogin">
              </div>
            </div>
            <div class="col-md-12 col-sm-12 col-lg-12 mt-1 mb-1">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1" style="margin:5px 0 0 10px">Remember password</label>
              </div>
            </div>
            <div class="col-md-12 col-sm-12 col-lg-12 mt-1 mb-1" v-if="errorMessage != null && errorMessage.length > 0">
              <ul>
                <li v-for="value in errorMessage" :key="value">
                  <label class="form-check-label" for="exampleCheck1" style="color:red">{{ value }}</label>
                </li>
              </ul>

            </div>
            <div class="col-md-12 col-sm-12 col-lg-12 mt-1 mb-1">
              <button type="button" class="btn btn-primary" v-on:click="loginUserForm">Login</button>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-4 col-lg-4">

        </div>
      </div>

    </div>

  </div>
</template>

<script>
import axios from 'axios';
var utils = require('../commons/utils');
var messageList = require('../commons/messageList');
String.format = function () {
  var s = arguments[0];
  for (var i = 0; i < arguments.length - 1; i++) {
    var reg = new RegExp("\\{" + i + "\\}", "gm");
    s = s.replace(reg, arguments[i + 1]);
  }
  return s;
};

export default {
  name: 'TestAPI',
  props: {
    msg: String
  },
  data() {
    return {
      userNameLogin: "",
      passwordLogin: "",
      errorMessage: []
    }
  },
  methods: {

    loginUser: async (userObject) => {
      var result = null;
      await axios.post('http://192.168.1.7.:8090/api/loginUser', userObject)
        .then(function (response) {
          result = response;
        })
        .catch(function (error) {
          console.log(error);
        });
      return result;
    },

    async loginUserForm(event) {
      event.preventDefault();
      this.errorMessage.length = 0;
      var objUser = { userName: this.userNameLogin, password: this.passwordLogin };
      // Validate client
      if (utils.isNullOrWhiteSpace(objUser.userName)) {
        this.errorMessage.push(String.format(messageList.MESSAGE_EMPTY, "User name"));
      }
      if (utils.isNullOrWhiteSpace(objUser.password)) {
        this.errorMessage.push(String.format(messageList.MESSAGE_EMPTY, "Password"));
      }
      if (!utils.isNullOrEmptyArray(this.errorMessage)) {
        return;
      }
      // End validate client

      var response = await this.loginUser(objUser);
      if (response.data.error != 1) {
        this.errorMessage.push(response.data.message);
        return;
      }
      if (response.data.message != "Login successfully") {
        this.errorMessage.push(response.data.message);
        return;
      }
      console.log(response.data.data);

    }

  },
  beforeCreate() {

  },
  async created() {


  },
  beforeMount() {

  },
  mounted() {

  },
  beforeUpdate() {

  },
  updated() {

  },
  beforeDestroy() {

  },
  destroyed() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left-button {
  margin: 0 10px 0 0;
}
</style>
