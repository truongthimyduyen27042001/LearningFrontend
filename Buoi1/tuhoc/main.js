new Vue({
    el: '#app',
    
  data:{
 
    currrenName:'',
      arr:[
          {
              name:'Truong Thi My Duyen',
              done:false
          },
          {
              name:'Le Tuan',
              done:false
          },
          {
              name:'Tran Thi Sa',
              done:false
          },
          {
              name:'Truong Van Tam',
              done:false
          }
      ]
  },
  methods:{
    addToArr: function(){
        if(this.arr.find((item)=>item.name!==this.currrenName)){  
            alert('co roi')
        }
        else{
            this.arr.push({name:this.currrenName,done:false})
        
        }
       
    },
    removeFromArr(item){
        // const index=this.arr.findIndex(i=>i.name===item.name)
        // if(index>=0){
        //     this.arr.splice(index,1)
        // }
        if(item.done) item.done=false;
        else item.done=true;
    }
  }
})