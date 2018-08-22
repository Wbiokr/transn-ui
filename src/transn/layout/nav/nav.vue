<template>
  <nav :style='{position:stream}'>
    <div class="content clearfix">
      <a :href="home" class="f-l">
        <img src="./lg.png" alt="语联网_全球领先的多语信息处理及服务提供商平台" />
        <span>聚集语言的力量</span>  
      </a>
      <div class="f-r">
        <ul>
          <li v-for='(item,idx) in navs ' :class='{active:route==item.path}'>
            <a :href='item.path||"javascript:void(0);"'>{{item.name}}</a>
            <span v-if='idx<navs.length-1'>/</span>
            <ul v-if='item.children'>
              <li v-for='(unit,ix) in item.children '>
                <a :href="unit.path||'javascript:void(0);'">{{unit.name}}</a>
                <ul v-if='unit.children'>
                  <li v-for="(cs,$i) in unit.children">
                    <a :href="cs.path||'javascript:void(0);'">{{cs.name}}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style lang="stylus" scoped>
nav
  *
     box-sizing border-box 
     transition all ease 0.3s
  width 100%
  top 0
  left 0
  height 80px
  padding 0 5%  
  background #fff
  box-shadow 0 2px 6px 0 rgba(0,0,0,0.10)
  display flex
  justify-content space-between
  align-items center
  position relative
  .content
    width 100%
    >.f-l
      cursor pointer
      img
        height 30px
        margin-bottom -3px
        filter brightness(0)
      span
        line-height 30px
        font-size 18x
        font-weight 600
        margin-left 1.2em
    >.f-r
      .active >a
        color #367DFF
      color blue
      >ul
        height 30px
        >li
          float left
          position relative
          z-index 20
          line-height 30px
          font-size 18px
          color #333
          &:hover
            >a
              color #367DFF
            >ul
              // display block
              visibility visible
              opacity 1
          >a
            padding 0 20px
          >span
            color #666
          ul
            position absolute
            top 100%
            background #fff
            text-align center
            min-width 100%
            padding 10px 0 10px 0
            // display none
            visibility hidden
            opacity 0
            // height 0
            border-radius 0 0 6px 6px
            box-shadow 0 2px 6px 0 rgba(88,88,100,0.50)
            li
              position relative
              &:hover
                background #367dff
                >ul
                  // display block
                  visibility visible
                  opacity 1
                >a
                  color #fff
          >ul 
            >li
              
              >ul
                top 0
                left 100%
               
              a
                line-height 40px
                font-size 16px
                display block
</style>

<script>
export default {
  props:{
    home:{
      default:'/'
    },
    route:{
      default:'/'
    },
    stream:{
      default:'relative'
    },
    navs:{
      default(){
        return [
      // {name:'首页',path:'/'},
      // {
      //   name:'定制化产品',
      //   path:'',
      //   children:[
         
      //     {name:'定制1',path:'/dz/1'},
      //     {name:'定制2',path:'/dz/2'},
      //      {name:'定制类',path:'',children:[
      //       {name:'类1',path:'/type/1'},
      //       {name:'类2',path:'/type/2'},
      //     ]},
          
      //   ]
      // },
      // {
      //   name:'个性化',
      //   path:'',
      //   children:[
      //     {name:'共享1',path:'/gx/1'},
      //     {name:'共享2',path:'/gx/2'},
      //   ]
      // }
    ]
      }
    }
  }
}


</script>

