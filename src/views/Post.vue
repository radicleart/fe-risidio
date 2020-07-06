<template>
<section v-if="content" class="bg-white">
  <!-- Vue conditional to check if there is any content in document -->
  <div :style="bannerImage" class="d-flex align-items-center flex-column">
    <div class="my-auto text-center">
      <h1 class="mb-5 text-white">{{content.page_text[0].text}}</h1>
      <h2 class="mb-5 text-white">{{content.page_title[0].text}}</h2>
    </div>
  </div>
  <div class="main my-5 mx-auto w-75">
    <div class="outer-container">
      <div class="back">
        <router-link to="./">back to list</router-link>
      </div>
      <!-- Button to edit document in dashboard
      <prismic-edit-button :documentId="documentId"/> -->

      <h1 class="blog-title">{{ $prismic.richTextAsPlain(fields.title) }}</h1>
      <div class="d-flex justify-content-between">
        <p class="blog-post-meta"><span class="created-at">{{ Intl.DateTimeFormat('en-US', dateOptions).format(new Date(fields.date)) }}</span></p>
        <p class="blog-post-meta"><span class="author">{{ fields.author }}</span></p>
      </div>
    </div>
    <!-- Slice Block Componenet tag -->
    <slices-block :slices="slices" class="outer-container"/>
  </div>
</section>
</template>

<script>
// Importing all the slices components
import SlicesBlock from '../components/SlicesBlock.vue'
import { SITE_CONSTANTS } from '@/site-constants'

export default {
  name: 'post',
  components: {
    SlicesBlock
  },
  data () {
    return {
      dateOptions: { year: 'numeric', month: 'short', day: '2-digit' },
      documentId: '',
      fields: {
        title: null,
        date: null,
        author: null
      },
      slices: []
    }
  },
  methods: {
    getContent (uid) {
      // Query to get post content
      this.$prismic.client.getByUID('post', uid)
        .then((document) => {
          if (document) {
            this.documentId = document.id
            this.fields.title = document.data.title
            this.fields.date = document.data.date
            if (document.data.author && document.data.author.length > 0) {
              this.fields.author = document.data.author[0].text
            }

            // Set slices as variable
            this.slices = document.data.body
          } else {
            // returns error page
            this.$router.push({ name: 'not-found' })
          }
        })
    }
  },
  created () {
    this.getContent(this.$route.params.uid)
  },
  beforeRouteUpdate (to, from, next) {
    this.getContent(to.params.uid)
    next()
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
    content () {
      const content = this.$store.getters['contentStore/getPage']('bloghome')
      return (content) ? content.data : null
    }
  }
}
</script>

<style>
.post-part.single a {
  text-decoration: none;
  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.8) 75%);
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.8) 75%);
  background-repeat: repeat-x;
  background-size: 2px 2px;
  background-position: 0 23px;
}
.blog-post-meta {
  color: #9A9A9A;
  font-family: 'Lato', sans-serif;
  margin-bottom: 8px;
}

/* Media Queries */
@media (max-width: 767px) {
  .post-part pre {
    font-size: 14px;
  }
  .blog-post-meta {
    font-size: 16px;
  }
}

@media screen and (min-width: 768px) {
  .blog-post-meta {
    font-size: 16px;
  }
}
</style>
