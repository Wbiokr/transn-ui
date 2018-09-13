<template lang='jade'>
  .p-pop-toast
    vDetail
      div(slot='t') stamp时间戳处理
      div(slot='s') 时间戳转为日期+时间，共支持5种格式转换以及自定义分隔符
      //- div(slot='s-use') 当项目需要toast提示
      div(slot='s-code') 
        vWrapper
          div.t-com(slot='com')
            section
              select(v-model='type')
                option(v-for='item in options' v-bind:key='item' v-bind:value='item') {{item}}
              input(v-model='slt' placeholder='日期分隔符')
            p
              | 时间为：{{date}}
            p
              button.c-p(@click='date=stamp(new Date(),type,slt)') 转换
          span.f-l(slot='t-t') 入口(如:main.js)引入
          div(slot='tem') {{tem}}
          span.f-l(slot='s-t') 引用处
          div(slot='scr') {{scr}}
      div(slot='s-api') 
        h4 调用stamp(timeStamp,type,slt)
        vTabel(v-bind:list='list')
</template>
<style lang="stylus" scoped>
.t-com
  background #fff
  padding 2rem
  section
    padding-bottom 16px
    select,input
      height 36px
      margin-right 18px
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
import stamp from '../../transn/Stamp/'
// import stamp from 'transn/Stamp/'
export default {
  components:{vDetail,tFooter,vWrapper,vTabel},
  data(){
    return {
      date:'',
      slt:'',
      type:'YMD',
      options:[
        'YM','YMD','YMDh','YMDhm','YMDhms'
      ],
      tem:`
          import stamp from 'transn/Stamp/';

          export default {

            data(){
              return {
                date:'',
                slt:'',
                type:'YMD',
                options:[
                  'YM','YMD','YMDh','YMDhm','YMDhms'
                ],
              }
            },
            methods:{
              stamp
            }

          }

          `,
      scr:`
            <p>
              <select v-model='type'>
                <option v-for='item in options' v-bind:key='item' v-bind:value='item'> {{item}}</option>
              </select>
              <input v-model='slt' placeholder='日期分隔符' />
            </p>
            <p>
              时间为：{{date}}
            </p>
            <p>
              <button @click='date=stamp(new Date(),type,slt)'> 转换</button>
            </p>
          `,
      list:[
        
        {name:'stamp',content:'毫秒级时间戳',type:5,allV:'时间戳',defaultV:'本地时间戳'},
        {name:'type',content:'转换类型',type:1,allV:'[YM,YMD,YMDh,YMDhm,YMDhms]',defaultV:'YMD'},
        {name:'slt',content:'日期分割符',type:1,allV:'任意分隔符',defaultV:'-'},
      ],
      msg:'请输入内容'
    }
  },
  methods:{
    stamp
  }
}
</script>

