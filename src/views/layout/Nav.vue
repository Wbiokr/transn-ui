<template lang='jade'>
  .p-lay-nav
    vDetail
      div(slot='t') nav导航组件
      div(slot='s') 传神项目之间导航功能与UI显示
      div(slot='s-use') 当前项目有头部导航时
      div(slot='s-code') 
        tNav(style='position:relative')
</template>
<script>
import vDetail from '@/Detail.vue'
import tNav from 'transn/dist/Footer/'
export default {
  components:{vDetail,tNav}
}
</script>

