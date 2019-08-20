<template>
  <div class="IndexPage">
    <Header />
    <Introduction />
    <Information />
    <AccessMap />
    <div class="ArchiveWrapper">
      <Archive v-for="archive in archives" :archive="archive" :key="archive.id" :works="works" />
    </div>
    <Information />
    <News />
    <Share />
    <Credit />
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import Component from 'vue-class-component'
import Introduction from '~/components/Introduction.vue'
import Information from '~/components/Information.vue'
import Header from '~/components/Header.vue'
import Archive from '~/components/Archive.vue'
import Share from '~/components/Share.vue'
import ShareLink from '~/components/ShareLink.vue'
import AccessMap from '~/components/AccessMap.vue'
import News from '~/components/News.vue'
import Credit from '~/components/Credit.vue'
import IArchive from 'store/IArchive';

@Component({
  components: {
    Header,
    Introduction,
    Information,
    Archive,
    ShareLink,
    News,
    AccessMap,
    Share,
    Credit
  }
})
export default class IndexPage extends Vue {
  async fetch({ store, params }) {
    store.commit('setShareUrl', 'https://unframe.jp')
    store.commit('setShareHashTags', 'unframe')
    store.commit('setShareDescription', 'Unframe Exhibitions')
  }
 
  head() {
    return {
      'title': `unframe exhibitions 007`,
      'meta': [
        { hid: 'twitter:image', property: 'twitter:image', content: `https://unframe.jp/ogp.jpg` },
        { hid: 'og:image', property: 'og:image', content: `https://unframe.jp/ogp.jpg` }
      ]
    }
  } 
  
  async asyncData({context, params}) {
    let archives: IArchive | undefined
    const json = await require(`~/static/archives.json`)
    const jsonWorks = await require(`~/static/works.json`)
    return {
      archives: json.archives,
      works: jsonWorks.works
    }
  }

}
</script>

<style scoped>
.ArchiveWrapper {
  margin: 8rem 4rem;
}

@media screen and (max-width:640px) {
  .ArchiveWrapper {
    margin: 1rem;
  }
}
</style>
