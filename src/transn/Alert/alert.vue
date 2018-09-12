<template lang="jade">
transition(name='nf')
  .com-notice-alt(v-if='!!msg' v-bind:style='{"background-color":bg_zz}')
    article(v-bind:style='{"border-radius":radius+"px","background-color":bg_ct}')
      p(v-bind:style='{color:color_txt}') {{msg}}
      p(style='padding-top:1rem;')
        button(@click='msg=""' v-bind:style='{color:color_btn,background:bg_btn}') 我知道了  
</template>
<script>
export default {
  data(){
    return{

      msg:'', //弹窗内容
      radius:8, //圆角
      bg_zz:'rgba(0,0,0,.7)', //遮罩背景色
      bg_ct:'#fff',//内容背景色
      bg_btn:'rgba(24,144,255,0.8)',//按钮背景色
      color_btn:'#fff',//按钮色
      color_txt:'#ED462F',//文本色
    }
  }
}
</script>
<style lang="stylus" scoped>
*
  transition all  ease .3s

.nf-enter,.nf-leave-to
  // .com-notice-alt
  background rgba(0,0,0,0)
  article
    transform scaleY(0)
.com-notice-alt
  position fixed
  height 100%
  width 100%
  top 0
  left 0
  background rgba(0,0,0,.7)
  z-index 381
  display flex 
  justify-content center
  align-items center
  article
    width 70%
    max-width 22rem
    background #fff
    padding 40px 80px
    box-shadow 0 2px 6px 2px rgba(255,0,0,0.06)
    border-radius 8px
    p
      text-align center
      width 100%
      font-size 16px
      color #ED462F
      button 
        border none 
        display inline-block
        width 140px
        height 30px
        line-height 30px
        text-align center
        background #301B60
        border-radius 2px
        color #fff
        outline none
        cursor pointer
        &:hover
          opacity .7
</style>



