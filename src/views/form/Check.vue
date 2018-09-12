<template lang='jade'>
  .p-pop-toast
    vDetail
      div(slot='t') check验证js
      div(slot='s') form表单验证
      div(slot='s-use') 当项目涉及到form表单(用户名、手机号、Email、密码、图形码等)验证
      div(slot='s-code') 
        vWrapper
          div.t-com(slot='com')
            p
              input(v-model='msg' placeholder='请输入想要验证字符串')
            p
              button.c-p(@click='checkMobile(msg)?$toast({msg:"验证通过"}):$toast({msg:"验证失败"})') 手机号
              button.c-p(@click='checkEmail(msg)?$toast({msg:"验证通过"}):$toast({msg:"验证失败"})') Email验证
          //- span.f-l(slot='t-t') template部分
          div(slot='tem') {{tem}}
          //- span.f-l(slot='s-t') 引用处
          div(slot='scr') {{scr}}
      div(slot='s-api') 
        h5(style='line-height:46px;font-size:18px;') 验证通过返回true，否则返回false
        vTabel(v-bind:list='list' v-bind:titles="['方法','使用','规则']")
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
import vWrapper from '@/Demo.vue'
import vTabel from '@/Table.vue'
// import check from '../../transn/Check/index'
import check from 'transn/dist/Check/'

export default {
  components:{vDetail,vWrapper,vTabel},
  data(){
    return {
      tem:`
          <p>
            <input v-model='msg' placeholder='请输入想要验证字符串' />
          </p>
          <p>
            <button @click='checkMobile(msg)'> 手机号</button>
            <button @click='checkEmail(msg)'> Email验证</button>
          </p>
          `,
      scr:`
          import check from 'transn/Check/'
          methods:{
            ...check,
          }
          `,
      msg:'',
      list:[
        // {name:'checkUsername',content:'checkUsername(name,cb)，name为检测对象(如input值),cb为检测失败，回调函数',allV:'6位字符检测'},
        // {name:'checkPassword',content:'checkPassword(pass,cb)，pass为检测对象(如input值),cb为检测失败，回调函数',allV:'8-16位字母数字组合字符'},
        {name:'checkMobile',content:'checkMobile(phone)，phone为检测对象(如input值)',allV:'11位1开头正常手机号'},
        {name:'checkEmail',content:'checkEmail(email)，email为检测对象(如input值)',allV:'含有. @ .字符匹配'},
      ],
    }
  },
  methods:{
    ...check,
  }
}
</script>

