<template>
    <div>
     <div class="home-inner container">
       <div class="row">
        <div class="col-12">
          <div class="component-title">
            <h2>{{title}}</h2>
          </div>
        </div>
      </div>
      <div class="todolist">
        <createItem class="row" v-on:addList="handleAddList" :newLabel="newLabel" :checkError="checkError"></createItem>
       <div> <h3 class="text-center">{{checkEmpty}}</h3></div>
        <Items class="lists" 
            v-on:goEdit="handleEdit" 
            v-on:goDelete="handleDelete"
            v-on:goChangeLabel="handleChangeLabel"
            v-on:goStopEdit="handleStopEdit"
            v-on:goDone="handleDone"
            :lists="listdata"
         > 
          
        </Items>
      </div>

     </div>

    </div>
 
</template>
<script>
import CreateItem from './createItem.vue'
import Items from './Items.vue'
export default {
  name: 'home_component',
  props:{
      author:{
          type:String,
          require:false,
          default:null
      }
  },
 
  data () {
    return {
      title: 'Hello Home',
      newLabel:'',
      checkError:false,
      listdata:[
      ]
    }
  },
   methods:{
      changeAuthor(e){
        let authorNew=document.getElementById('authorInput')
        console.log(authorNew.value)
          this.$emit('changeAuthor',authorNew.value)
      },
      handleAddList(val){
              if(this.listdata.find(item=>item.label===val)){
              console.log('Da ton tai')
              this.checkError=true
            }
            else {
                this.listdata.push({
                label:val,
                done:false,
                edit:false
              })
         }         
      },
      handleEdit(item){
         item.edit=true
      },
      handleDelete(val){
        console.log(val)
        let index=this.listdata.findIndex(item=>item.label===val) 
          if(index>=0){
                this.listdata.splice(index,1)
            }
      },
      handleChangeLabel(item,val){
        console.log(val)
         if(val===''){
            console.log('khong the them')
            
        }
        else {
            console.log('co the them')
            let index=this.listdata.findIndex(item=>item.label===val)
            if(index>=0){
                console.log('da ton ton')
            }
            else {
                item.label=val      
            }
        }
          item.edit=false    
      },
      handleStopEdit(item){
         item.edit=false
      },
      handleDone(item){
        item.done=true
      }
  },
  computed:{
    checkEmpty(){
     if(this.listdata.length==0) return 'This is empty'
        else return ''
  
    }
  },
  components:{
    CreateItem,
    Items
  }
}
</script>
<style>

.home-inner{
 background-image: linear-gradient(#fc6c48 0%, #ef5081 100%);
  width:60%;
  margin:auto;
  border-radius:10px;
  padding:10px 15px;
  text-align: left;
  color:#fff;
}
.todolist{
  padding-top:20px;
}
.lists{
  padding-top:20px;
}
.list-small{
  padding-bottom:20px;
  padding-top:10px;
}
.list-small:first{
  padding-top:0px;
}
.list-small label{
    font-size:20px;
}
.list-icon{
  display: flex;
  justify-content: flex-end;
}
.icon{
      display: flex;
    align-items: center;
}
.icon{
  border-radius:10px;
}
.icon i{
    padding: 13px 15px;
    border-radius: 5px;
    color: #fff;
    border-radius:10px;
}
.icon-edit{
  background-color:#47a347;

}
.edit-active{
    background-color:#1d5e2d;
}
.icon-delete{
  background-color:#ff0000;
  margin-left:10px;
}
.itemDone{
  text-decoration: line-through;
  color:rgb(100, 99, 99);
}
.d-block{
  display:block;
}
.d-flex{
  display:flex;
}
</style>