<template lang='jade'>
  .p-pop-toast
    vDetail
      div(slot='t') 自封装ajax
      div(slot='s') 默认content-type="application/x-www-form-urlencoded"，默认type='post'
      //- div(slot='s-use') 当项目需要toast提示
      div(slot='s-code') 
        vWrapper
          div.t-com(slot='com')
            p
              | 服务器时间为：{{time}}
            p
              button.c-p(@click='getTime()') 获取
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
import ajax from '../../transn/Ajax/'
// import ajax from 'transn/Ajax/'
export default {
  components:{vDetail,tFooter,vWrapper,vTabel},
  data(){
    return {
      time:'',
      tem:`
          import ajax from 'transn/Ajax/';

          `,
      scr:`
          methods:{
            getTime(){
              const self=this;
              ajax({
                url:'http://tapi.iol8.net/finance/getDate',
                success(res){
                  self.time=res.data
                  self.$toast({msg:'成功'})
                },
                error(){
                  self.$toast({msg:'失败'})
                }
              })
            }
          }
          `,
      list:[
        {name:'type',content:'请求方式',type:1,allV:['get','post'],defaultV:'post'},
        {name:'url',content:'请求路径',type:1,allV:'',defaultV:''},
        {name:'async',content:'是否异步',type:0,allV:[true,false],defaultV:'true'},
        {name:'data',content:'请求参数',type:3,allV:'任何对象',defaultV:'{}'},
        {name:'contentType',content:'header类型头',type:1,allV:'所有格式',defaultV:'application/x-www-form-urlencoded'},
        {name:'beforeSend',content:'请求前钩子',type:2,allV:'所有函数',defaultV:'空函数'},
        {name:'success',content:'请求成功钩子',type:2,allV:'所有函数',defaultV:'空函数'},
        {name:'error',content:'请求失败钩子',type:2,allV:'所有函数',defaultV:'空函数'},
        {name:'complete',content:'请求完成钩子',type:2,allV:'所有函数',defaultV:'空函数'},
      ],
      msg:'请输入内容'
    }
  },
  methods:{
    getTime(){
      const self=this;
      ajax({
        url:'http://tapi.iol8.net/finance/getDate',
        success(res){
          self.time=res.data
          self.$toast({msg:'成功'})
        },
        error(){
          self.$toast({msg:'失败'})
        }
      })
    }
  }
}
</script>

