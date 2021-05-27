var list = new Vue({
    el: '#app',
    data: {
        arr:[
            {
                name:'Web Development',
                price:300000,
                choice:false
               
            },
            {
                name:'Design',
                price:400000,
                choice:false
               
            },
            {
                name:'Integration',
                price:250000,
                choice:false
              
            },
            {
                name:'Training',
                price:200000,
                choice:false
            }
        ],
        arrChoice: []
    },
    methods: {
        addToChoice: function(item) {
            item.choice = true;
            this.arrChoice.push(item);
        },
        removeFromChoice: function(item) {
            this.arrChoice.pop(item);
            item.choice = false;
        }
    },
    computed: {
        total() {
            let sum = 0;
            for (let i = 0; i < this.arrChoice.length; i++) {
                sum += this.arrChoice[i].price;
            }
            return sum;
        }
    }
})