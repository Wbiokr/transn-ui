<template lang="jade">
transition(name='fade')  
  .com-loading(v-if='isLoading')
    img(v-bind:src='')
</template>
<script>
import Img1 from './loading1.gif';
import Img2 from './loading2.gif';
// import Img1 from './loading1.gif';

export default {
  data(){
    return {
      isLoading:false,
      type:1,
      zz:0,
    }
  }
}
</script>
<style lang="stylus" scoped>
.fade-enter,.fade-leave-to
  opacity 0
  // opacit
.com-loading
  position fixed
  z-index 200
  top 0
  left 0
  width 100%
  height 100%
  background rgba(#fff,.15)
  display flex
  justify-content center
  align-items center
  img
    height 40px
</style>


