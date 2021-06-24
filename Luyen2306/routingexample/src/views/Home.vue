<template>
  <div class="home">
   <h1>This is home page</h1>
   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur assumenda officiis optio dolore necessitatibus illo eligendi cum natus, odio tempora repellendus odit rem neque. Accusantium tempore nihil aliquam numquam! Ut?</p>
    <hello-world msg="Webcome to Your Vue.js App"></hello-world>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'
export default {
  name: "Home",
  components: {
    HelloWorld
  },
};
</script>
<style  scoped>
.home p{
  margin:auto;
  width:40%;
  text-align: center;
  margin-top:50px;
}
</style>