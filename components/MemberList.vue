<template>
  <div class="MemberList" v-html="memberList"></div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class MemberList extends Vue {
  @Prop({ default: [], required: true })
  member

  get memberList(): string {
    let list: string[] = []
    if (this.member.includes('shiiho')) {
      list.push('<a href="http://fukasigi.com" target="_blank">FURUKAWA Shiiho</a>')
    }
    if (this.member.includes('gunji')) {
      list.push('<a href="http://08772.com/" target="_blank">GUNJI Tatsuhiko</a>')
    }
    if (this.member.includes('hys')) {
      list.push('<a href="http://www.hys-inc.jp/" target="_blank">HAYASHI Hisayoshi</a>')
    }
    if (this.member.includes('koiwahara')) {
      list.push('<a href="http://cyocun.com/" target="_blank">KOIWAHARA Tadashi</a>')
    }
    if (this.member.includes('tmo')) {
      list.push('<a href="http://tominagakei.masudayuta.onishitakuto.jp/" target="_blank">Kei Tominaga, Yuta Masuda and Takuto Onishi</a>')
    }
    if (this.member.includes('miyamoto')) {
      list.push('<a href="http://msnr-mymt.net/" target="_blank">MIYAMOTO Masanori</a>')
    }
    if (this.member.includes('mugita')) {
      list.push('<a href="http://scnr.jp/" target="_blank">MUGITA Hikaru</a>')
    }
    if (this.member.includes('alumican')) {
      list.push('<a href="http://alumican.net/" target="_blank">OKUDA Yukiya</a>')
    }
    if (this.member.includes('shimada')) {
      list.push('<a href="http://ewiys.com/" target="_blank">SHIMADA Yoshiyuki</a>')
    }
    if (this.member.includes('shimizu')) {
      list.push('<a href="http://backspace.tokyo/" target="_blank">SHIMIZU Motoi</a>')
    }
    if (this.member.includes('takahashi')) {
      list.push('<a href="http://feb19.jp" target="_blank">TAKAHASHI Nobuhiro</a>')
    }
    if (this.member.includes('you')) {
      list.push('<a href="http://rettuce.com/" target="_blank">TANAKA You</a>')
    }
    return list.join(' / ')
  }
} 
</script>
