<template>
  <div id="nav">
    <div class="left-nav">
      <div class="logo-nav">
        <div class="logo-box"></div>
        <div class="logo-brand" @click="$router.push('/')">
          nu<span>ntium</span>
        </div>
      </div>
      <div class="list-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/blogs">Blogs</router-link>
      </div>
    </div>
    <div class="right-nav">
      <button
        type="button"
        @click="$router.push('/auth/login')"
        class="btn btn-outline-success"
      >
        Sign in
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#nav {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.logo-nav {
  position: relative;
  display: flex;
}
.logo-box {
  width: 58px;
  height: 57px;
  background: #1c1c1c;
}
.logo-brand {
  font-size: 30px;
  line-height: 37px;
  font-family: "Libre Baskerville", serif;
  display: flex;
  align-items: center;
  color: #ffffff;
  transform: translateX(-42px);
}
.logo-brand span {
  color: black;
}
.left-nav {
  display: flex;
}
.list-nav {
  display: flex;
  align-items: center;
  transform: translateX(-42px);
}
.list-nav a {
  margin-right: 20px;
}
.list-nav a:first-child {
  margin-left: 20px;
}
.right-nav button {
  padding: 5px 40px;
}
.right-nav svg {
  margin-right: 20px;
}
.right-nav button {
  padding: 5px 20px;
}
.right-nav button:focus {
  box-shadow: none !important;
}
</style>
