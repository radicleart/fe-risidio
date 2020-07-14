<template>
<section v-if="content" class="bg-white" :sectionDimensions="sectionDimensions">
  <!-- Vue conditional to check if there is any content in document -->
  <div :style="bannerImage" class="d-flex align-items-center flex-column">
    <div class="my-auto text-center">
      <h1 class="mb-5 text-white">{{content.page_text[0].text}}</h1>
      <h2 class="mb-5 text-white">{{content.page_title[0].text}}</h2>
    </div>
  </div>
  <div v-if="hasContent" class="page">
    <!-- Vue reference for blog posts component -->
    <blog-posts/>
  </div>
  <!-- If no content return message -->
  <div v-else class="home">
    <p> Please add some content to your blog home document.</p>
  </div>
</section>
</template>

<script>
import BlogPosts from '../components/BlogPosts.vue'
import { SITE_CONSTANTS } from '@/site-constants'

export default {
  name: 'blog-home',
  components: {
    BlogPosts
  },
  data () {
    return {
      documentId: '',
      fields: {
        headline: null,
        description: null,
        image: null
      },
      posts: [],
      linkResolver: this.$prismic.linkResolver,
      hasContent: false
    }
  },
  computed: {
    bannerImage () {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT]
      const content = this.$store.getters['contentStore/getPage']('bloghome')
      return {
        padding: '40px 0 0 0',
        height: height / 3 + 'px',
        width: '100%',
        position: 'relative',
        top: '0px',
        'background-repeat': 'no-repeat',
        'background-image': `url(${content.data.banner.url})`,
        'background-position': 'center center',
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-size': 'cover',
        'background-color': '#121212',
        opacity: 1
      }
    },
    sectionDimensions () {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT]
      return 'min-height: ' + height + 'px; width: auto;'
    },
    content () {
      const content = this.$store.getters['contentStore/getPage']('bloghome')
      return (content) ? content.data : null
    }
  },
  methods: {
    getContent () {
      // Query to get home content
      this.$prismic.client.getSingle('blog_home')
        .then((document) => {
          if (document) {
            this.documentId = document.id
            this.fields.headline = document.data.headline
            this.fields.description = document.data.description
            this.fields.image = document.data.image.url

            // Check that the blog home contains content
            this.checkForContent()
          } else {
            // returns error page
            this.$router.push({ name: 'not-found' })
          }
        })
    },
    // Function to check for any content on the blog home page
    checkForContent () {
      if (
        this.fields.image !== undefined ||
        this.$prismic.richTextAsPlain(this.fields.headline) !== '' ||
        this.$prismic.richTextAsPlain(this.fields.description) !== ''
      ) {
        this.hasContent = true
      }
    }
  },
  created () {
    this.getContent()
    if (window.prismic && window.prismic.setupEditButton) {
      window.prismic.setupEditButton()
    }
  }
}
</script>

<style scoped>
a:hover {
  text-decoration: none !important;
}
.home {
  max-width: 700px;
  margin: auto;
  text-align: center;
}
.home .blog-avatar {
  max-height: 140px;
  width: 140px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  margin: 1em auto;
}
.home .blog-description {
  font-size: 18px;
  color: #9A9A9A;
  line-height: 30px;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  font-family: 'Lato', sans-serif;
  border-bottom: 1px solid #DADADA;
}
/* Media Queries */
@media (max-width: 767px) {
  .home {
    padding: 0 20px;
  }
}
</style>
