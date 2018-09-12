<template lang="jade">
transition(name='fade')  
  .com-loading(v-if='isLoading&&hasZz' v-bind:style='{background:bg}')
    img(v-bind:src='img')
  .com-loading-s(v-if='isLoading&&!hasZz')
    img(v-bind:src='img')
  
</template>
<script>
import Img from './loading1.gif';
// import Img2 from './loading2.gif';
// import Img1 from './loading1.gif';

export default {
  data(){
    return {
      isLoading:false,
      img:Img,
      bg:'rgba(#fff,.15)',
      // Img,
      // Img2,
      hasZz:true,
    }
  }
}
</script>
<style lang="stylus" scoped>
*
  transition all ease .3s
.fade-enter,.fade-leave-to
  opacity 0
  // opacit
  img
    // transform scale(0)
    height 0
.com-loading-s
  height 0
  width 0
  img 
    position fixed
    top 50%
    left 50%
    transform translate(-50%,-50%)
    height 40px
.com-loading
  position fixed
  z-index 200
  top 0
  left 0
  width 100%
  height 100%
  
  display flex
  justify-content center
  align-items center
  img
    height 40px
</style>


