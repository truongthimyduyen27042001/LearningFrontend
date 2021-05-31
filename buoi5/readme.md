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
    })