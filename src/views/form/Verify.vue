<template lang='jade'>
  .p-pop-toast
    vDetail
      div(slot='t') 验证身份证
      div(slot='s') 派出所规则验证身份证号码
      //- div(slot='s-use') 当项目涉及到form表单(用户名、手机号、Email、密码、图形码等)验证
      div(slot='s-code') 
        vWrapper
          div.t-com(slot='com')
            p
              input(v-model='msg' placeholder='请输入身份证号码(区号、生日、权重)')
            p
              button.c-p(@click='verify(msg)?$toast({msg:"验证通过"}):$toast({msg:"验证失败"})') 验证
          //- span.f-l(slot='t-t') template部分
          div(slot='tem') {{tem}}
          //- span.f-l(slot='s-t') 引用处
          div(slot='scr') {{scr}}
      div(slot='s-api') 
        p
          | verify方法，接收身份证号参数，进行区号、生日、权重判断；
          br
          strong verify(id)
        //- vTabel(v-bind:list='list' v-bind:titles="['方法','使用','规则']")

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
// import verify from '../../transn/Verify/index.js'
import verify from 'transn/dist/Verify/'

export default {
  components:{vDetail,vWrapper,vTabel},
  data(){
    return {
      tem:`
          <p>
            <input 
              v-model='msg'
              placeholder='请输入身份证号码(区号、生日、权重)' 
            />
          </p>
          <p>
            <button
              (@click='
                verify(msg)
                ?$toast({msg:"验证通过"})
                :$toast({msg:"验证失败"})'
            > 密码验证</button>
          </p>
          `,
      scr:`
          import verify from 'transn/Verify/'
          methods:{
            ...{verify},
          }
          `,
      msg:'',
      // list:[
      //   {name:'checkUsername',content:'checkUsername(name,cb)，name为检测对象(如input值),cb为检测失败，回调函数',allV:'6位字符检测'},
      //   {name:'checkPassword',content:'checkPassword(pass,cb)，pass为检测对象(如input值),cb为检测失败，回调函数',allV:'8-16位字母数字组合字符'},
      //   {name:'checkMobile',content:'checkMobile(phone,cb)，phone为检测对象(如input值),cb为检测失败，回调函数',allV:'11位1开头正常手机号'},
      //   {name:'checkEmail',content:'checkEmail(email,cb)，email为检测对象(如input值),cb为检测失败，回调函数',allV:'含有. @ .字符匹配'},
      // ],
    }
  },
  mounted(){
    console.log(this)
  },
  methods:{
    ...{verify},
  }
}
</script>

