<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
    <div class="container">
      <router-link to="/home"
        ><img src="http://placehold.it/150x50?text=Logo" alt=""
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/blogs">Users</router-link>
          </li>
        </ul>
      </div>
      <button
        type="button"
        @click="$router.push('/auth/login')"
        class="btn btn-success"
      >
        Login
      </button>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar img {
  width: 150px;
  height: 80px;
  object-fit: contain;
}
.navbar-collapse {
  justify-content: flex-end;
}
a {
  color: #fff;
  text-decoration: none;
  padding-right: 20px;
  font-size: 16px;
  transition: 0.5s ease-in;
}
a:hover {
  color: aqua;
}
</style>
