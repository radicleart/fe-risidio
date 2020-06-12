<template>
<div>
  <div>
    <b-container>
      <b-row>
        <b-col sm="8" offset-sm="2" class="pb-5 pt-5 text-center">
          <h2>Guides and Help</h2>
        </b-col>
      </b-row>
    </b-container>
  </div>
  <div class="light-grey-section">
    <div class="d-flex justify-content-center" role="status" v-if="loading">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <b-container class="bg-card bg-spinner" v-else :style="bannerBgStyle2">
      <b-row>
        <b-col md="3" sm="12" class="help-index pt-5 pb-5">
          <div id="about-buttons">
            <about-buttons :answers="answers" @showAnswer="showAnswer"/>
          </div>
        </b-col>
        <b-col md="9" sm="12" class="pt-5 pb-5 help-area">
          <div id="help-topic">
            <help-topic :answer="answer"/>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</div>
</template>

<script>
import AboutButtons from '@/components/help/AboutButtons'
import HelpTopic from '@/components/help/HelpTopic'
import _ from 'lodash'

export default {
  components: {
    HelpTopic,
    AboutButtons
  },
  name: 'HelpTopics',
  data () {
    return {
      answers: null,
      answer: null,
      loading: true,
      aboutContent: null
    }
  },
  watch: {
    '$route' () {
      this.loading = true
      this.doMount()
    }
  },
  mounted () {
    this.doMount()
  },
  computed: {
    bannerBgStyle2 () {
      // let imageUrl = content['banner-bg-img'].url
      return {
        'margin-top': '0px',
        'background-repeat': 'repeat-y',
        'background-size': '355px',
        'background-position': 'center 70%'
      }
    }
  },
  methods: {
    showAnswer (data) {
      const url = '/help/topics/' + data.question
      this.$router.push(url)
    },
    doMount () {
      const slug = this.$route.params.topicId
      this.aboutContent = this.$store.state.contentStore.content['help-list']
      if (!this.aboutContent) {
        this.$prismic.client.getSingle('help-list').then(document => {
          this.$store.commit('contentStore/helpList', document.data)
          this.aboutContent = this.$store.state.contentStore.content['help-list']
          const topicIds = this.getTopicIds(document)
          // eslint-disable-next-line @typescript-eslint/no-this-alias
          const that = this
          this.$prismic.client.getByIDs(topicIds).then(function (response) {
            that.setAnswers(that, response, topicIds, slug)
            that.setAnswer(slug)
          })
        })
      } else {
        this.setAnswer(slug)
      }
    },
    getTopicIds (pdoc) {
      const topicIds = []
      _.forEach(pdoc.data['help-items'], function (item) {
        const topic = item['help-item']
        if (topic && topic.id) {
          topicIds.push(topic.id)
        }
      })
      return topicIds
    },
    setAnswer (slug) {
      this.answers = this.$store.state.contentStore.content.answers
      if (!slug) {
        this.answer = this.answers[0].topic
        this.loading = false
      } else {
        const selec = _.find(this.answers, function (ans) {
          return slug.indexOf(ans.slug) > -1
        })
        this.answer = selec.topic
        this.loading = false
      }
    },
    setAnswers ($self, response, topicIds, slug) {
      const topics = []
      _.forEach(response.results, function (res) {
        _.forEach(topicIds, function (topicId) {
          if (topicId === res.id) {
            if (res.slugs[0] === slug) {
              $self.answer = res
            }
          }
        })
        topics.push({ slug: res.slugs[0], id: res.id, topic: res })
      })
      $self.$store.commit('contentStore/answers', topics)
      $self.answers = topics
      $self.loading = false
    }
  }
}
</script>

<style scoped>
  @media screen and (min-width: 999px){
    #help-topic{
      border-left:2px solid white;
    }
  }
  @media screen and (max-width: 788px){
    .help-index{
      background-color: #f8f8f8;
    }
    .help-area{
      background-color: #fff;
    }
  }
</style>
