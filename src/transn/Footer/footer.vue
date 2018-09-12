<template>
  <footer class="footer" v-bind:class='{black:type=="black"}'>
    <div class="content clearfix ">
      <div class="f-l">
        <p class="mb20">
          <img alt="语联网_全球领先的多语信息处理及服务提供商平台" src="./lg.png">
          <span>聚集语言的力量</span>
        </p>
        <div class="copy">
          <p>Copyright © 2008-2018 iol8.com All Rights Reserved. </p>
          <p>京ICP备08001822号-37 京公网安备110105014183</p>
        </div>
      </div>

      <div class="f-r clearfix">
        <div class="cell f-r" v-for='(item,index) in links ' v-bind:key='index'>
          <p class="title">{{item.title}}</p>
          <div >
            <a v-for='(unit,$i) in item.children' :href="unit.path">
              <i></i>{{unit.name}}</a>
          </div>
        </div>
      </div>

    </div>
  </footer>
</template>
<script>
export default {
  props:{
    type:{
      default:''
    },
    links:{
      default(){
        return [
          {
            title:'服务支持﹁',
            children:[
              {
                name:'隐私条款',
                path:'https://www.iol8.com/iol8/about3.html'
              },
              {
                name:'使用条款',
                path:'https://www.iol8.com/iol8/about2.html'
              },
            ]
          },
          {
            title:'关于语联网﹁',
            children:[
              {
                name:'公司介绍',
                path:'https://www.iol8.com/iol8/about1.html'
              },
              {
                name:'联系我们',
                path:'https://www.iol8.com/iol8/about4.html'
              },
            ]
          },
        ]
      }
      
    }
  }
}
</script>

<style lang="stylus" scoped>
.f-l
  float left
.f-r
  float right
.footer
  width 100%
  padding 100px 0
  background #fff
  &.black
    background #333
    .content >.f-r .cell a
      color #fff
      i
        border-color #fff
    .content >.f-l .copy
      color #999
    >*
      color #fff
  >*
    color #333
    font-family "Microsoft YaHei", "SimSun"
  .content
    margin 0 auto
    width 100%
    max-width 1200px
    >.f-r
      
      .cell
        margin-left 110px
        &:last-child
          margin-left 0
        p,a
          line-height 30px
          height 30px
        p
          font-weight 600
        a
          font-size 16px
          display block
          &:hover
            color #367DFF
          i
            display inline-block
            width 20px
            margin 0 20px 0 0
            border-bottom 1px solid #333
            vertical-align middle
        >div
          padding-top 6px
    >.f-l
      .mb20
        padding-bottom 20px
        span
          font-size 20px
          padding-left 20px
        img
          height 35px
          margin-bottom -3px
      .copy
        font-size 12px
        color #556580
</style>

