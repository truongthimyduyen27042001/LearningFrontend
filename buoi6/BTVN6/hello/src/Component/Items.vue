<template>
    <div>
         <div class="row list-small" v-for="item in lists" :key="item.label">
                  
                  <div class="col-12 col-sm-8 col-md-8 col-lg-8">
                    <input type="checkbox" :checked="item.done" v-model="item.done">
                    <label for="" :class="item.done?'itemDone':''" @click="goDone(item)">{{item.label}}</label>
                  </div>
                  <div class="col-12 col-sm-4 col-md-4 col-lg-4 list-icon" style="display: flex;">
                      <div class="icon icon-edit" @click="goEdit(item)" :class="item.edit?'edit-active':''">
                        <i class="fas fa-edit"></i>
                      </div>
                      <div class="icon icon-delete" @click="goDelete(item.label)">
                        <i class="fas fa-trash-alt"></i>
                      </div>
                  </div>
                <!-- Neus laf edit  -->
                  <div class="col-12 col-sm-8 col-md-8 col-lg-8 mt-1">
                     <input type="text" placeholder="Enter new label...." v-model="editLabel" class="form-control"  :style="item.edit?'display:block':'display:none'">
                  </div>
                  <div class="col-12 col-sm-4 col-md-4 col-lg-4 list-icon  mt-1" :style="item.edit?'display:flex':'display:none'">
                      <div class="icon icon-edit" @click="goChangeLabel(item)"> 
                       <i class="fas fa-check"></i>
                      </div>
                      <div class="icon icon-delete" @click="goStopEdit(item)">
                        <i class="fas fa-minus"></i>
                      </div>
                  </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'items_component', 
   props:{
      lists:{
          type:Array,
          require:false,
          default:null
      },
     
  },
  data () {
    return {
      title: 'Hello Items', 
      editLabel:''
    }
  },
   methods:{
      goEdit(item){
           this.$emit('goEdit',item)
      },
      goDelete(val){
          this.$emit('goDelete',val)
      },
      goChangeLabel(item){ 
            this.$emit('goChangeLabel',item,this.editLabel)
            this.editLabel=''
      },
      goStopEdit(item){
        this.$emit('goStopEdit',item)
      },
      goDone(item){
          this.$emit('goDone',item)
      }
  },
}

</script>