<template>
  <div class="Work">
    <n-link to="/">
      <div class="Work__image">
        <img :src="work.photoUrl" />
      </div>
    </n-link>
    <div class="Work__info">
      <div class="Work__title">{{work.name}}</div>
      <div>{{work.creator}}</div>
      <div class="Work__link" v-if="work.externalUrl != ''">
        <a :href="work.externalUrl" target="_blank">detail</a>
      </div>
    </div>
    <CloseButton />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import CloseButton from '~/components/CloseButton.vue'
import IWork from '~/store/IWork'

@Component({
  components: {
    CloseButton
  }
})

export default class Work extends Vue{
  @Prop({ default: null, required: true })
  work
}
</script>

<style scoped>
.Work {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.Work__image {
  position: absolute;
  width: 80vw;
  height: 60vh;
  margin: 10vh 10vw;
}
.Work__image img {
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
}
.Work__info {
  position: absolute;
  top: 80%;
  width: 100%;
  text-align: center;
}
.Work__link {
  margin: 1rem auto 0;
  width: 240px;
}
.Work__link a {
 display: block;
}
</style>
