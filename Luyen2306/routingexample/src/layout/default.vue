<template>
  <div class="default-inner">
      <Navbar/>
      <slot/>
  </div>
</template>

<script>
import Navbar from '../components/common/Navbar.vue'
export default {
    components:{
        Navbar
    }
}
</script>

<style>

</style>