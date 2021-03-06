Nội dung bài học buổi 4 
I. Component basic 
1. Component là gì ? 
    - Nó giúp cho chúng ta gom nhóm các mã HTML lại để tái sử dụng cho các module tương tự. Ở một mức độ cao thì component là một thành phần được Vue.js biên dịch để xử lý các hành vi. Và trong một vài trường hợp thì nó cũng có thể xuất hiện như một phần tử HTML với các attribute đặc biệt (is - sẽ nói ở bên dưới).
2. Cách chạy một component cơ bản 
bước 1:  tạo new Vue khai báo el 
    example: new Vue({
        el:'#app'
    })
bước 2 : khai báo component ứng với vue 
    example: 

    Vue.component('name_of_component', {
        props: ['name_of_data/(can use muliti data)']
        data(){

        }
    })
3. Tính chất của component 
    - Dùng được nhiều lần 
    - Giúp tổ chức một cách thống nhất những thành phần của một trang web 
    - Có thể ghi đè lại thành phần tùy theo các lựa chọn 
    - Có thể dùng với các sự kiện của cha
4. Học component 
* Component với slot 
    - Dùng slot trong template của component để viết những html khác nhau giữa các thành phần render của component 
    - Có thể khai báo nhiều slot trong cùng một template tuy nhiên phải dùng name để phân biệt giữa các slot 
example : 
    let something = Vue.component('defaultComponent',{
        template:`
            <div>
                <slot name="before" />
                <Navbar/>
                <Sliderbar/>
                <br/>
                <slot name = "below"/ >
                `
    })
    * Lưu ý : Nếu như mình khai báo <slot> nhưng sau đó lại không định nghĩa thì điều gì sẽ xảy ra ? 
        --> Thì những thứ mình khai báo sẵn trong slot sẽ render ra :v 

====> Mục đích của slot : vì khi khai báo nhiều thành phần thì sẽ giúp chương trình hiểu bạn đang khai báo trong cái slot nào 
* Component đệ quy 
Code : 
    let treeFolder=Vue.component('tree-folder',{
        template:`
        <p> 
            <span>{{folder.content}}</span>
            <tree-folder-children :children="folder.children"/>
        <p>
        `,
        props:['folder'],
        components:[
            {
                treeFolderChild
            }
        ]

    })
    let treeFolderChild=Vue.component('treeFolderChild',{
        template:`
        <ul>
            <li v-for="child in children>
                <treeFolder v-if="child.children"  :folder="child/">
                <span v-else>{{child.content}}<</span>>
            <li>
        <ul>  
    })
    var app=new Vue({
        el:'app',
        components:[
            treeFolder
        ],
        data:{
            parentMessage:'Helllo from parent',
            treeData:[
                {
                    content:'Content1',
                    children:[
                        {
                            content:'Content child 1.1',
                            children:[{
                                content:'Content child 1.1.1',
                                child:[]
                            }]
                        }
                    ]

                },
                {
                    content:'Content2',
                    children:[]
                }
            ]
        }
    })
<!-- Tại file index.html -->
    <div id="app">
        <tree-folder :folder="item" v-for="item in treeData">
    </div>


***Giải thích code : ban đầu trong mảng của mình có 2 parent gọi là A-parent (Content, children(2)), B-parent (Content,children(0)),  A có 1 children  A1( Content,children(1)) và A1 có children là A1.1(Content, children(0)).
Ban đầu nó sẽ nhảy vào treeFolder sau đó render ra những dữ liệu của A và B , trong component treeFolder có component treeFolderChild (^_^) thì những object có children nó sẽ gán children đó vào component treeFolderChild -> nó chạy đến template của treeFolderChild để render. Khi đến code của treeFolderChild nó kiểm tra trong thành phần child của nó xem có còn nữa không, nếu còn thì tiếp tục xem thành phần đang chạy là một thằng cha, và thực hiện lại từ đầu.... Nếu không còn thì nó sẽ hiển thị content và kết thúc.

II. Component In Project 
    - Thực tế thì để làm một trang web thì cần rất nhiều trang, mà mỗi trang đều có thể dùng lại component giống nhau, như header,footer , navbar 
    - Và khởi tạo nhiều component để phù hợp với từng trang 
    - Nhưng nếu làm như thế mà chúng ta lại bỏ cdn để chương trình tự render web thì không đúng, vì bỏ link cdn thì nó sẽ quét một lượt duy nhất từ đầu đến cuối, sau đó trang web tự thực hiện render. Nhưng thực tế thì khi làm một dự án, thì chương trình sẽ có thời gian dừng lại để render từng component tương ứng với trang web theo đường dẫn router, nên js cũng sẽ load lại. ====> Máy tính cần một môi trường để chạy theo và phục vụ việc đó .

    --------> Cần cài đặt môi trường và đông thời tạo ra những component và đặt trong một folder để khi dùng đến thì gọi , một trang web chính để render, chỉ thay đổi các component.
1. Các bước cài đặt 
    - Cài đặt nodejs 
    - Cài đặt Vue CLI/gitpack 
    - Cài đặt npm vue
    - Cài đặt Vetur 
2. Cách cài đặt cụ thể 
    * Nodejs : 
        Lên mạng tự cài :)))))
    * Cài đặt VueCLI : 
        Cách 1 : Vào docs của Vue để cài 
            Phần Ecosystem/VueJS : npm install -g @vue/cli
        Cách 2 : Dùng gitback để cài 
            winpty vue.cmd create example-cli
            * Tuy nhieên phải set cấu hình cho nó : 
                - (1) Manully select 
                - (2) Chọn babel
                - (3) progress web app (PWA) Support
                - (4) CSS Pre-processor 
                - (5) Eslin/premiter 
                - (6) Linst on save 
                - (7) config file 
                - (8) y (save this as a preset for future project)