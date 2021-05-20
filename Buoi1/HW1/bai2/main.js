new Vue({
    el:'#app',
    data:{
        currentName:'Thu nghiem',
        charactes:['Duyen','Tuan','Tam','Sa'],
        arr:[
            {
                name:'Web Development',
                price:'$300.00',
                isChoice:true
            },
            {
                name:'Design',
                price:'$400.00',
                isChoice:true
            },
            {
                name:'Integration',
                price:'$250.00',
                isChoice:false
            },
            {
                name:'Training',
                price:'$220.00',
                isChoice:false
            }
        ],
    arrChoice:[{

    }]
    },
    methods:{
      
        Buy(item){
            if(item.isChoice) item.isChoice=false;
            else item.isChoice=true
            this.arrChoice.push({name:item.name,price:item.price})
           
        }
    }
})
