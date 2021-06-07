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
      }
  },
  data () {
    return {
      title: 'Hello Home',      
    }
  },
   methods:{
     addList(){
          this.$emit('addList',this.newLabel)
          this.newLabel=''
     }
  },
}
</script>