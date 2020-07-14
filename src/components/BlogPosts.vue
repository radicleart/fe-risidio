<template>
<section>
  <div class="filters"><a href="#">All</a><a href="#">Art</a><a href="#">Bitcoin</a><a href="#">Lightning</a><a href="#">Web 3.0</a></div>
  <!-- Check blog posts exist -->
  <div v-if="posts.length !== 0" class="blog-main mt-5">
    <!-- Template for blog posts -->
    <div v-for="post in posts" :key="post.id" v-bind:post="post" class="blog-post">
      <router-link :to="linkResolver(post)">
        <div class="d-flex justify-content-between">
          <p class="blog-post-meta text-danger"><span class="created-at">{{ Intl.DateTimeFormat('en-US', dateOptions).format(new Date(post.data.date)) }}</span></p>
          <p class="blog-post-meta text-danger"><span class="author small">{{ getTags(post) }}</span></p>
        </div>
        <h2>{{ $prismic.richTextAsPlain(post.data.title) }}</h2>
        <div class="paragraph">
          <p>{{getFirstParagraph(post)}}</p>
        </div>
      </router-link>
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
  name: 'blog-posts',
  data () {
    return {
      posts: [],
      dateOptions: { year: 'numeric', month: 'short', day: '2-digit' },
      linkResolver: this.$prismic.linkResolver
    }
  },
  methods: {
    getPosts () {
      // Query to get blog posts
      this.$prismic.client.query(
        this.$prismic.Predicates.at('document.type', 'post'),
        { orderings: '[my.post.date desc]' }
      ).then((response) => {
        this.posts = response.results
      })
    },
    getAuthor (post) {
      // Query to get blog posts
      if (post.data && post.data.author && post.data.author.length > 0) {
        return post.data.author[0].text
      }
    },
    getTags (post) {
      // Query to get blog posts
      if (post && post.tags && post.tags.length > 0) {
        return '[ ' + post.tags.join(', ') + ' ]'
      }
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
.blog-main {
  max-width: 1100px;
  margin: auto;
  padding: 0 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}
.blog-post {
  max-width: 280px;
  margin-bottom: 3rem;
}
.blog-post h2 {
  font-size: 18px;
  margin: 0 0 8px;
  color: #000;
  font-weight: 800;
}
.blog-post-meta {
  font-family: 'Lato', sans-serif;
  margin: 20px 0 8px;
  font-size: 10px;
}
.paragraph {
  color: #000;
}
.filters {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  background-color: #000;
  border-top: solid 0.5px rgba(255, 255, 255, 0.3);
}
.filters a {
  margin: 0 15px;
  font-size: 14px;
  color: #fff;
}
.filters a:hover{
  font-weight: bold;
}
/* Media Queries */
@media (max-width: 716px) {
  .blog-main {
    justify-content: center;
  }
}
@media (max-width: 500px) {
  .blog-main {
    padding: 0;
  }
}
</style>
