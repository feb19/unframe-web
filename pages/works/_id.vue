<template>
  <div class="WorksShowPage">
    <Work :work="work" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import Work from '~/components/Work.vue'
import IWork from '~/store/IWork'

@Component({
  components: {
    Work
  }
})
export default class WorkShowPage extends Vue {
  
  async asyncData({context, params}) {
    const json = await require(`~/static/works.json`)
    
    let work: IWork | undefined
    json.works.forEach(element => {
      if (element['id'] === params.id) {
        work = element
      }
    })

    if (!work) {
      const work404: IWork = {
        number: 0,
        name: '404',
        description: 'not found',
        creator: 'undefined',
        photoUrl: '/ogp.jpg',
        externalUrl: ''
      }
      return {
        work: work404
      }
    } else {
      return {
        work: work
      }
    }
  }

  head() {
    return {
      'title': `${this.$data.work.name} | unframe exhibitions 007`
    }
  }
  async fetch ({context, params}) {
  }
}
</script>
