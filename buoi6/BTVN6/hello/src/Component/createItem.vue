<template>
     <div>
          <div class='col-12 col-sm-10 col-md-10 col-lg-10'>
          <input
              v-model="newLabel"
              type="text"
              class="form-control addNew"
              placeholder="What needs to be done ?"
              aria-label="What needs to be done ?"
              aria-describedby="button-addon2"
            />
            <p  class="pl-1"> {{checkValid}}</p>
            <hr/>
          </div>
          <div class='col-12 col-sm-2 col-md-2 col-lg-2'>
              <button type="button" class="btn btn-primary" @click="addList()">Accept</button>
          </div>
          
     </div>
</template>
<script>

export default {
  name: 'createItem_component', 
   props:{
      newLabel:{
          type:String,
          require:false,
          default:null
      },
      checkError:{
        type:Boolean,
        require:false,
        default:null
      }
    
  },
  data () {
    return {
      title: 'Hello Home',
      error:false      
    }
  },
   methods:{
     addList(){
          if((this.newLabel==='')){
            this.error=true
          }
          else{
             this.$emit('addList',this.newLabel)
            this.newLabel=''
            this.error=false
          }
     }
  },
 computed:{
    checkValid(){
     if(this.error) return '* This is not valid'
     else if(this.checkError) return '* This label is exist'
    }
}
}


</script>
<style >

</style>