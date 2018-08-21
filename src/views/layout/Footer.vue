<template lang='jade'>
  .p-lay-footer
    vDetail
      div(slot='t') footer组件
      div(slot='s') 传神项目底部友情链接，快捷链接等封装
      div(slot='s-use') 项目中存在底部友情链接
      div(slot='s-code') 
        vWrapper(isFirst=1)
          tFooter(slot='com')
          div(slot='tem') {{tem}}
          div(slot='scr') {{scr}}
        vWrapper
          tFooter(slot='com')
          div(slot='tem') {{tem}}
          div(slot='scr') {{scr}}
      div(slot='s-api') 
        vTabel(v-bind:list='list')
</template>
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
          <template>

            <tFooter />

          </template>
          `,
      scr:`
          import tFooter from 'transn/Footer/'

          export default {

            components:{tFooter},

          }
          `,
      list:[
        {name:'color',content:'颜色',type:1,allV:['red','pink'],defaultV:'red'},
          {name:'color1',content:'颜色',type:1,allV:['red','pink'],defaultV:'red'},
          {name:'color2',content:'颜色',type:1,allV:['red','pink'],defaultV:'red'},
          {name:'color3',content:'颜色',type:1,allV:['red','pink'],defaultV:'red'},
        {name:'color',content:'颜色',type:1,allV:['red','pink'],defaultV:'red'},
          {name:'color1',content:'颜色',type:1,allV:['red','pink'],defaultV:'red'},
          {name:'color2',content:'颜色',type:1,allV:['red','pink'],defaultV:'red'},
          {name:'color3',content:'颜色',type:1,allV:['red','pink'],defaultV:'red'},
        
      ]
    }
  }
}
</script>

