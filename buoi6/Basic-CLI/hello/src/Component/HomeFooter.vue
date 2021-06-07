<template>
       <header><h1>{{textFooter}}- {{titleHeader}}</h1></header>    
</template>

<script>
export default{
    name:'comp-footer',
    props:{
        titleHeader:String
    },
    data(){
        return {
            textFooter:'Footer'
        }
        
    }
}
</script>
