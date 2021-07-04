<template>
  <div class="container">
    <!-- modal -->
    <div
      id="myModal"
      class="modal"
      :style="active ? 'display:block' : 'display:none'"
    >
      <!-- Modal content -->
      <div class="modal-content">
        <div class="modal-heading">
          <h4>Điền thông tin vào form</h4>
          <span class="close" @click="active = false">&times;</span>
        </div>
        <form class="form-register">
          <div class="mb-3">
            <label for="name" class="form-label">Tên khách hàng</label>
            <input
              type="text"
              v-model="user.name"
              class="form-control"
              aria-describedby="emailHelp"
            />
            <p class="error errorName">* Chưa nhập tên khách hàng</p>
          </div>
          <div class="mb-3">
            <label for="avatar" class="form-label">Hình ảnh</label>
            <input
              type="text"
              v-model="user.avatar"
              ref="uAvatar"
              class="form-control"
              aria-describedby="emailHelp"
            />
            <p class="error errorName">* Chưa nhập hình ảnh khách hàng</p>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input
              type="text"
              v-model="user.email"
              class="form-control"
              aria-describedby="emailHelp"
            />
            <p class="error errorName">* Chưa nhập email khách hàng</p>
          </div>
          <div class="mb-3">
            <label for="title" class="form-label">Tiêu đề</label>
            <input
              type="text"
              v-model="user.title"
              class="form-control"
              aria-describedby="emailHelp"
            />
            <p class="error errorName">* Chưa nhập tiêu đề</p>
          </div>
          <div class="mb-3">
            <label for="content" class="form-label">Nội dung</label>
            <input
              type="text"
              v-model="user.content"
              class="form-control"
              aria-describedby="emailHelp"
            />
            <p class="error errorName">* Chưa nhập nội dung</p>
          </div>
          <div class="mb-3">
            <label for="time" class="form-label">Thời gian</label>
            <input
              type="text"
              v-model="user.time"
              class="form-control"
              aria-describedby="emailHelp"
            />
            <p class="error errorName">* Chưa nhập thời gian</p>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Địa điểm</label>
            <input
              type="text"
              v-model="user.address"
              class="form-control"
              aria-describedby="emailHelp"
            />
            <p class="error errorName">* Chưa nhập địa điểm</p>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Mô tả nội dung công việc</label
            >
            <input
              type="text"
              v-model="user.description"
              class="form-control"
              aria-describedby="emailHelp"
            />
            <p class="error errorName">* Chưa nhập mô tả nội dung</p>
          </div>
          <button type="submit" class="btn btn-primary" @click="edit(user.id)">
            Submit
          </button>
        </form>
      </div>
    </div>
    <!-- end modal -->
    <div class="control">
      <button
        type="button"
        class="btn btn-outline-success"
        @click="active = true"
      >
        Edit
      </button>
      <button
        type="button"
        class="btn btn-outline-success"
        @click="deleteUser(user.id)"
      >
        Delete
      </button>
    </div>
    <img :src="user.avatar" alt="" />
    <div class="infor">
      <p class="userName">Tên: {{ user.name }}</p>
      <p class="time">Thời gian : {{ user.time }}</p>
      <p class="address">Địa điểm : {{ user.address }}</p>
      <p class="email">Email : {{ user.email }}</p>
    </div>
    <div class="user-detail">
      <div class="userTitle">
        <h2>{{ user.title }}</h2>
      </div>
      <div class="description">
        {{ user.description }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "InforUser",
  async created() {
    const request = await axios.get(
      "https://60dc2b83c2b6280017feb762.mockapi.io/todolist/lists/" +
        this.$route.params.id
    );
    this.user = request.data;
    console.log(this.user);
  },
  data() {
    return {
      user: 0,
      name: "",
      avatar: "",
      title: "",
      time: "",
      address: "",
      content: "",
      email: "",
      active: false,
    };
  },
  methods: {
    async edit(id) {
      const response = await axios
        .put(
          "https://60dc2b83c2b6280017feb762.mockapi.io/todolist/lists/" + id,
          {
            name: this.user.name,
            avatar: this.user.avatar,
            title: this.user.title,
            content: this.user.content,
            time: this.user.time,
            address: this.user.address,
            email: this.user.email,
            description: this.user.description,
          }
        )
        .then(function (response) {
          location.reload();
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log(response.data);
    },
    async deleteUser(id) {
      const response = await axios
        .delete(
          "https://60dc2b83c2b6280017feb762.mockapi.io/todolist/lists/" + id
        )
        .then(function (response) {
          console.log(response);
          console.log("thanh cong");
        })
        .catch(function (error) {
          console.log(error);
          console.log("that bai");
        });
      console.log(response);

      this.$router.push("/");
    },
  },
  computed: {},
};
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
  font-family: "Roboto", sans-serif;
}
button:focus {
  box-shadow: none !important;
}
.control {
  margin-bottom: 20px;
}
.control button {
  margin-right: 10px;
}
img {
  width: 80vw;
  height: 30vh;
  object-fit: contain;
}
.infor {
  padding: 20px;
  font-size: 18px;
  line-height: 20px;
  font-weight: 400;
  width: 60%;
  margin: auto;
  text-align: left;
}

.user-detail {
  width: 60%;
  padding: 20px;
  margin: auto;
}
.userTitle h2 {
  font-size: 45px;
  font-weight: 500;
  line-height: 50px;
  padding-bottom: 20px;
}
.description p {
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.btn-outline-success {
  margin-bottom: 20px;
}
.btn-outline-success:focus {
  box-shadow: none !important;
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 40px;
  border: 1px solid #888;
  width: 50% !important;
  background: red;
}
.modal-heading {
  display: flex;
  justify-content: space-between;
}
.form-register {
  text-align: left;
}
.error {
  color: red;
  display: none;
}
/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
