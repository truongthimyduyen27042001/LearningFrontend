<template>
  <div id="nav">
    <div class="left-nav">
      <div class="logo-nav">
        <div class="logo-box"></div>
        <div class="logo-brand">nu<span>ntium</span></div>
      </div>
      <div class="list-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/blogs">Blogs</router-link>
      </div>
    </div>
    <div class="right-nav">
      <svg
        style="width: 16px"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="search"
        class="svg-inline--fa fa-search fa-w-16"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
        ></path>
      </svg>
      <button type="button" class="btn btn-outline-secondary">Login</button>
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
</style>
