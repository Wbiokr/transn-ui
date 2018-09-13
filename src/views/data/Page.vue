<template lang='jade'>
  .p-data-page
    vDetail
      div(slot='t') page组件
      div(slot='s') 数据列表分页
      div(slot='s-use') 项目中，数据较多，需要按页请求数据时调用
      div(slot='s-code') 
        button(@click='isJump=!isJump') {{!isJump?'开启':'关闭'}} 
        span 跳跃框
        vWrapper
          //- p?

          tPage(slot='com' v-bind:current='page' total='89' v-bind:cb='p=>page=p' v-bind:isJump='isJump')
          div(slot='tem') {{tem}}
          div(slot='scr') {{scr}}
      div(slot='s-api') 
        h4(style='line-height:36px;font-size:16px;padding:8px 0;')
          | 当total&lt;size时，分页自动隐藏,样式可以自定义(加类名或原基础修改)
        vTabel(v-bind:list='list')
</template>
<script>
import vDetail from '@/Detail.vue'
import vWrapper from '@/Demo.vue'
import vTabel from '@/Table.vue'
import tPage from '../../transn/Page/index'
// import tPage from 'transn/dist/Page/'

export default {
  components: { vDetail, vWrapper, vTabel,tPage },
  data() {
    return {
      page:1,
      isJump:false,
      tem: `
          <template>
            <div>

              <tPage 
              v-bind:current='page'
              total='90'
              v-bind:cb='p=>page=p'
              v-bind:isJump='isJump'
              />

              <button @click='isJump=!isJump'>
                {{isJump?'开启':'关闭'}}
              </button> 
              
              <span> 跳跃框</span>
            
            </div>
          </template>
          `,

      scr: `
        import tPage from 'transn/Page/'
        export default {
          components:{tPage},
          data(){return{
            page:1,
            isJump:false,
          }},
          
        }
          `,
      list: [
        {
          name: 'current',
          content: '初始化传入页面，默认为1',
          type: 5,
          allV: '小于总页数',
          defaultV: 1
        },
        {
          name: 'total',
          content: '数据总量（包括未请求数据）',
          type: 5,
          allV: '',
          defaultV: 0
        },
        {
          name: 'size',
          content: '每一页显示数据量',
          type: 5,
          allV: '',
          defaultV: 10
        },
        {
          name: 'cb',
          content: '改变页数回调函数，一般为交互函数，接收参数page(当前页码数)',
          type: 2,
          allV: '',
          defaultV: '无'
        },
        {
          name: 'isJump',
          content: '是否开启跳跃框',
          type: 0,
          allV: '[true,false]',
          defaultV: 'false'
        },
      ],
      
    }
  },
  methods:{
    changePage(e){
      setTimeout(()=>{

        console.log(`当前页面为:${e}`)
      
      },2000)
    }
  }
}
</script>

