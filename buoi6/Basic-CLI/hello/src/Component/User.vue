<template>
   <p>{{user.email}}</p>
</template>

<script>
    export default{
        name:'user',
        props:{
            user:{
                type:Object,
                default:null
            }
        },
        data(){
            return {
                
            }
        }
    }
</script>