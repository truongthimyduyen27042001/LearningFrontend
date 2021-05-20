new Vue({
    el: '#app',
    
  data:{
    activeName: '',
      arr:[
      
          {
              name:'Home',
              active:true
          },
          {
              name:'Projects',
              active:false
          },
          {
              name:'Services',
              active:false
          },
          {
              name:'Contact',
              active:false
          }
      ]
  },
  methods:{
    
      turnActive(item){
       
        if(item.active) item.active=false;
        else item.active=true;
        this.activeName=item.name
      }
  }
})