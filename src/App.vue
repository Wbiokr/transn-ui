<template>
  <div class="app am-g am-g-fixed">
  
    <v-header />
    
    <vNav  class=" am-u-sm-0 am-u-md-3 am-u-lg-2 nav"/>
    <main class=" am-u-sm-12 am-u-md-9 am-u-lg-10 content">
      <router-view ></router-view>
      <div v-for='(item,index) in 2000' :key='index'> {{index}}-{{item}}</div>
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
*
  box-sizing border-box
.am-g-fixed
  max-width 1400px !important
  height 100%
  overflow auto
  padding-top 20px
  // >*
  //   height
  >nav,>main
    // position fixed
    // left 0
    // top 20px
    height calc(100% - 40px)
    overflow auto
    &::-webkit-scrollbar
      display none
    // width
  // >main
  //   height 100%
  
</style>
