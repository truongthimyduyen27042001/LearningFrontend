<template>
  <div id="login">
    <h3 class="text-center text-white pt-5">Login form</h3>
    <div class="container">
      <div id="login-row" class="row justify-content-center align-items-center">
        <div id="login-column" class="col-md-6">
          <div id="login-box" class="col-md-12">
            <form
              id="login-form"
              class="form"
              action=""
              v-on:submit.prevent="login"
            >
              <h3 class="text-center text-info">Login</h3>
              <div class="form-group">
                <label for="username" class="text-info">Username:</label><br />
                <input
                  type="text"
                  v-model="name"
                  class="form-control"
                  required
                />
              </div>
              <div class="form-group">
                <label for="password" class="text-info">Password:</label><br />
                <input
                  type="password"
                  v-model="password"
                  class="form-control"
                  required
                />
                <p class="validUser">
                  {{ error }}
                </p>
              </div>
              <div class="form-group">
                <div class="control-form">
                  <div class="login-form">
                    <label for="remember-me" class="text-info"
                      ><input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                      />
                      <span style="padding-left: 5px">Remember me</span
                      ><span></span>
                    </label>
                  </div>
                  <div class="register">
                    <router-link to="/auth/register">Register</router-link>
                  </div>
                </div>
                <button type="submit" class="btn btn-success">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Login",
  async created() {
    const response = await axios.get(
      "https://60dc2b83c2b6280017feb762.mockapi.io/todolist/users"
    );
    this.users = response.data;
  },
  data() {
    return {
      name: "",
      password: "",
      error: "",
      users: 0,
    };
  },
  methods: {
    login() {
      let check = this.users.find((item) => item.username === this.name);
      if (check) {
        if (this.password === check.password) {
          console.log("dang nhap thanh cong");
          this.$router.push("/dasboard");
        } else {
          console.log("sai mat khau");
        }
      } else {
        console.log("khong ton tai tai khoan");
      }
    },
  },
};
</script>

<style>
#login .container #login-row #login-column #login-box {
  max-width: 500px;
  border: 1px solid #9c9c9c;
  background-color: #eaeaea;
  padding: 20px 10px;
}
#login .container #login-row #login-column #login-box #login-form {
  padding: 20px;
}
#login
  .container
  #login-row
  #login-column
  #login-box
  #login-form
  #register-link {
  margin-top: -85px;
}
.form-group {
  text-align: left;
  padding-bottom: 20px;
}
.form-group label {
  padding-bottom: 10px;
}
#remember-me {
  padding-right: 5px;
}
a {
  color: #0dcaf0 !important;
  text-decoration: none;
}
.control-form {
  display: flex;
  justify-content: space-between;
}
.validUser {
  color: red;
}
</style>
