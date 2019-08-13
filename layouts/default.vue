<template>
  <div class="DefaultLayout">
    <div id="fb-root"></div>
    <BackgroundTexture />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import BackgroundTexture from '~/components/BackgroundTexture.vue'

@Component({
  components: {
    BackgroundTexture
  }
})
export default class DefaultLayout extends Vue {
}
</script>

<style>
body {
  background-color: black;
  color: white;
  font-family: "Helvetica Neue", Helvetica, Arial, "游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", "メイリオ", "Meiryo", sans-serif;
  letter-spacing: 0.1em;
  line-height: 1.8em;
  font-weight: 400;
  margin: 0;
  background: #222222;
}
h1,h2,h3,h4,h5,h6 {
  font-weight: 400;
  margin: 3rem 0;
}
p {
  margin: 1rem 0;
}
footer {
  font-size: 0.8em;
  margin: 0 4rem;
  padding: 4rem 0;
}
a {
  text-decoration: none;
  /* // color: #006699; */
  color: #9E9E9E;
}
a:hover {
  color: #616161;

/* // -webkit-filter: brightness(150%);
// -moz-filter: brightness(150%);
// -o-filter: brightness(150%);
// -ms-filter: brightness(150%);
// filter: brightness(150%); */
  -webkit-filter: brightness(75%);
  -moz-filter: brightness(75%);
  -o-filter: brightness(75%);
  -ms-filter: brightness(75%);
  filter: brightness(75%);
}

@media screen and (max-width:640px) {
  .for-pc {
    display: none;
  }
}
</style>
