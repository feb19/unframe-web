import Vuex from 'vuex'

export const state = () => ({
  shareUrl: 'https://unframe.jp',
  shareHashTags: 'unframe',
  shareDescription: 'Unframe Exhibitions'
})
export const getters = {
  tweetUrl(state) {
    return `https://twitter.com/share?url=${encodeURIComponent(state.shareUrl)}&hashtags=${state.shareHashTags}&text=${encodeURIComponent(state.shareDescription)}`
  },
  facebookUrl(state) {
    return `https://www.facebook.com/sharer/sharer.php?u=${state.shareUrl}&t=${encodeURIComponent(state.shareDescription)}`
  }
}
export const mutations = {
  setShareUrl(state, value) {
    state.shareUrl = value
  },
  setShareHashTags(state, value) {
    state.shareHashTags = value
  },
  setShareDescription(state, value) {
    state.shareDescription = value
  }
}
