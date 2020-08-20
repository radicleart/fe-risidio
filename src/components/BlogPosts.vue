<template>
  <section>
    <div class="filters">
      <button @click="getPosts(), activate(1)" :class="{ active : activeEl == 1 }">
        All
      </button>
      <button @click="getPostsByTag('blockstack'), activate(2)" :class="{ active : activeEl == 2 }">
        Blockstack
      </button>
      <button @click="getPostsByTag('lightning'), activate(3)" :class="{ active : activeEl == 3 }">
        Lightning
      </button>
      <button @click="getPostsByTag('web3'), activate(4)" :class="{ active : activeEl == 4 }">
        Web 3.0
      </button>
      <button @click="getPostsByTag('technical'), activate(5)" :class="{ active : activeEl == 5 }">
        Technical
      </button>
    </div>
    <!-- Check blog posts exist -->
    <div slot="Posts" v-if="posts.length !== 0" class="blog-main">
      <!-- Template for blog posts -->
      <div v-for="post in posts" :key="post.id" v-bind:post="post" class="blog-post">
        <div class="imgPostContainer">
          <img width="280px" height="200px" :src="getImg(post)" :alt="getImgAlt(post)"/>
          <router-link :to="linkResolver(post)" class="postOverlay">Read More
          </router-link>
        </div>
        <div class="d-flex justify-content-between">
          <p class="blog-post-meta text-danger"><span class="created-at">{{ Intl.DateTimeFormat('en-US', dateOptions).format(new Date(post.data.date)) }}</span></p>
        </div>
        <h2><router-link :to="linkResolver(post)">{{ $prismic.richTextAsPlain(post.data.title) }}</router-link></h2>
        <div class="post-paragraph">
          <p><router-link :to="linkResolver(post)">{{getFirstParagraph(post)}}</router-link></p>
        </div>
      </div>
    </div>
    <!-- If no blog posts return message -->
    <div v-else class="blog-main">
      <p>No Posts published at this time.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'get-posts',
  props: { pageSize: Number },
  data () {
    return {
      posts: [],
      dateOptions: { year: 'numeric', month: 'short', day: '2-digit' },
      linkResolver: this.$prismic.linkResolver,
      activeEl: 1
    }
  },
  methods: {
    getPosts () {
      // Query to get blog posts (using different parameters for different pages)
      const arr = []
      this.$prismic.client.query(
        [this.$prismic.Predicates.at('document.type', 'post'), this.$prismic.Predicates.any('my.post.post_status', ['live'])],
        { orderings: '[my.post.date desc]' }
      ).then((response) => {
        for (let i = 0; i < response.results.length; i++) {
          if (response.results[i].uid !== this.$route.params.uid) {
            arr.push(response.results[i])
          }
        }
        // Check what page it is
        if (this.$route.name !== 'blog-home') {
          arr.splice(this.pageSize)
        }
        this.posts = arr
      })
    },
    getPostsByTag (tag) {
      // Query to get blog posts by tag
      this.$prismic.client.query(
        [this.$prismic.Predicates.at('document.tags', [tag]), this.$prismic.Predicates.any('my.post.post_status', ['live'])],
        { orderings: '[my.post.date desc]' }
      ).then((response) => {
        this.posts = response.results
      })
    },
    getAuthor (post) {
      // Query to get blog posts author
      if (post.data && post.data.author && post.data.author.length > 0) {
        return post.data.author[0].text
      }
    },
    getImg (post) {
      // Query to get blog posts img
      if (post.data && post.data.blog_home_image.url.length > 0) {
        return post.data.blog_home_image.url
      }
    },
    getImgAlt (post) {
      // Query to get blog posts img alt
      if (post.data && post.data.blog_home_image.alt.length > 0) {
        return post.data.blog_home_image.alt
      }
    },
    activate (el) {
      this.activeEl = el
    },
    // Function to get the first paragraph of text in a blog post and limit the displayed text at 300 characters
    getFirstParagraph (post) {
      const textLimit = 300
      const slices = post.data.body
      let firstParagraph = ''
      let haveFirstParagraph = false

      slices.map(function (slice) {
        if (!haveFirstParagraph) {
          if (slice.slice_type === 'text') {
            slice.primary.text.forEach(function (block) {
              if (block.type === 'paragraph') {
                if (!haveFirstParagraph) {
                  firstParagraph += block.text
                  haveFirstParagraph = true
                }
              }
            })
          }
        }
      })

      const limitedText = firstParagraph.substr(0, textLimit)

      if (firstParagraph.length > textLimit) {
        return limitedText.substr(0, limitedText.lastIndexOf(' ')) + '...'
      } else {
        return firstParagraph
      }
    }
  },
  created () {
    this.getPosts()
  },
  computed: {
  }
}
</script>

<style scoped>
.page .blog-main {
  max-width: 1080px;
  margin: 0 auto;
  padding: 3rem 60px;
  display: grid;
  grid-template-rows: repeat(2, max-content);
  grid-template-columns: repeat(auto-fill, minmax(280px, max-content));
  grid-gap: 60px;
  justify-content: center;
}
.empty-blog-main {
  display: none;
}
.blog-post {
  max-width: 280px;
}
.blog-post h2 {
  font-size: 18px;
  margin: 0 0 8px;
  color: #000;
  font-weight: 800;
}
.blog-post h2 a {
  color: #000;
}
.blog-post-meta {
  font-family: 'Montserrat';
  margin: 20px 0 8px;
  font-size: 10px;
}
.post-paragraph a {
  color: #000;
}
.page .filters {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  background-color: #000;
  border-top: solid 0.5px rgba(255, 255, 255, 0.3);
}
.page .filters button {
  margin: 0 15px;
  font-size: 14px;
  color: #fff;
  background-color: transparent;
  width: auto;
  padding: 0;
}
.page .filters button:focus {
  outline: none;
}
.page .active {
  font-weight: bold;
}
.imgPostContainer {
  position: relative;
  width: 100%;
}
.postOverlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-weight: bold;
  transition: .5s ease;
  width: 100%;
  height: 100%;
  opacity: 0;
  font-size: 15px;
  text-align: center;
}
.imgPostContainer .postOverlay:hover {
  opacity: 1;
}
/* Media Queries */
@media only screen and (max-width: 600px) {
  .page .blog-main {
    padding: 3rem 0;
  }
  .page .filters button {
    font-size: 11px;
    margin: 0 9px;
  }
}
@media only screen and (max-width: 360px) {
  .blog-main {
    grid-template-columns: repeat(auto-fill, minmax(240px, max-content)) !important;
  }
  .blog-post {
    max-width: 240px;
  }
  .blog-post img {
    width: 240px;
    height: auto;
  }
  .blog-post h2 {
    font-size: 14px;
  }
  .blog-post .post-paragraph p {
    font-size: 10px;
  }
  .page .filters button {
    font-size: 10px;
    margin: 0 7px;
  }
}
</style>
