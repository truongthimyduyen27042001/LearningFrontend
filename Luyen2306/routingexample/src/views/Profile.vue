<template>
  <div>
      <h1>My Profile</h1>
      <h2>{{$route.params.id}}</h2>
      <router-link :to="{name:'Profile',params:{id:'456'},querry:{plan:'private'}}">Another Router</router-link>
        <br/>
        <router-link :to="{name:'Info',params :{id: '3'}}">Another 2 </router-link>
        <h5>{{$route.querry}}</h5>
  </div>
</template>

<script>
export default {
    created(){
        console.log(this.$route.params.id)
    }
}
</script>

<style>

</style>