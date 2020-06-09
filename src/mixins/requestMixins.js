import axios from 'axios'
const APIURL = 'https://pixabay.com/api'
export const requestMixin = {
  methods: {
    getImages (page = 1) {
      return axios.get(
        `${APIURL}/?page=${page}&key=${process.env.VUE_APP_API_KEY}`
      )
    }
  }
}
