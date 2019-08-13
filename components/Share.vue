<template>
  <div class="Share">
    <h2>Share</h2>
    <ShareLink />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import ShareLink from '~/components/ShareLink.vue'

@Component({
  components: {
    ShareLink
  }
})
export default class Share extends Vue {}
</script>

<style scoped>
.Share {
  margin: 8rem 4rem;
}

@media screen and (max-width:640px) {
  .Share {
    margin: 1rem; 
  }
}
</style>