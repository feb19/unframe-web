<template>
  <div class="Archive">
    <div class="Archive__info">
      <h3>{{archive.number}}</h3>
      <div>{{archive.date}}</div>
      <div v-html="archive.information"></div>
      <div v-if="archive.externalUrl != ''"><a :href="archive.externalUrl" target="_blank">web</a></div>
    </div>
    <div class="Archive__content">
      <div class="Archive__works">
        <nuxt-link :to="'/works/' + work.id" v-for="work in archiveWorks" :key="work.id"><Thumbnail :name="work.photoUrl" /></nuxt-link>
      </div>
      <div class="Archive__member">
        <MemberList :member="archive.member" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import Thumbnail from '~/components/Thumbnail.vue'
import MemberList from '~/components/MemberList.vue'
import IWork from 'store/IWork'

@Component({
  components: {
    Thumbnail,
    MemberList
  }
})
export default class Archive extends Vue {
  @Prop({ default: null, required: true })
  archive

  @Prop({ required: true })
  works: IWork[] | undefined
  
  archiveWorks: IWork[] = []

  mounted() {
    var wo: IWork[] = []
    if (this.works && this.works.length > 0) {
      this.works.map((work: IWork) => {
        if (work.number == this.archive.id) {
          wo.push(work)
        }
      })
      this.archiveWorks = wo
    }
  }
}
</script>


<style scoped>
.Archive{
  display: flex;
  margin: 0 0 3rem 0;
}
.Archive__info {
  width: 300px;
}
.Archive__content {
  flex: 1;
  font-size: 0.8rem;
  line-height: 1.2rem;
}
.Archive__info div {
  font-size: 0.8rem;
  line-height: 1.2rem;
}
.Archive__info h3 {
  margin: 0 0 1rem 0;
}
.Archive__info {
  margin: 0 0 1rem 0;
}
.Archive__member {
  padding: 1rem 0 0 0;
  clear: both;
}

@media screen and (max-width:640px) {
  .Archive{
    display: block;
  }
  .Archive__info {
    width: auto;
  }
}
</style>
