<template>
    <div class="demo-slot container">
        <div class="row">
            <h3>{{title}}</h3>
        </div>
        <div class="row">
            <ul class="tabs-header m-auto">
                <li v-for="(item,index) in tabsHeader" :key="index" @="tabActive=index">
                    {{item.text}}
                </li>
            </ul>
            <div class="tab-content home" v-if="tabActive===0">
                <p>Home Lorem ipsum dolor sit amet consectetur,
                     adipisicing elit. Dicta voluptates repellendus,
                      amet blanditiis ipsa commodi quasi, velit sint 
                      voluptas dolorem debitis atque exercitationem 
                      quidem ad. Voluptates ab unde minima temporibus!
                </p>
                <p>Home Lorem ipsum dolor sit amet consectetur,
                     adipisicing elit. Dicta voluptates repellendus,
                      amet blanditiis ipsa commodi quasi, velit sint 
                      voluptas dolorem debitis atque exercitationem 
                      quidem ad. Voluptates ab unde minima temporibus!
                </p>
                <p>Home Lorem ipsum dolor sit amet consectetur,
                     adipisicing elit. Dicta voluptates repellendus,
                      amet blanditiis ipsa commodi quasi, velit sint 
                      voluptas dolorem debitis atque exercitationem 
                      quidem ad. Voluptates ab unde minima temporibus!
                </p>
            </div>
               <div class="tab-content blog" v-if="tabActive===1">
                <p>Blog Lorem ipsum dolor sit amet consectetur,
                     adipisicing elit. Dicta voluptates repellendus,
                      amet blanditiis ipsa commodi quasi, velit sint 
                      voluptas dolorem debitis atque exercitationem 
                      quidem ad. Voluptates ab unde minima temporibus!
                </p>
                <p>Blog Lorem ipsum dolor sit amet consectetur,
                     adipisicing elit. Dicta voluptates repellendus,
                      amet blanditiis ipsa commodi quasi, velit sint 
                      voluptas dolorem debitis atque exercitationem 
                      quidem ad. Voluptates ab unde minima temporibus!
                </p>
                <p>Blog Lorem ipsum dolor sit amet consectetur,
                     adipisicing elit. Dicta voluptates repellendus,
                      amet blanditiis ipsa commodi quasi, velit sint 
                      voluptas dolorem debitis atque exercitationem 
                      quidem ad. Voluptates ab unde minima temporibus!
                </p>
            </div>
               <div class="tab-content contact" v-if="tabActive===2">
                <p>Contact Lorem ipsum dolor sit amet consectetur,
                     adipisicing elit. Dicta voluptates repellendus,
                      amet blanditiis ipsa commodi quasi, velit sint 
                      voluptas dolorem debitis atque exercitationem 
                      quidem ad. Voluptates ab unde minima temporibus!
                </p>
                <p>Contact Lorem ipsum dolor sit amet consectetur,
                     adipisicing elit. Dicta voluptates repellendus,
                      amet blanditiis ipsa commodi quasi, velit sint 
                      voluptas dolorem debitis atque exercitationem 
                      quidem ad. Voluptates ab unde minima temporibus!
                </p>
                <p>Contact Lorem ipsum dolor sit amet consectetur,
                     adipisicing elit. Dicta voluptates repellendus,
                      amet blanditiis ipsa commodi quasi, velit sint 
                      voluptas dolorem debitis atque exercitationem 
                      quidem ad. Voluptates ab unde minima temporibus!
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props:{
      title:String,
      listContent:Array
  },
  data () {
    return {
        tabsHeader:[
            {
                text:'Home'
            },
            {
                text:'Blogs'
            },
            {
                text:'Contact'
            }
        ],
        tabActive:0
    } 
  },
  
}
</script>
<style scoped>
.demo-slot{
    padding:50px 20px;
    width:100%;
    height:500px;
    border:1px solid black;
}
h3{
    padding-bottom:10px;
}
.tabs-header{
    display: flex;
    border:1px solid #000;
    list-style: none;
    padding-left:0px;
}
.tabs-header li{
    padding:10px 20px;
    background-color:#ccc;
    transition:all 0.3s ease;
    border:1px solid #333;
    cursor: pointer;
}
.tabs-header li:hover{
    background-color:#333;
    color:#fff;
}
.tab-content{
    padding:20px 50px;
    text-align: left;
}
</style>