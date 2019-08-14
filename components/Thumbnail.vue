<template>
  <div class="Thumbnail">
    <img :src="thumbnail" loading="lazy" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class Thumbnail extends Vue {
  @Prop({ default: '', required: true })
  name

  get thumbnail(): string {
    return `/thumbnails${this.name.split('.')[0]}.png`
  }
}
</script>

<style scoped>
.Thumbnail {
  width: 110px;
  height: 110px;
  overflow: hidden;
  margin: 0;
  /* margin: 0 0.1em 0.1em 0; */
  float: left;
}
.Thumbnail img {
  object-fit: cover;
  width: 100%;
  height: 100%;

  -webkit-filter: saturate(0%);
  -moz-filter: saturate(0%);
  -o-filter: saturate(0%);
  -ms-filter: saturate(0%);
  filter: saturate(0%);
}
.thumb-modal img {
  -webkit-filter: saturate(0%) brightness(75%);
  -moz-filter: saturate(0%) brightness(75%);
  -o-filter: saturate(0%) brightness(75%);
  -ms-filter: saturate(0%) brightness(75%);
  filter: saturate(0%) brightness(75%);

  /*transition: filter 0.1s linear;*/
}
.thumb-modal img:hover {

  -webkit-filter: saturate(0%) brightness(50%);
  -moz-filter: saturate(0%) brightness(50%);
  -o-filter: saturate(0%) brightness(50%);
  -ms-filter: saturate(0%) brightness(50%);
  filter: saturate(0%) brightness(50%);
}
</style>

