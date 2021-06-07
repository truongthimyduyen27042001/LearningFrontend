<template>
    <header>
        <h1>Hello VueJS - {{titleHeader}}</h1>
        <button v-on:click="changeTitleHeader">Thay doi title tu component Header</button>

    </header>    
</template>


<script>

export default{
    name:'comp-header',
    props:{
        titleHeader:String
    },
    data(){
        return {
            text:'Vuejs'
        }
        
    },
    methods:{
        changeTitleHeader(e){
            console.log(e.target)    
        }
    }
}
</script>