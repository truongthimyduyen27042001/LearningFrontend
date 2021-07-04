<template>
  <div class="home">
    <!-- check -->
    <h2>List User</h2>

    <!-- Trigger/Open The Modal -->
    <button
      type="button"
      @click="active = true"
      class="btn btn-outline-success"
    >
      Thêm người dùng
    </button>
    <div class="input-group mb-3 p-5">
      <input
        type="text"
        class="form-control search"
        placeholder="Enter Title"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        v-model="searchTitle"
      />
      <button type="button" @click="search()" class="btn btn-success">
        Success
      </button>
    </div>
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
              class="form-control"
              aria-describedby="emailHelp"
              v-model="name"
              required
            />
            <p class="error errorName">* Chưa nhập tên khách hàng</p>
          </div>
          <div class="mb-3">
            <label for="avatar" class="form-label">Hình ảnh</label>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              v-model="avatar"
              required
            />
            <p class="error errorName">* Chưa nhập hình ảnh khách hàng</p>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              v-model="email"
              required
            />
            <p class="error errorName">* Chưa nhập email khách hàng</p>
          </div>
          <div class="mb-3">
            <label for="title" class="form-label">Tiêu đề</label>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              v-model="title"
              required
            />
            <p class="error errorName">* Chưa nhập tiêu đề</p>
          </div>
          <div class="mb-3">
            <label for="content" class="form-label">Nội dung</label>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              v-model="content"
              required
            />
            <p class="error errorName">* Chưa nhập nội dung</p>
          </div>
          <div class="mb-3">
            <label for="time" class="form-label">Thời gian</label>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              v-model="time"
              required
            />
            <p class="error errorName">* Chưa nhập thời gian</p>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Địa điểm</label>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              v-model="address"
              required
            />
            <p class="error errorName">* Chưa nhập địa điểm</p>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Mô tả nội dung công việc</label
            >
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              v-model="description"
              required
            />
            <p class="error errorName">* Chưa nhập mô tả nội dung</p>
          </div>
          <button type="submit" class="btn btn-primary" @click="addUser()">
            Submit
          </button>
        </form>
      </div>
    </div>
    <!-- end check -->
    <!-- announcement -->
    <div class="annoucement">
      <h2>{{ isNull }}</h2>
    </div>
    <div
      class="list-to-do cotainer"
      v-for="user in users"
      :key="user.id"
      @click="gotoDetail(user.id)"
    >
      <div class="list-small-right">
        <img class="img-hover" :src="user.avatar" alt="" />
      </div>
      <div class="list-small-left">
        <div class="list-small-title">{{ user.title }}</div>
        <div class="tag">{{ user.email }}</div>
        <div class="content">{{ user.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "Home",
  async created() {
    const response = await axios.get(
      "https://60dc2b83c2b6280017feb762.mockapi.io/todolist/lists"
    );
    this.users = response.data;
  },
  mounted() {
    window.onclick = function (event) {
      if (event.target == modal) {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
        console.log("thuc hien ham nay");
      }
    };
  },
  data() {
    return {
      name: "",
      email: "",
      time: "",
      avatar: "",
      title: "",
      content: "",
      address: "",
      description: "",
      active: false,
      searchTitle: "",
      users: 0,
    };
  },
  methods: {
    async addUser() {
      const response = await axios
        .post("https://60dc2b83c2b6280017feb762.mockapi.io/todolist/lists", {
          name: this.name,
          avatar: this.avatar,
          title: this.title,
          content: this.content,
          time: this.time,
          address: this.address,
          email: this.email,
          description: this.description,
        })
        .then(function (response) {
          console.log(response);
          location.reload();
        })
        .catch(function (error) {
          console.log(error);
        });
      this.users = response.data;
    },
    gotoDetail(id) {
      this.$router.push("/inforuser/" + id);
    },
    async search() {
      const response = await axios.get(
        "https://60dc2b83c2b6280017feb762.mockapi.io/todolist/lists?title=" +
          this.searchTitle
      );
      this.users = response.data;
    },
  },
  components: {},
  computed: {
    isNull() {
      if (this.users.length === 0) return "Không tồn tại người dùng";
      else return "";
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
* {
  padding: 0px;
  margin: 0px;
}
.home {
  padding: 30px 0px;
}
#btn-add {
  margin-bottom: 20px;
}
#btn-add:focus {
  box-shadow: none !important;
}
.img-hover {
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
}
.list-to-do {
  display: flex;
  justify-content: center;
  width: 45%;
  margin: auto;
  background: #75b017;
  padding: 0px;
  border-radius: 10px;
  margin-bottom: 30px;
}
.list-small-right {
  background: rgb(97, 92, 92);
  cursor: pointer;
  width: 30%;
}
.list-small-right img {
  width: 80%;
  padding: none;
}
.list-small-left {
  padding: 30px 10px;
  text-align: left;
  background-color: #f4f4f4;
  margin-left: 5px;
  cursor: pointer;
  width: 70%;
}
.list-small-title {
  font-family: "Libre Franklin", sans-serif;
  font-size: 25px;
  line-height: 28px;
  font-weight: 500;
}
.tag {
  font-size: 15px;
  font-weight: 300;
  line-height: 20px;
  color: teal;
}
.content {
  font-size: 20px;
  font-weight: 500;
  line-height: 25px;
}
.user {
  margin-top: 20px;
}

.user img {
  width: 100px;
  height: 100px;
  object-fit: contain;
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
  width: 50%;
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
.search {
  width: 45vw !important;
  flex: none !important;
  margin: auto;
}
/* neu khong co ai thi hien thi thong bao  */
</style>
