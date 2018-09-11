<template lang="jade">
transition(name='nf')
  .com-notice-alt(v-if='!!msg')
    article
      p {{msg}}
      p(style='padding-top:1rem;')
        button.c-p(@click='msg=""') 我知道了  
</template>
<script>
export default {
  data(){
    return{

      msg:''
    }
  }
}
</script>
<style lang="stylus" scoped>

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
    padding 2rem 4rem
    box-shadow 0 2px 6px 2px rgba(255,0,0,0.06)
    border-radius 8px
    p
      text-align center
      width 100%
      font-size .8rem
      color #ED462F
      button 
        display inline-block
        width 140px
        height 30px
        line-height 30px
        text-align center
        background #301B60
        border-radius 2px
        color #fff
        &:hover
          opacity .7
</style>



