<template lang='jade'>
  .p-pop-toast
    vDetail
      div(slot='t') alert弹窗提示
      div(slot='s') 简单文案提示，一般用于后端接口报错/
      div(slot='s-use') 当项目有较久交互，需要loading过度时
      div(slot='s-code') 
        vWrapper
          div.t-com(slot='com')
            p
              input(v-model='msg')
            p
              button.c-p(@click='$alert(msg)') 默认直传msg
              button.c-p(@click='$alert({msg,radius:10})') radius=10
            p
              button.c-p(@click='$alert({msg,bg_zz:"#ccc"})') 遮罩=#ccc
              button.c-p(@click='$alert({msg,bg_ct:"#0f0"})') bg_ct=#0f0
            p
              button.c-p(@click='$alert({msg,bg_btn:"#000"})') bg_btn=#000
              button.c-p(@click='$alert({msg,color_btn:"#f00"})') bg_btn=#f00
            p
              button.c-p(@click='$alert({msg,color_txt:"#000"})') bg_btn=#000
          span.f-l(slot='t-t') 入口(如:main.js)引入
          div(slot='tem') {{tem}}
          span.f-l(slot='s-t') 引用处
          div(slot='scr') {{scr}}
      div(slot='s-api') 
        h5(style='line-height:46px;font-size:18px;') 当传入字符串参数时候，一切参数默认，参数做msg用，如：$alert('hello')
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
// import Alert from '../../transn/Alert/index'
import Alert from 'transn/dist/Alert/'

Vue.use(Alert);


export default {
  components:{vDetail,vWrapper,vTabel},
  data(){
    return {
      img:require('./loading2.gif'),
      tem:`
          import alert from 'transn/dist/Alert/';

          Vue.use(Alert)

          export default {
            data(){
              return {
                msg
              }
            }
          }
          `,
      scr:`
            <input v-model='msg'/>

            <button @click='$alert(msg)'>默认直穿msg</button>
            <button @click='$alert({msg,radius:10})'> radius=10</button>
            <button @click='$alert({msg,bg_zz:"#ccc"})'> 遮罩=#ccc</button>
            <button @click='$alert({msg,bg_ct:"#0f0"})'> bg_ct=#0f0</button>
            <button @click='$alert({msg,bg_btn:"#000"})'> bg_btn=#000</button>
            <button @click='$alert({msg,color_btn:"#f00"})'> bg_btn=#f00</button>
            <button @click='$alert({msg,color_txt:"#000"})'> bg_btn=#000</button>
          `,
      list:[
        {name:'msg',content:'弹窗内容',type:1,allV:'',defaultV:''},
        {name:'radius',content:'圆角',type:5,allV:'数字即可',defaultV:'0'},
        {name:'bg_zz',content:'遮罩设置',type:1,allV:'色值',defaultV:'rgba(0,0,0,0.7)'},
        {name:'bg_ct',content:'内容背景色设置',type:1,allV:'色值',defaultV:'#fff'},
        {name:'bg_btn',content:'按钮背景色设置',type:1,allV:'色值',defaultV:'rgba(24,144,255,0.8)'},
        {name:'color_btn',content:'按钮字体色',type:1,allV:'色值',defaultV:'#fff'},
        {name:'color_txt',content:'内容字体色',type:1,allV:'色值',defaultV:'#ED462F'},
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

