<template lang='jade'>
  .p-data-page
    vDetail
      div(slot='t') page组件
      div(slot='s') 数据列表分页
      div(slot='s-use') 项目中，数据较多，需要按页请求数据时调用
      div(slot='s-code') 
        vWrapper
          tPage(slot='com' current='1' total='89' v-bind:cb='changePage')
          div(slot='tem') {{tem}}
          div(slot='scr') {{scr}}
      div(slot='s-api') 
        vTabel(v-bind:list='list')
</template>
<script>
import vDetail from '@/Detail.vue'
// import tFooter from 'transn/dist/Footer/'
import tPage from '../../transn/data/Page/index'
import vWrapper from '@/Demo.vue'
import vTabel from '@/Table.vue'
export default {
  components: { vDetail, vWrapper, vTabel,tPage },
  data() {
    return {
      tem: `
          <template>
            <tPage current='1' total='90' v-bind:cb='changePage' />
          </template>
          `,

      scr: `
        import tPage from 'transn/Page/'
        export default {
          components:{tPage},
          methods:{
            changePage(e){
              alert('当前页面为:'+e)
            }
          }
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
          content: '数据总量',
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
          content: '改变页数回调函数，一般为交互函数',
          type: 2,
          allV: '',
          defaultV: '无'
        },
      ],
      
    }
  },
  methods:{
    changePage(e){
      alert(`当前页面为:${e}`)
    }
  }
}
</script>

