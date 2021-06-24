new Vue({
    el:"#app",
    data(){
        return{
            playerHealth:100,
            monsterHealth:100,
            isStart:false
        }
    },
    methods:{
        runGame:function(){
            this.isStart=!this.isStart;
            this.playerHealth=100;
            this.monsterHealth=100
        },
        attack:function(){
            //Moster
            this.monsterHealth-=this.getDame(10,4);
            //player
            this.monsterAttack()
            this.checkPlayerOptions()
            if(this.checkPlayerOptions()){
                return
            }

        },
        specialAttack:function(){

            //Moster
            this.monsterHealth-=this.getDame(20,10);;
            //player
           this.monsterAttack()
            this.checkPlayerOptions()
            if(this.checkPlayerOptions()){
                return
            }

        },
        heal:function(){

        },
        giveUp:function(){

        },
        playerAttack:function(){
            this.monsterHealth-=this.getDame(10,4)
            this.checkPlayerOptions()
        },
        monsterAttack:function(){
            this.playerHealth-=this.getDame(12,5)
            this.checkPlayerOptions()
        },
        getDame:function(maxDame,minDame){
            return Math.max(Math.floor(Math.random()*maxDame)+1,minDame);
        },
        checkPlayerOptions:function(){
            console.log(this.monsterHealth)
            console.log(this.playerHealth)
            if(this.monsterHealth<=0){
                if(confirm('You Lost!New game?')){
                    this.runGame()
                }
                else {
                    this.isStart=false
                    this.playerHealth=0
                }
            }
            else if(this.playerHealth<=0){
                if(confirm('You won!New game?')){
                    this.runGame()
                }
                else {
                    this.isStart=false
                    this.monsterHealth=0
                }
            }
        }
    }
})