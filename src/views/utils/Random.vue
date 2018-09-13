<template lang='jade'>
  .p-pop-toast
    vDetail
      div(slot='t') random模块
      div(slot='s') 随机生成N位字符(字母+数字)，项目内主要用于七牛云上传生成key值使用
      //- div(slot='s-use') 当项目需要toast提示
      div(slot='s-code') 
        vWrapper
          div.t-com(slot='com')
            p
              input(v-model='n' type='number')
            p
              | 随机字符串：{{char}}
            p
              button.c-p(@click='char=random(n)') 获取
          span.f-l(slot='t-t') 入口(如:main.js)引入
          div(slot='tem') {{tem}}
          span.f-l(slot='s-t') 引用处
          div(slot='scr') {{scr}}
      div(slot='s-api') 
        h4 调用random(n)
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
import random from '../../transn/Random/'
// import random from 'transn/Random/'
export default {
  components:{vDetail,tFooter,vWrapper,vTabel},
  data(){
    return {
      n:4,
      char:'',
      tem:`
          import random from 'transn/Random/';

          export default {

            data(){
              return {
                n:4,
                char:'',
              }
            },
            methods:{
              random
            }

          }

          `,
      scr:`
            <p>
              <input v-model='n' type='number' />
            </p>
            <p>
               随机字符串：{{char}}
            </p>
            <p>
              <button @click='char=random(n)'> 获取</button>
            </p>
          `,
      list:[
        
        {name:'n',content:'字符位数',type:5,allV:'大于零数字',defaultV:''},
      ],
      msg:'请输入内容'
    }
  },
  methods:{
    random
  }
}
</script>

