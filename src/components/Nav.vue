<template>
  <nav>
    <!-- <h3>components</h3> -->
    <ul>
      <li v-for='(item,index) in routes' :key='index'>
        <h4>{{item.name}}</h4>
        <section class="unit-box">
          <router-link tag='p'  v-if='item.children.length>0' v-for='(unit,$i) in item.children' :key='$i' :to='item.path+"/"+unit.path'>
            {{unit.name}}
          </router-link>   
        </section>  
      </li>
    </ul>
  </nav>
</template>
<style lang="stylus" scoped>
nav
  border-right 1px solid #ddd
  height 100%
  overflow auto
  font-size 1.2rem
  width 20%
  height 100%
  position fixed
  top 0
  left 0
  overflow auto
  ul
    // height 2000px
    // padding 1rem 0  0 2rem
  h4
    padding-left 2em
    margin 20px 0 10px
  .unit-box p
    padding-left 3em
    cursor pointer
    line-height 2.2rem
    border-right 3px solid transparent
    &:hover
      color #1890ff
    &:active,&.router-link-exact-active
      background #e6f7ff
      color #1890ff
      border-right 3px solid #1890ff
</style>
<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['routes'])
  }
}
</script>


