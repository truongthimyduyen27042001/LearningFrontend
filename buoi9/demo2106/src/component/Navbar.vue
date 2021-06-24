<template>
  <nav>
      <h1>Logo</h1>
      <ul class="nav-links">
          <li>Home</li>
          <li>Product</li>
          <li>About</li>
      </ul>
  </nav>
</template>

<script>
export default {
    name:'Navbar',

}
</script>

<style scoped>
nav{
    display:flex;
    justify-content: space-between;
}
.nav-links{
    display: flex;
    background-color:#333;
    color:#fff;
    padding:10px 5px;
    width:60%;
    justify-content: space-between;
}
</style>