<template>
  <div class="app am-g am-g-fixed">
  
    <v-header />
    
    <vNav  class=" am-u-sm-0 am-u-md-3 am-u-lg-2 nav"/>
    <main class=" am-u-sm-12 am-u-md-9 am-u-lg-10 content">
      <router-view></router-view>
    </main>    

    <!-- <vFooter /> -->

  </div>
</template>
<script>
import vNav from './components/Nav.vue'
import vHeader from './components/Header.vue'
import vFooter from './components/Footer.vue'


export default {
  components:{vNav,vHeader,vFooter} , 
}
</script>
  
<style lang="stylus">
html 
  height 100%
body
  background #fff
  height 100%
  min-width 1000px
  overflow-x scroll
*
  box-sizing border-box
  transition all ease 0.3s
  font-family ''Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif'
.am-g-fixed
  height 100%
  overflow auto
  padding-top 20px
  padding-left 20%

  >nav,>main
    // height calc(100% - 40px)
    padding-bottom 50px
    // overflow auto
    // &::-webkit-scrollbar
    //   display none

ul,li
  list-style none
</style>
