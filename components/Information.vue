<template>
  <div class="Information">
    <h2>アンフレーム・エキシビジョン 7</h2>
    <p>
      2019.10.13 11:00〜19:00 (16:00 レセプション開始)<br>
      2019.10.14 11:00〜18:00
    </p>
    <p>
      入場無料 / 申込不要 / 入退場自由<br />
      写真OK / SNS OK / ハッシュタグ #unframe
    </p>
    <p>
      会場　LEERE STUDIO（リアレス スタジオ）<br>
      〒153–0065 東京都目黒区中町2-49-11<br>
      2-49-11 NAKACHO MEGUROKU, TOKYO 153–0065<br>
      祐天寺　徒歩 6 分
    </p>
    <p>
      <a href="https://goo.gl/maps/jeWrECkJVbStVYyo8" target="_blank">Google Map</a>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component
export default class Information extends Vue {
}
</script>

<style scoped>
.Information {
  margin: 0 4rem 4rem 4rem;
}
p:first-child {
  margin-top: 0;
}

@media screen and (max-width:640px) {
  .Information {
    margin: 1rem; 
  }
}
</style>

