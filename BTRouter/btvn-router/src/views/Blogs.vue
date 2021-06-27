<template>
  <div class="blogs">
    <div class="blog-intro">
      <div class="blog-img">
        <img src="../assets/home2.jpg" alt="" />
      </div>
    </div>
    <div class="blog-content">
      <div class="content">
        <h2>Editor's Picks</h2>
      </div>
      <div id="blog-list" class="container">
        <div
          class="blog-small container"
          v-for="blog in blogList"
          :key="blog.id"
          @click="$router.push('/blog/' + blog.id)"
        >
          <div class="row">
            <div class="left-blog-small col-12 col-md-6 col-lg-6">
              <img :src="blog.thumbnail" alt="" />
            </div>
            <div class="right-blog-small col-12 col-md-6 col-lg-6">
              <h3 class="technology">{{ blog.technology }}</h3>
              <h2 class="blog-small-title">
                {{ blog.title }}
              </h2>
              <h4 class="address">
                {{ blog.address }} ,
                <span class="time">{{ blog.time }}</span>
              </h4>
              <p class="blog-small-text">
                {{ blog.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="blog-load">
      <div class="blog-article">
        <div class="blog-article-small container">
          <h3 class="technology">INTERIOR</h3>
          <h2 class="blog-small-title">Laborum Ullamco Sunt id ut Sunt</h2>
          <h4 class="address">
            Bessie Hawkins ,
            <span class="time">May 7, 2019 (10 mins read)</span>
          </h4>
          <p class="blog-small-text">
            Proident aliquip velit qui commodo officia qui consectetur dolor
            ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur.
            Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do
            enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla
            consequat velit magna.
          </p>
        </div>
      </div>
    </div>
    <div class="recent-posts container-fluird">
      <div class="row">
        <div class="articles col-12 col-sm-8 col-md-8 col-lg-8">
          <div
            class="article-inner row"
            v-for="article in articles"
            :key="'article' + article.id"
          >
            <div class="left-blog-small col-12 col-md-4 col-lg-4">
              <img :src="article.thumbnail" />
            </div>
            <div class="right-blog-small col-12 col-md-8 col-lg-8">
              <h3 class="technology">{{ article.technology }}</h3>
              <h2 class="blog-small-title">{{ article.title }}</h2>
              <h4 class="address">
                {{ article.address }} ,
                <span class="time">{{ article.time }}</span>
              </h4>
              <p class="blog-small-text">
                {{ article.text }}
              </p>
            </div>
          </div>
        </div>
        <div class="tags col-12 col-sm-4 col-lg-4">
          <div class="tag-content">tags</div>
          <ul class="tag-list" v-for="tag in tagList" :key="'tag-' + tag.id">
            <li>{{ tag.title }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Blogs",
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
      tagList: [
        {
          id: "1",
          title: "Technology",
        },
        {
          id: "2",
          title: "Open Sourece",
        },
        {
          id: "3",
          title: "avaScript",
        },
        {
          id: "4",
          title: "Mininalism",
        },
        {
          id: "5",
          title: "Selft-help",
        },
        {
          id: "6",
          title: "Animals",
        },
        {
          id: "7",
          title: "Herbiviores",
        },
        {
          id: "8",
          title: "HTML",
        },
        {
          id: "9",
          title: "CSS",
        },
        {
          id: "10",
          title: "PHP",
        },
        {
          id: "11",
          title: "Web Technologies",
        },
        {
          id: "12",
          title: "Carrer",
        },
        {
          id: "13",
          title: "Life",
        },
        {
          id: "14",
          title: "Spirtuality",
        },
        {
          id: "15",
          title: "Food",
        },
        {
          id: "16",
          title: "Cooking",
        },
        {
          id: "17",
          title: "Sports",
        },
        {
          id: "18",
          title: "Racing",
        },
        {
          id: "19",
          title: "Mountain Hiking",
        },
        {
          id: "20",
          title: "Cruising",
        },
      ],
      articles: [
        {
          id: "1",
          technology: "NATURE",
          title: "Tempor deserunt Sunt Qui",
          address: "Connie Robertson",
          time: "November 3, 2012",
          thumbnail:
            "https://images.unsplash.com/photo-1559466451-fc1e9f378c46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80g",
          text: "Ea qui dolor aute cupidatat ad pariatur proident. Mollit nulla tempor aute reprehenderit ut dolore mollit nisi consequat excepteur ex officia pariatur irure.",
        },
        {
          id: "2",
          technology: "PLANTS",
          title: "Occaecat Anim eu Qui",
          address: "Eleanor Williamson",
          time: "September 28, 2014",
          thumbnail:
            "https://images.unsplash.com/photo-1565789570848-7a4b39090d21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          text: "Qui ipsum consectetur ad incididunt et aliquip exercitation laboris nisi reprehenderit. Et excepteur commodo esse enim ea aliqua officia reprehenderit.",
        },
        {
          id: "3",
          technology: "FOOD",
          title: "Fugiat Incididunt Voluptate Consequat",
          address: "Bessie Watson",
          time: "June 13, 2012",
          thumbnail:
            "https://images.unsplash.com/photo-1565789570845-1f9a4142a5f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
          text: "Mollit ea culpa ipsum pariatur eiusmod. Irure et.",
        },
        {
          id: "4",
          technology: "COLORFUL",
          title: "Occaecat Anim eu Qui",
          address: "Ted Simmmons",
          time: "June 21, 2015",
          thumbnail:
            "https://images.unsplash.com/photo-1565789570481-f7bc45817eaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80",
          text: "Amet ipsum occaecat aliqua aute nisi laboris nostrud culpa est do. Aliqua esse velit in excepteur esse qui voluptate laboris adipisicing qui irure elit amet excepteur.",
        },
        {
          id: "5",
          technology: "COLORFUL",
          title: "Occaecat Anim eu Qui",
          address: "Ted Simmmons",
          time: "June 21, 2015",
          thumbnail:
            "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80",
          text: "Amet ipsum occaecat aliqua aute nisi laboris nostrud culpa est do. Aliqua esse velit in excepteur esse qui voluptate laboris adipisicing qui irure elit amet excepteur.",
        },
      ],
    };
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,100;1,300;1,500;1,700;1,900&display=swap");

* {
  padding: 0px;
  margin: 0px;
  font-family: "Open Sans", sans-serif;
}
img {
  cursor: pointer;
}
.content {
  cursor: pointer;
}
.blog-img {
  width: 100vw;
  position: relative;
}
.blog-img img {
  width: 100%;
  height: 70vh;
  object-fit: cover;
}
.content {
  position: relative;
  padding-top: 40px;
}
.content:after {
  content: "";
  position: absolute;
  width: 190px;
  background: #1c1c1c;
  height: 2px;
  transform: translateX(-95px);
  margin-top: 20px;
}
.blog-small {
  margin-bottom: 4rem;
}
.content h2 {
  font-size: 42px;
  line-height: 57px;
  text-align: center;
  font-weight: 700;
  color: #1c1c1c;
  cursor: pointer;
}
#blog-list {
  margin-top: 50px;
}
.blog-small {
  display: flex;
  justify-content: center;
  align-items: center;
}
.left-blog-small img {
  width: 90%;
  object-fit: contain;
}
.right-blog-small {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 430px;
}
.technology {
  font-weight: 400;
  font-size: 20px;
  line-height: 27.24px;
  font-style: normal;
  text-transform: uppercase;
  color: rgba(28, 28, 28, 0.5);
  cursor: pointer;
}
.blog-small-title {
  font-family: "Libre Baskerville", serif;
  font-weight: 700;
  font-style: normal;
  font-size: 33px;
  line-height: 40.92px;
  padding-bottom: 10px;
  cursor: pointer;
}

.address {
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 21.79px;
  color: rgba(28, 28, 28, 0.5);
  padding-bottom: 30px;
}
.blog-small-text {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}
.blog-load {
  width: 100vw;
}
.blog-article {
  width: 100%;
}
.blog-article {
  width: 100%;
  height: 80vh;
  background-size: cover;
  background: linear-gradient(
      0deg,
      rgba(28, 28, 28, 0.1),
      rgba(28, 28, 28, 0.1)
    ),
    url("../assets/home3.jpg");
  position: relative;
}
.blog-article-small {
  background-color: #fff;
  padding: 30px;
  width: 509px;
  position: absolute;
  left: 754px;
  top: 50px;
  text-align: left;
}
.recent-posts {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
}
.articles {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.article-inner {
  margin-bottom: 40px;
}
.articles .left-blog-small img {
  width: 100%;
  object-fit: contain;
}
.articles .right-blog-small {
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.articles .right-blog-small .technology {
  font-weight: 400;
  font-size: 20px;
  color: rgba(28, 28, 28, 0.5);
  line-height: 27.24px;
}
.articles .right-blog-small .blog-small-title {
  font-size: 33px;
  line-height: 40.92px;
}
.tag-content {
  font-weight: 700;
  font-style: normal;
  font-size: 20px;
  line-height: 27.24px;
  text-align: center;
  color: rgba(28, 28, 28, 1);
}
ul {
  list-style: none;
}
.tag-list {
  padding-top: 10px;
}
.tag-list li {
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 45px;
  color: rgba(0, 0, 0, 1);
}
</style>
