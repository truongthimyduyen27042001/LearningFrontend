<template>
  <div id="app">
    <h1>Hello</h1>
   <demoSlot title="Demo TagsList">
    
   </demoSlot>
  </div>
</template>

<script>
import demoSlot from './DemoSlot.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    demoSlot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;
  padding-top:50px;
}

</style>

