<template>
  <div class="CloseButton">
    <n-link to="/">
      <svg viewbox="0 0 40 40">
        <path class="CloseButton__path" d="M 0,0 L 40,40 M 40,0 L 0,40" />
      </svg>
    </n-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component
export default class CloseButton extends Vue {}
</script>

<style scoped>
.CloseButton {
  position: fixed;
  right: 10px;
  top: 10px;
  width: 40px;
  height: 40px;
}
.CloseButton__path {
  stroke: #CCCCCC;
  fill: transparent;
  stroke-linecap: square;
  stroke-width: 0.5;
}
</style>
