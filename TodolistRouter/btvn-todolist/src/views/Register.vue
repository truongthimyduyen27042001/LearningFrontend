<template>
  <div id="register">
    <div class="container">
      <div
        id="register-row"
        class="row justify-content-center align-items-center"
      >
        <div id="register-column" class="col-md-6">
          <div id="register-box" class="col-md-12">
            <form
              id="register-form"
              class="form"
              action=""
              v-on:submit.prevent="registerUsers"
            >
              <h3 class="text-center text-info">Register</h3>
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
                <label for="username" class="text-info">Phone Number:</label
                ><br />
                <input
                  type="text"
                  v-model="number"
                  class="form-control"
                  required
                />
              </div>
              <div class="form-group">
                <label for="username" class="text-info">Email:</label><br />
                <input
                  type="email"
                  v-model="email"
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
              </div>
              <div class="form-group">
                <label for="password" class="text-info"
                  >Enter Password Again</label
                ><br />
                <input
                  type="password"
                  v-model="passagain"
                  class="form-control"
                  required
                />
              </div>
              <div class="form-group">
                <div class="control-form">
                  <div class="register-form">
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
                  >
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
  name: "Register",
  async created() {
    const response = await axios.get(
      "https://60dc2b83c2b6280017feb762.mockapi.io/todolist/users"
    );
    this.users = response.data;
  },
  data() {
    return {
      name: "",
      number: "",
      email: "",
      password: "",
      passagain: "",
      users: 0,
      existedUser: false,
    };
  },
  methods: {
    async registerUsers() {
      let checkPass = await (this.passagain !== this.password);
      console.log(checkPass);
      if (checkPass) {
        console.log("khong trung");
        return 0;
      }
      let checkValid = this.users.find((item) => item.username === this.name)
        ? false
        : true;
      if (checkValid && this.password === this.passagain) {
        axios
          .post("https://60dc2b83c2b6280017feb762.mockapi.io/todolist/users", {
            username: this.name,
            password: this.password,
            email: this.email,
            phonenumber: this.number,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        this.$router.push("/auth/login");
      } else {
        alert("Da ton tai tai khoan");
      }
    },
  },
};
</script>

<style scoped>
body {
  background: red;
}
#register .container #register-row #register-column #register-box {
  max-width: 500px;
  border: 1px solid #9c9c9c;
  background-color: #eaeaea;
  padding: 20px 10px;
}
#register
  .container
  #register-row
  #register-column
  #register-box
  #register-form {
  padding: 20px;
}
#register
  .container
  #register-row
  #register-column
  #register-box
  #register-form
  #register-link {
  margin-top: -85px;
}
.container {
  padding-top: 30px;
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
</style>
