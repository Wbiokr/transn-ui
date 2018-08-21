<template lang="jade">
  .com-demo.p-r
    h4.p-a.f-5
      | 灰色边框以内为组件预览部分,右侧箭头可以切换代码与预览
      img.f-r.c-p(src='../imgs/icon_toggle.png' title='点击切换图片查看代码' @click='isCode=!isCode')
    .component(v-if='!isCode')
      slot(name='com') 
    .code.clearfix(v-else)
      pre.f-l
        h4 
          slot(name='t-t')
            span.f-l template部分 
          img.f-l.c-p(src='../imgs/icon_copy.png' @click='copy')
        code
          slot(name='tem')
      pre.f-l
        h4 
          slot(name='s-t')
            span.f-l script部分
          img.f-l.c-p(src='../imgs/icon_copy.png' @click='copy("#demo-scr")')
        code#demo-scr
          slot(name='scr')
</template>
<script>

export default {
  props:{
    isFirst:{
      default:false
    }
  },  
  data(){
    return {
      isCode:false,
      
    }
  },
  methods:{
    copy(){
      const dom=event.target.parentNode.nextSibling
      const rng=document.createRange();
      rng.selectNode(dom);
      
      const slt=window.getSelection();
      if(slt.rangeCount>0) slt.removeAllRanges();

      slt.addRange(rng);

      document.execCommand('copy');

      this.$toast({msg:'恭喜，您已复制成功！'})
    }
    
  }
}
</script>

<style lang="stylus" scoped>
.com-demo
  margin 4rem 0
  width calc(100% - 2rem)
  box-shadow 0 0 10px -1px rgba(#000,.2) inset
  padding 10px
  background rgba(#eee,.3)
  // margin-right 
  // margin  0 auto
  border 1px solid #dedede
  >h4
    top -2rem
    left 0
    color #333
    width 100%
    height 20px
    img
      height 100%
      &:hover
        opacity 0.7
        transform scaleX(1.2)
  .component
    font-size 20px
  .code
    font-size 20px
    pre
      width 50%
      // padding-right 2rem
      img 
        margin-left 2rem
        height 24px
        filter brightness(10%)
        opacity 0.3
        &:hover
          filter brightness(100%)
          opacity 1
</style>

