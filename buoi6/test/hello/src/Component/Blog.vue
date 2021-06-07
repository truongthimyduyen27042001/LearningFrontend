<template>
    <div class="blog-inner container">
      <div class="row">
        <div class="col-12">
          <div class="component-title">
            <h2>{{title}}</h2>
          </div>
        </div>
      </div>
      <div class="blogs">
          <div class="blog-small row" v-for="blog in listBlog" :key="blog.categoryId">
            <div class="blog-img col-12 col-sm-3 col-md-3 col-lg-3">
              <img :src='blog.thumbnail' alt="">
            </div>
            <div class="blog-content col-12 col-sm-9 col-md-9 col-lg-9">
                <div class="blog-content-title">
                  <h4>{{blog.description}}</h4>
                </div>
                <div class="blog-content-skill">
                  <h5>{{blog.categoryId}}</h5>
                </div>
                <div class="blog-content">
                  <p>{{blog.content}}</p>
                </div>
                <div class="blog-icon">
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-twitter"></i>
                  <i class="far fa-comment"></i>
                </div>

            </div>
            
          </div>
      </div>
    </div>
 
</template>
<script>
export default {
  name: 'blog_component',
  data () {
    return {
      title: 'Hello Blog',
      listBlog:[
       {
        "id": "1",
        "categoryId": "UI developer",
        "createdAt": "2021-04-23T09:07:41.855Z",
        "title": "cross-platform",
        "thumbnail": 'http://lorempixel.com/640/480/animals',
        "description": "Legacy",
        "content": "I'll compress the cross-platform CSS monitor, that should alarm the JSON program!"
      },
        {
        "id": "3",
        "categoryId": " UX developer ",
        "createdAt": "2021-04-23T14:57:39.459Z",
        "title": "Bedfordshire",
        "thumbnail": "http://lorempixel.com/640/480/transport",
        "description": "Investor",
        "content": "If we transmit the bandwidth, we can get to the SCSI microchip through the back-end JBOD hard drive!"
      },
      {
        "id": "4",
        "categoryId": " UI developer ",
        "createdAt": "2021-04-23T13:31:36.828Z",
        "title": "programming application quantify",
        "thumbnail": "http://lorempixel.com/640/480/city",
        "description": "Dynamic",
        "content": "Use the redundant TCP capacitor, then you can parse the redundant monitor!"
      },
      {
        "id": "6",
        "categoryId": "Vue developer",
        "createdAt": "2021-04-23T21:46:59.584Z",
        "title": "Ergonomic Cotton Bacon",
        "thumbnail": "http://lorempixel.com/640/480/cats",
        "description": "Senior",
        "content": "You can't back up the driver without backing up the open-source EXE transmitter!"
      },
      {
        "id": "7",
        "categoryId": " UI developer ",
        "createdAt": "2021-04-23T18:21:17.130Z",
        "title": "Baby",
        "thumbnail": "http://lorempixel.com/640/480/technics",
        "description": "Lead",
        "content": "Try to transmit the IB sensor, maybe it will input the cross-platform transmitter!"
      },
      ]
    }
  }
}
</script>
<style>
.blog-inner{
 background-image: linear-gradient(#fc6c48 0%, #ef5081 100%);
  width:60%;
  margin:auto;
  border-radius:10px;
  padding:10px 15px;
  text-align: left;
  color:#fff;
}
.blogs{
  padding:10px 15px;
}
.blog-small{
  padding-bottom:20px;
}
.blog-img img{
  width:100%;
  object-fit: contain;
}
.blog-content-title h4{
  font-size:2rem;
}
.blog-content-skill{
  font-size:1.5rem;
}
.blog-icon{
  padding-top:5px;
}
.blog-icon i{
  padding-right:10px;
  
}

</style>