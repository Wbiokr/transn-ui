<template lang="jade">
  .com-detail
    section.d-t
      h3
        slot(name="t") 组件
      div
        slot(name='s')  
    //- section.d-t-use
    //-   h3
    //-     slot(name='t-use') 何时使用 
    //-   div
    //-     slot(name='s-use') 
    section.d-t-code
      h3 
        slot(name='t-code') 代码演示
      div
        slot(name='s-code')
    section.d-t-api  
      h3
        slot(name='t-api') API
      div
        slot(name='s-api')
</template>
<style lang="stylus" scoped>
.com-detail
  padding-left 5rem
  section
    padding 1rem 0
    >div
      font-size 14px
      color #333
      padding-top 0.8rem
    h3
      color #1890ff
      font-weight 500
      position relative
      // padding-left 1.2rem
      font-size 18px
      &:hover
        // color #009688
        opacity 0.7
        &:before
          background #009688
      &:before
        position absolute
        left -1rem
        top 50%
        transform translateY(-50%)
        content:''
        height 2px
        width 0.7rem
        background #1890e3
</style>

