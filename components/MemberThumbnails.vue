<template>
  <div class="MemberThumbnails" v-html="memberList"></div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class MemberThumbnails extends Vue {
  @Prop({ default: [], required: true })
  member

  get memberList(): string {
    let list: string[] = []
    if (this.member.includes('hys')) {
      list.push('<div class="thumb"><a href="http://www.hys-inc.jp/" target="_blank"><img src="/profile/hys.png" width="110" height="110"></a></div>')
    }
    if (this.member.includes('shiiho')) {
      list.push('<div class="thumb"><a href="http://fukasigi.com" target="_blank"><img src="/profile/shiiho.png" width="110" height="110"></a></div>')
    }
    if (this.member.includes('koiwahara')) {
      list.push('<div class="thumb"><a href="http://cyocun.com/" target="_blank"><img src="/profile/koiwahara.png" width="110" height="110"></a></div>')
    }
    if (this.member.includes('tmo')) {
      list.push('<div class="thumb"><a href="http://tominagakei.masudayuta.onishitakuto.jp/" target="_blank"><img src="/profile/tmo.png" width="110" height="110"></a></div>')
    }
    if (this.member.includes('miyamoto')) {
      list.push('<div class="thumb"><a href="http://msnr-mymt.net/" target="_blank"><img src="/profile/miyamoto.png" width="110" height="110"></a></div>')
    }
    if (this.member.includes('mugita')) {
      list.push('<div class="thumb"><a href="http://scnr.jp/" target="_blank"><img src="/profile/mugita.jpg" width="110" height="110"></a></div>')
    }
    if (this.member.includes('alumican')) {
      list.push('<div class="thumb"><a href="http://alumican.net/" target="_blank"><img src="/profile/alumican.png" width="110" height="110"></a></div>')
    }
    if (this.member.includes('shimada')) {
      list.push('<div class="thumb"><a href="http://ewiys.com/" target="_blank"><img src="/profile/shimada.png" width="110" height="110"></a></div>')
    }
    if (this.member.includes('shimizu')) {
      list.push('<div class="thumb"><a href="http://backspace.tokyo/" target="_blank"><img src="/profile/shimizu.png" width="110" height="110"></a></div>')
    }
    if (this.member.includes('takahashi')) {
      list.push('<div class="thumb"><a href="http://feb19.jp" target="_blank"><img src="/profile/takahashi.png" width="110" height="110"></a></div>')
    }
    if (this.member.includes('you')) {
      list.push('<div class="thumb"><a href="http://rettuce.com/" target="_blank"><img src="/profile/you.png" width="110" height="110"></a></div>')
    }
    return list.join('')
  }
} 
</script>

<style>
.thumb {
  display: inline-block;
}
</style>
