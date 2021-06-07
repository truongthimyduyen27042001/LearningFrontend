<template>
  <div id="app">
    <button :click="title='title from App'">Thay doi title tu component Appp</button>
    <HomeHeader v-bind:titleHeader="title"></HomeHeader>
    
    <ListUser v-bind:listdata="listdata"></ListUser>
    <HomeFooter v-bind:titleHeader="title"></HomeFooter>
  </div>

</template>



<script>
/* 
  Header 
  List User  
    User 
    User  
    User 
    User 
  Footer 
  --->Props : Những component cha truyền vào component con 

*/
import HomeHeader from './Component/HomeHeader.vue'
import HomeFooter from './Component/HomeFooter.vue'
import ListUser from './Component/ListUser.vue'

export default {
  name: 'app',
  data () {
    return {
      title: 'Title header',
      listdata:[
        {
           id:0, email: 'test1@gmail.com',active:true
        },
        {
             id:1,email: 'test2@gmail.com',active:false
        },
        {
           id:2,   email: 'test3@gmail.com',active:true
        },
        {
             id:3,email: 'test4@gmail.com',active:false
        },
        {
             id:4,email: 'test5@gmail.com',active:true
        },
        {
             id:5,email: 'test6@gmail.com',active:false
        },
        {
             id:6,email: 'test7@gmail.com',active:true
        },
        {
             id:7,email: 'test8@gmail.com',active:false
        },
        {
             id:8,email: 'test9@gmail.com',active:true
        },

      ]
    
    }
  },
  components:{
      HomeHeader,
      HomeFooter,
      ListUser
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
}
.container{
  max-width: 1170px;
  margin:0 auto;
  padding:0 15px;
  min-height: 3000px;
}

</style>
