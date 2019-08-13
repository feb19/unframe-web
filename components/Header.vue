<template>
  <div class="Header">
    <img src="~/assets/images/logo.svg" alt="unframe exibitions 007 2019.10.13 Sun - 14 Mon" class="Header__logo">
    <img src="~/assets/images/arrow.svg" alt="please scroll" class="Header__arrow">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component
export default class Header extends Vue {}
</script>

<style scoped>
.Header {
  height: 100vh;
  min-height: 480px;
  padding: 0;
  margin: 0;
  position: relative;
}
.Header__logo {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 21.3vw;
  min-width: 219px;
}
.Header__arrow {
  position: absolute;
  top: auto;
  bottom: 32px;
  right: 0;
  left: 0;
  margin: auto auto 0 auto;
  animation: scrollLoopAnime 3s ease-out infinite forwards;
}
@keyframes scrollLoopAnime {
  0% { opacity: 0.2;}
  50% { opacity: 0.6;}
  100% { opacity: 0.2;}
}
</style>
