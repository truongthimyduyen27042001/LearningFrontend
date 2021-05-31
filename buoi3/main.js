Vue.component('blog-post', {
    props: ['post'],
    template: `
      <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <button v-on:click="$emit('enlarge-text',0.1)">
            Enlarge text
        </button>
        <div v-html="post.content"></div>
      </div>
    `
  })
  Vue.component('custom-input', {
    props: ['value'],
    template: `
      <input
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    `
  })
  Vue.component('alert-box', {
    template: `
      <div class="demo-alert-box">
        <strong>Error!</strong>
        <slot></slot>
      </div>
    `
  })
new Vue({
    el: '#blog-posts-events-demo',
    data: {
      posts: [
          {
              id:1,
              title:'This is title',
              content:'This is content'
          },
          {
            id:2,
            title:'This is title',
            content:'This is content'
        },
        {
            id:3,
            title:'This is title',
            content:'This is content'
        },
        {
            id:4,
            title:'This is title',
            content:'This is content'
        }
      ],
      postFontSize: 1,
      searchText:'this is searchText'
    },
    methods:{
        onEnlargeText(){
            this.postFontSize+=0.1
        }
    }
   
  })