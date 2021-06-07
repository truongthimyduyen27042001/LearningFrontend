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
       <div  :style="empty?'display:block':'display:none'">
         <h3 class="text-center">This is empty</h3>
      </div>
       <div class="controlList contaner" :style="empty?'display:none':'display:block'">
            <div class="row">
              <div class="col-12 col-sm-6 d-flex justify-content-center">
                <button type="button" class="btn btn-primary" @click="handleDeleteAll">Delete All</button>
              </div>
               <div class="col-12 col-sm-6 d-flex justify-content-center">
                 <h2>Total : {{total}}</h2>
              </div>
            </div>
        </div>
        <Items class="lists" 
            v-on:goEdit="handleEdit" 
            v-on:goDelete="handleDelete"
            v-on:goChangeLabel="handleChangeLabel"
            v-on:goStopEdit="handleStopEdit"
            v-on:goDone="handleDone"
            :lists="listdata"
            :checkError="checkError"
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
              this.checkError=false
         }         
      },
      handleEdit(item){
         item.edit=true
      },
      handleDelete(val){
        let index=this.listdata.findIndex(item=>item.label===val) 
          if(index>=0){
                this.listdata.splice(index,1)
            }
      },
      handleChangeLabel(item,val){
         if(val===''){
            console.log('khong the them')
            this.checkError=true

        }
        else { 
            console.log('co the them')
            let index=this.listdata.findIndex(item=>item.label===val)
            if(index>=0){
                console.log('da ton ton')
            }
            else {
                item.label=val  
                this.checkError=false    
            }
        }
          item.edit=false  

      },
      handleStopEdit(item){
         item.edit=false
      },
      handleDone(item){
        item.done=true
      },
      handleDeleteAll(){
        this.listdata=[]
      }
  },
  computed:{
    total(){
      return this.listdata.length
    },
    empty(){
      if(this.listdata.length==0) return true
      else return false
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
    cursor: pointer;
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
.pl-1{
  padding-left:10px;
  color:#14ffad;
}
.controlList{
  padding-top:10px;
  padding-bottom:10px;
}
</style>