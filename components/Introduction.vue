<template>
  <div class="Introduction">
    <p>
      この秋、祐天寺 LEERES STUDIO（リアレス スタジオ） を会場に「unframe」プロジェクトの第 7 回展示を開催いたします。
    </p>
    <p>
      「unframe」はインタラクティブ・グラフィック・映像領域を中心に活躍するクリエイターが、<br class="for-pc" />
      各々の経験とスキルを組み合わせて一つの作品を作り上げることによって新たな表現の可能性とそのシステムを探るプロジェクトです。
    </p>
    <p>
      今回の展示には、宮本昌典、小岩原直志、清水基、林久純、田中陽、高橋伸弥、冨永敬と増田雄太と大西拓人、奥田透也ら10名が参加。
    </p>
    <p>
      インスタレーション作品、デザイン、プログラム、映像、音楽、言葉、演劇などの <br class="for-pc" />
      表現要素を各クリエイター独自の視点で構成し、<br class="for-pc" />
      各領域における表現の枠を越えた可能性を探求します。
    </p>
    <p>
      オープニングレセプションを 10/13 (Sun.) 16:00より開催予定、<br class="for-pc" />
      是非ともご来場頂き、実験的なアートワークをお楽しみください。
    </p>
    <div>
      <MemberThumbnails :member="['hys', 'koiwahara', 'tmo', 'miyamoto', 'alumican', 'shimizu', 'takahashi', 'you']" />
      
    </div>
    <div class="profiles">
      <MemberList :member="['hys', 'koiwahara', 'tmo', 'miyamoto', 'alumican', 'shimizu', 'takahashi', 'you']" />
    </div>
    <!-- <p>
      <a href="ufex006-press.pdf">Press Release</a>
    </p> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import MemberThumbnails from '~/components/MemberThumbnails.vue'
import MemberList from '~/components/MemberList.vue'

@Component({
  components: {
    MemberThumbnails,
    MemberList
  }
})
export default class Introduction extends Vue {}
</script>

<style scoped>
.Introduction {
  margin: 8rem 4rem;
}
@media screen and (max-width:640px) {
  .Introduction {
    margin: 1rem; 
  }
}
</style>