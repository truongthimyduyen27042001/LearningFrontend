<template>
  <div>
  <div id="app">
      <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
      <Header></Header>
     <div class="app-inner container-fluid">
       <div class="container">
         <div class="row">
           <div class="col-12">
             <div class="section-title"><h1>WELCOME TO DO LIST</h1></div>
           </div>
         </div>
         <div class="row">
           <div class="col-12">
             <div class="section-btn">
               <button class="btn btn-primary"
                  @click="changeComponent('home')">Home</button>
              <button class="btn btn-primary"
                  @click="changeComponent('blog')">Blog</button>
              <button class="btn btn-primary" 
                  @click="changeComponent('contact')">Contact</button>
             </div>
           </div>
         </div>
       </div>
      
      <component class="container" :is="activeComponent" :author="author" @changeAuthor="changeAuthor"></component>
     </div>
    </div>
  
  </div>

 
</template>



<script>

// import Home from './Component/Home'
// import Contact from './Component/Contact'
// import Blog from './Component/Blog'
// import Header from './Component/header'

import {Home,Contact,Blog,Header} from './Component/index.js'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Truong thi my duyen',
      activeComponent: 'home',
      author:'le tuan'
    }
  },
  methods:{
    changeComponent(val){
      this.activeComponent=val
    },
    changeAuthor(val){  
      this.author=val
    }
  },
  components : {
    'home':Home,
    'contact':Contact,
    'blog':Blog,
    Header,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
*{
  padding:0;
  margin:0;
  font-family: 'Roboto', sans-serif;
  
  
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
  width:100vw;
  height:100%;
 
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.app-inner{
  padding-top:50px;
}
.section-btn{
  padding-bottom:20px;
}
.component-title{
  color:#fff;
  padding-bottom:20px;
  text-align: center;
}
</style>
