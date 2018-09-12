<template lang='jade'>
  .p-pop-toast
    vDetail
      div(slot='t') loading弹窗
      div(slot='s') 请求数据加载弹窗组件
      div(slot='s-use') 当项目有较久交互，需要loading过度时
      div(slot='s-code') 
        vWrapper
          div.t-com(slot='com')
            
            p
              button.c-p(@click='$loading({action:true,bg:false})') 无遮罩
              button.c-p(@click='$loading({action:true,img:img,bg:false})') 无遮罩+自定义loading图
              button.c-p(@click='$loading({action:true,bg:true})') 有遮罩
              button.c-p(@click='$loading({action:true,bg:"rgba(0,0,0,0.4)"})') 自定义遮罩
              button.c-p(@click='$loading({action:false})') 关闭
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
      min-width 9rem
      padding 0 1rem
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
// import tFooter from 'transn/dist/Footer/'
import vWrapper from '@/Demo.vue'
import vTabel from '@/Table.vue'
import Loading from '../../transn/pop/loading/index'

Vue.use(Loading);


export default {
  components:{vDetail,vWrapper,vTabel},
  data(){
    return {
      img:require('./loading2.gif'),
      tem:`
          import loading from 'transn/dist/Loading/';

          Vue.use(loading)
          `,
      scr:`
            <button @click='$loading({action:true,bg:false})'>无遮罩</button>
            <button @click='$loading({action:true,img:img,bg:false})'>无遮罩+自定义loading图</button>
            <button @click='$loading({action:true,bg:true})'>有遮罩</button>
            <button @click='$loading({action:true,bg:"rgba(0,0,0,0.4)"})'>自定义遮罩</button>
            <button @click='$loading({action:false})'>关闭</button>
          `,
      list:[
        {name:'action',content:'loading(打开/关闭)',type:0,allV:[true,false],defaultV:true},
        {name:'img',content:'GIF动态图',type:1,allV:'自己引用图片',defaultV:'见无遮罩loading'},
        {name:'bg',content:'遮罩设置',type:[0,1],allV:['false','颜色值'],defaultV:'0.15透明度白色'},
      ],
      msg:'请输入内容'
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

