<template>
  <div class="News">
    <h2>News</h2>
    <p>
      展示に関する最新情報、unframe の活動等は<a href="https://www.facebook.com/unframe.pj/" target="_blank">公式 Facebook ページ</a>にて常時更新中です。<br>
      展示情報や日時は、余儀なく変更される場合がございます。ご了承ください。<br>
      その場合も Facebook ページなどでお知らせいたしますので、ぜひ「いいね！」いただけると幸いです。
    </p>
    <div class="fb-page" data-href="https://www.facebook.com/unframe.pj/" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/unframe.pj/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/unframe.pj/">Unframe Facebook Page</a></blockquote></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component
export default class News extends Vue {
  mounted() {
    // if (!document.getElementById('facebook-jssdk')) {
      ;(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) return
        js = d.createElement(s)
        js.id = id
        js.src = 'https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v3.2&appId=300353803312620'
        fjs.parentNode!.insertBefore(js, fjs)
      })(document, 'script', 'facebook-jssdk')
    // }
  }
}
</script>

<style scoped>
.News {
  margin: 8rem 4rem;
}
blockquote {
  margin: 1rem 0;
}

@media screen and (max-width:640px) {
  .News {
    margin: 1rem; 
  }
}
</style>