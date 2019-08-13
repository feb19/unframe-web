<template>
  <div class="AccessPage">
    <h1>unframe exhibitions #007 / access</h1>
    <AccessMap />
    <Information />
    <div class="AccessPage__footer"><nuxt-link to="/">Back to Home</nuxt-link></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import AccessMap from '~/components/AccessMap.vue'
import Information from '~/components/Information.vue'

@Component({
  components: {
    Information,
    AccessMap
  }
})
export default class AccessPage extends Vue {
  head() {
    return {
      'title': 'Access | unframe exhibitions 007'
    }
  }
}
</script>

<style scoped>
h1 {
  margin: 4rem;
}
.AccessPage__footer {
  margin: 4rem;
}
</style>
