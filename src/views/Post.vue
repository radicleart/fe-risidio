<template>
<section v-if="content" class="bg-white" :sectionDimensions="sectionDimensions">
  <!-- Vue conditional to check if there is any content in document -->
  <div :style="bannerImage" class="d-flex align-items-center flex-column firstSection">
    <div class="my-auto text-center heading">
      <h2 class="mb-5 text-white">{{ $prismic.richTextAsPlain(fields.title) }}</h2>
      <p class="text-white">
        {{ Intl.DateTimeFormat('en-US', dateOptions).format(new Date(fields.date)) }} &middot; {{ fields.author }}
      </p>
    </div>
    <div class="mb-4 back">
      <router-link to="./"><span style="color: #E1302D">&#10094;</span> Back to Blog</router-link>
      <!-- Button to edit document in dashboard
      <prismic-edit-button :documentId="documentId"/> -->
    </div>
    <div class="bannerOverlay"></div>
  </div>
  <div class="row">
      <div class="pt-5 pb-5 col-lg-8">
        <!-- Slice Block Componenet tag -->
        <div class="postBody">
          <slices-block :slices="slices" class="outer-container"/>
              <div class="backBottom">
                <router-link to="./"><span style="color: #E1302D">&#10094;</span> Back to Blog</router-link>
                <!-- Button to edit document in dashboard
                <prismic-edit-button :documentId="documentId"/> -->
              </div>
        </div>
      </div>
      <!-- SideBar -->
      <div class="col-lg-4 sideBar">
        <h3>Related Post</h3>
        <blog-posts></blog-posts>
        <div class="buttonContainer"><button><router-link to="./">View All</router-link></button></div>
      </div>
  </div>
</section>
</template>

<script>
// Importing all the slices components
import SlicesBlock from '../components/SlicesBlock.vue'
import { SITE_CONSTANTS } from '@/site-constants'
// Importing posts components for sidebar
import BlogPosts from '../components/BlogPosts.vue'

export default {
  name: 'post',
  components: {
    SlicesBlock,
    BlogPosts
  },
  data () {
    return {
      dateOptions: { year: 'numeric', month: 'short', day: '2-digit' },
      documentId: '',
      fields: {
        title: null,
        date: null,
        author: null,
        img: null
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
            this.fields.img = document.data.blog_home_image.url
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
      const content = this.fields.img
      return {
        padding: '70px 0 0 0',
        height: '350px',
        width: '100%',
        position: 'relative',
        top: '0px',
        'background-repeat': 'no-repeat',
        'background-image': `url(${content})`,
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
  }
}
</script>

<style>
/* BANNER */
.firstSection p {
  text-align: center;
  margin: 0;
}
.firstSection .bannerOverlay {
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}
.firstSection .heading {
  z-index: 1;
}
.firstSection .back {
  z-index: 1;
  width: 100%;
  padding-left: 5rem;
}
.firstSection .back a {
  color: #fff;
  font-size: 10px;
}
/* CONTENT CONTAINER */
/* POST */
.postBody {
  color: #000;
  padding: 0 5rem;
  margin: 0 auto;
}
.postBody h3 {
  margin-bottom: 1.5rem;
}
.postBody a {
  color: #E9493D;
  text-decoration: underline;
}
.postBody a:hover {
  color: #E9493D;
  text-decoration: underline;
}
.postBody .backBottom {
  margin-top: 2.5rem;
}
.postBody .backBottom a {
  font-size: 12px;
  text-decoration: none;
}
/* SIDEBAR */
.sideBar {
  background-color: #F5F5F5;
  padding: 3rem !important;
}
.sideBar h3 {
  color: #000;
  font-weight: 900;
  margin-bottom: 1.5rem;
}
.sideBar .filters {
  display: none;
}
.sideBar .blog-main {
  display: grid;
  grid-template-rows: repeat(2, max-content);
  grid-template-columns: repeat(auto-fill, minmax(280px, max-content));
  column-gap: 60px;
  justify-content: flex-start;
}
.sideBar .blog-post {
  margin-bottom: 2rem;
}
.sideBar button {
  width: 141px;
  height: 43px;
  background: #5FBDC1 0% 0% no-repeat padding-box;
  border-radius: 22px;
  opacity: 1;
}
.sideBar button:hover {
  background: #5FBDC1 0% 0% no-repeat padding-box;
}
.sideBar button a {
  text-align: center;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
}
/* Media Queries */
@media (max-width: 1100px) and (min-width: 992px) {
  .sideBar {
    padding: 3rem 1.5rem !important;
  }
}
@media (max-width: 991px) {
  .sideBar .blog-main {
    justify-content: center;
  }
}
@media (max-width: 991px) and (min-width: 703px) {
  .sideBar h3 {
    max-width: 620px;
    margin: 0 auto 1.5rem;
  }
  .sideBar .buttonContainer {
    max-width: 620px;
    margin: 0 auto 1.5rem;
  }
}
@media (max-width: 702px) {
  .sideBar h3 {
    max-width: 280px;
    margin: 0 auto 1.5rem;
  }
  .sideBar .buttonContainer {
    max-width: 280px;
    margin: 0 auto 1.5rem;
  }
}
@media (max-width: 500px) {
  .firstSection .back {
    padding-left: 2rem;
  }
  .postBody {
    padding: 0 2rem;
  }
  section h2 { font-size: 30px; }
}
@media (max-width: 360px) {
  .sideBar h3 {
    max-width: 240px;
  }
  .sideBar .buttonContainer {
    max-width: 240px;
  }
}
@media (max-width: 320px) {
  section h2 { font-size: 22px; }
}
</style>
