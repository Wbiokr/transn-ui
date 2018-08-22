<template lang='jade'>
  .p-lay-nav
    vDetail
      div(slot='t') nav导航组件
      div(slot='s') 传神项目之间导航功能与UI显示
      div(slot='s-use') 当前项目有头部导航时
      div(slot='s-code') 
        tNav(v-bind:links='links')
</template>
<script>
import vDetail from '@/Detail.vue'
import tNav from 'transn/dist/Header/'
export default {
  components:{vDetail,tNav},
  data(){
    return {
      links:[
          { name: 'Ab', path: '/index' },
          { name: '1212', path: '/quote' },
          {
            name: '1212',
            path: 'javascript:void(0);',
            children: [
              {
                name: 'DashboardDashboardDashboardDashboard',
                path: '/blog',
                // icon: require('./dashboard-h.png')
              },
              {
                name: 'Community',
                path: '/blog/detail/121',
                // icon: require('./community-h.png')
              }
            ]
          }
      ]
    }
  }
}
</script>

