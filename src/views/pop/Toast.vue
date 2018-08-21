<template lang='jade'>
  .p-pop-toast
    vDetail
      div(slot='t') toast插件
      div(slot='s') toast弹出提示
      div(slot='s-use') 当项目需要toast提示
      div(slot='s-code') 
        vWrapper
          div.t-com(slot='com')
            p
              input(v-model='msg' placeholder='请输入想要toast内容')
            p
              button.c-p(@click='pop("top")') top弹
              button.c-p(@click='pop("middle")') middle弹
              button.c-p(@click='pop("bottom")') bottom弹
          span.f-l(slot='t-t') 入口(如:main.js)引入
          div(slot='tem') {{tem}}
          span.f-l(slot='s-t') 引用处
          div(slot='scr') {{scr}}
      div(slot='s-api') 
        vTabel(v-bind:list='list')
</template>
<style lang="stylus" scoped>
.t-com
  background #fff
  padding 2rem
  p
    height 3rem
    width 70%
    input
      height 70%
      padding-left 2rem
      width 100%
    button 
      width 9rem
      margin-right 1.5rem
      line-height 2rem
      border 0
      background rgba(#1890ff,.8)
      color #fff
      border-radius 4px
      &:hover
        background rgba(#1890ff,1)
        box-shadow 0 0 14px -2px rgba(#000,.4)
</style>

<script>
import vDetail from '@/Detail.vue'
import tFooter from 'transn/dist/Footer/'
import vWrapper from '@/Demo.vue'
import vTabel from '@/Table.vue'
export default {
  components:{vDetail,tFooter,vWrapper,vTabel},
  data(){
    return {
      tem:`
          import toast from 'transn/dist/Toast/';

          Vue.use(toast)
          `,
      scr:`
          methods:{
            pop(type){
              this.$toast({
                msg:this.msg,
                type
              })
            }
          }
          `,
      list:[
        {name:'msg',content:'toast内容',type:1,allV:'',defaultV:''},
        {name:'time',content:'持续时间',type:5,allV:'',defaultV:3000},
        {name:'type',content:'位置',type:1,allV:['middle','top','bottom'],defaultV:'middle'},
      ]
    }
  },
  methods:{
    pop(type){
      this.$toast({
        msg:this.msg,
        type
      })
    }
  }
}
</script>

