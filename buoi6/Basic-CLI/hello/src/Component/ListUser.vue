<template>
    <div class="list-user">
        <user class="user" v-for="user in listdata" :key="user.id" :user="user" ></user>
         
    </div>
</template>

<script>
import User from './User.vue'
    export default{
        name:'list-user',
        props:{
            titleHeader:String,
            listdata:{
                type:Array,
                default:[]
            }
          },
        data(){
            return {
                }
        },
        components:{
            User
        }
    }
</script>
<style >
    *{
        padding:0;
        margin:0;
    }
    .list-user{
        display:flex;
        flex-wrap: wrap;
        justify-content:space-between;
        width:100vw;

        }
        .list-user .user{
            padding:30px;
            margin-bottom:30px;
            border: 1px solid black;
            width:25%;
        }
</style>