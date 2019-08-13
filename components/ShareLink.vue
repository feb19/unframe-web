<template>
  <div class="ShareLink">
    <a class="ShareLink__twitter" :href="$store.getters.tweetUrl">Twitter</a>
    <a class="ShareLink__facebook" :href="$store.getters.facebookUrl">Facebook</a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component
export default class ShareLink extends Vue {
  mounted() {
    const shareUrl = location.href
    const description = document.title
    const hashTags = 'unframe'
    
    this.setTwitterLink('.ShareLink__twitter', shareUrl, description, hashTags)
    this.setFacebookLink('.ShareLink__facebook', shareUrl, description)
  }
  setTwitterLink(shareSelector, shareUrl, description, hashTags) {
    const sel = document.querySelectorAll(shareSelector)
    const node = Array.prototype.slice.call(sel,0);
    const that = this
    
    node.forEach(function (s, i) {
      that.setShareEvent(s, 'Twitter', encodeURIComponent(shareUrl))
    })
  }
  setFacebookLink(shareSelector, shareUrl, description) {
    const sel = document.querySelectorAll(shareSelector)
    const node = Array.prototype.slice.call(sel,0)
    const that = this
    node.forEach(function (s, i) {
      that.setShareEvent(s, 'Facebook', shareUrl)
    })
  }
  setShareEvent(selector, snsName, shareUrl) {
    selector.addEventListener('click', function (e) {
      let s = e.currentTarget as HTMLLinkElement
      window.open(s.href, '_blank', 'width=600, height=600, menubar=no, toolbar=no, scrollbars=yes')
      e.preventDefault()
    }, false)
  }

}
</script>
