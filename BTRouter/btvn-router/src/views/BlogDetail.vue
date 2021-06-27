<template>
  <div class="blogDetail">
    <div class="blog-detail-img">
      <img
        src="https://images.unsplash.com/photo-1460398160830-bd2f5309bea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=738&q=80"
        alt=""
      />
    </div>
    <div class="blog-detail-content">
      <div class="blog-detail-inner">
        <div class="blog-detail-title">
          {{ this.activeBlog.title }}
        </div>
        <div class="blog-detail-address">
          {{ this.activeBlog.address }} <span>{{ this.activeBlog.time }}</span>
        </div>
        <div class="blog-detail-tags">#technology#tech#carrer</div>
        <div class="blog-detail-content-inner">
          <p>
            {{ this.activeBlog.text }}
          </p>
        </div>
      </div>
      <div class="blog-detail-author">
        <h2 class="about-content">About the author</h2>
        <div class="about-author">
          <div class="left-author">
            <img
              src="https://images.unsplash.com/photo-1506751470038-e579eb91f580?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
              alt=""
            />
          </div>
          <div class="right-author">
            <div class="name-author">Arthur Black</div>
            <div class="tag-author">@arthurblack</div>
            <div class="about-author-text">
              Ipsum adipisicing culpa est nisi consequat ex amet magna culpa
              veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in
              consectetur ex sunt id mollit commodo ipsum deserunt quis.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogDetail",
  created() {
    console.log(this.activeBlog);
  },
  data() {
    return {
      blogList: [
        {
          id: "1",
          technology: "MINIMALISM",
          title: "Culpa sit Laboris Exercitation ea Fugiat",
          address: "Leslie Pena",
          time: "April 25, 2012 (6 mins read)",
          thumbnail:
            "https://www.simplilearn.com/ice9/free_resources_article_thumb/Artificial-Intelligence-and-Machine-Learning-Technologies.jpg",
          text: "LeIncididunt occaecat et qui dolore consectetur Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.",
        },
        {
          id: "2",
          technology: "Technology",
          title: "Amet non Ex Officia nulla Cupidatat",
          address: "Jacob Henry",
          time: "September 27, 2017 (8 mins read)",
          thumbnail:
            "https://www.thuatngumarketing.com/wp-content/uploads/2018/01/infotech.jpg",
          text: "Sint anim Lorem aute duis Lorem incididunt. Nulla nostrud irure id ipsum aute excepteur duis sint. Do occaecat sit dolor magna esse. Mollit incididunt cillum consectetur fugiat adipisicing dolor est id minim amet cillum esse Lorem. Deserunt non duis excepteur aliqua duis eu reprehenderit.",
        },
        {
          id: "3",
          technology: "Article",
          title: "Dolor ex Tempor Cotur Culpa li",
          address: "Darrell Lane",
          time: "May 16, 2017 (3 mins read)",
          thumbnail:
            "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX39035597.jpg",
          text: "Incididunt sint nulla eu adipisicing eu reprehenderit proident consequat est. Nisi consectetur incididunt mollit officia ut cupidatat laborum proident eu velit Lorem deserunt deserunt voluptate. Proident nostrud laborum reprehenderit culpa irure id labore do ad do minim nisi. Incididunt ex.",
        },
      ],
    };
  },
  computed: {
    activeBlog() {
      return this.blogList.find((i) => i.id === this.$route.params.id);
    },
  },
};
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
  font-family: "Open Sans", sans-serif;
}
.blog-detail-img {
  width: 100vw;
}
.blog-detail-img img {
  width: 95%;
  margin: auto;
  height: 80vh;
  object-fit: cover;
}
.blog-detail-content {
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: column;
}
.blog-detail-inner {
  width: 50%;
  padding: 50px 0px;
  margin: auto;
}
.blog-detail-content-inner {
  padding-top: 30px;
}
ul {
  list-style: none;
  display: flex;
  text-align: center;
}
.blog-detail-title {
  font-family: "Libre Baskerville", serif;
  font-weight: 700;
  font-style: normal;
  font-size: 42px;
  line-height: 52.08px;
}
.blog-detail-address {
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 22px;
  color: rgba(28, 28, 28, 0.5);
  padding-top: 20px;
  padding-bottom: 20px;
}
.blog-detail-tags {
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  color: rgba(28, 28, 28, 0.5);
}
.blog-detail-content {
  padding-top: 20px;
}
.blog-detail-content p {
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  color: #000000;
}

.blog-detail-author {
  width: 50%;
  margin: auto;
}
.about-author {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
.left-author {
  width: 35%;
}
.left-author img {
  width: 160px;
  height: 160px;
  border-radius: 50%;
}
.right-author {
  padding-left: 30px;
  text-align: left;
}
.name-author {
  font-family: "Libre Baskerville", serif;
  font-style: bold;
  font-size: 33px;
  line-height: 41px;
}
.tag-author {
  font-size: 16px;
  line-height: 22px;
  color: rgba(28, 28, 28, 0.5);
}
.about-author-text {
  font-size: 16px;
  line-height: 22px;
  color: #1c1c1c;
}
.about-content {
  text-align: left;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  line-height: 27.24px;
  color: rgba(28, 28, 28, 0.5);
  text-transform: uppercase;
  padding-bottom: 20px;
}
</style>
