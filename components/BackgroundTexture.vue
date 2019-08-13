<template>
  <div class="BackgroundTexture">
    <iframe
      ref="texture"
      class="BackgroundTexture__texture"
      src=""
      frameborder="0"
      webkitAllowFullScreen mozallowfullscreen allowFullScreen />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class BackgroundTexture extends Vue {
  mounted(): void {
    window.addEventListener('resize', this.resizeHandler, false)
    this.resized()
  }

  resizeHandler(e: Event):void {
    this.resized()
  }

  resized():void {
    let texture = this.$refs['texture'] as HTMLIFrameElement
    texture.width = `${window.innerWidth}`
    texture.height = `${window.innerHeight}`
  }
}
</script>

<style scoped>
.BackgroundTexture {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: black;
}
.BackgroundTexture__texture {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
</style>
