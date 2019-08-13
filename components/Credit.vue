<template>
  <div class="Credit">
    <h2>Credit</h2>
    <div>
      Art Direction by <a href="https://scnr.jp" target="_blank">Scanner</a><br>
      Background by <a href="http://rettuce.com/" target="_blank">rettuce</a><br>
      Web Design and Develop by <a href="http://feb19.jp" target="_blank">feb19</a><br>
      <br>
      Copyright &copy; unframe All Rights Reserved.
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component
export default class Credit extends Vue {}
</script>

<style scoped>
.Credit {
  margin: 8rem 4rem;
}

@media screen and (max-width:640px) {
  .Credit {
    margin: 1rem; 
  }
}
</style>