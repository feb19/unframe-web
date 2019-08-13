<template>
  <div class="AccessMap">
    <GmapMap ref="mapRef"
      :center="{lat:35.6339758, lng:139.6893952}"
      :zoom="16"
      map-type-id="terrain"
      class="AccessMap__map"
      :options="options">
      <GmapMarker 
        :position="{lat:35.6339758, lng:139.6893952}"
        icon="http://unframe.jp/images/mapicon.png"
      />
    </GmapMap>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class AccessMap extends Vue {
  options = {
    disableDefaultUI: true,
    scrollwheel: false,
    draggable: false,
    scaleControl: false,
    navigationControl: false,
    mapTypeControl: false,
    stylers: [
      { saturation: -100 },
      { visibility: 'simplified' },
      { lightness: -50 }
    ]
  }
  mounted() {
  }
}
</script>

<style scoped>
.AccessMap {
  width: 100vw;
  height: 300px;
  margin: 60px auto;
}
.AccessMap__map {
  width: 100%;
  height: 100%;
}

@media screen and (max-width:640px) {
  .AccessMap {
    height: 200px; 
  }
}
</style>
