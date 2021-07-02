<template>
  <div class="slidebar" style="width: 20%">
    <div class="logo-nav">
      <div class="logo-box"></div>
      <div class="logo-brand">nu<span>ntium</span></div>
    </div>
    <ul class="web-list">
      <li>
        <i class="fas fa-chart-line"></i>
        <p>Dashboard</p>
      </li>
      <li>
        <i class="fas fa-user"></i>
        <p>Profile</p>
      </li>
      <li>
        <i class="fas fa-pen"></i>
        <p>Write a Post</p>
      </li>
      <li>
        <i class="fas fa-angle-double-right"></i>
        <p>All Posts</p>
      </li>
      <li>
        <i class="fas fa-cube"></i>
        <p>Resources</p>
      </li>
      <li>
        <i class="fas fa-cog"></i>
        <p>Setting</p>
      </li>
      <li>
        <i class="fas fa-sign-out-alt"></i>
        <p>Log Out</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sliderbar",
};
</script>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
}
.slidebar {
  width: 100%;
  height: 100vh;
  background-color: #1e2731;
  padding: 20px;
}
.logo-nav {
  position: relative;
  display: flex;
  height: 10%;
}
.logo-box {
  width: 50px;
  height: 48px;
  background: #fff;
}
.logo-brand {
  font-size: 30px;
  line-height: 37px;
  font-family: "Libre Baskerville", serif;
  display: flex;
  align-items: center;
  color: #1e2731;
  transform: translateX(-42px);
}
.logo-brand span {
  color: #fff;
}
.web-list {
  height: 90%;
  list-style: none;
  padding: 40px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.web-list li {
  padding-top: 20px;
  margin-bottom: 10px;
  width: 60%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 26px;
}
.web-list li {
  font-size: 15px;
  line-height: 18px;
  cursor: pointer;
}
.web-list li p {
  margin-bottom: 0rem !important;
  cursor: pointer;
}
.web-list li i {
  padding-right: 20px;
  cursor: pointer;
}
</style>
