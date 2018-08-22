<template lang="jade">
  table
    thead
      tr
        td(v-for='(item,index) in titles' v-bind:key='index') {{item}}
    tbody
      tr(v-for='(item,index) in list' v-bind:key='index' )  
        td {{item.name}}
        td(v-if='titles.length>=2') {{item.content}}
        td(v-if='titles.length>=3') {{item.allV||'任意符合类型内容'}}
        td(v-if='titles.length>=4') {{item.defaultV||'默认为空'}}
        td(v-if='titles.length>=5') {{item.type | changeType}}
</template>
<script>
export default {
  props:{
    list:{
      type:[Object,Array],
      default(){
        return [
        ]
      }
    },
    titles:{
      type:[Array],
      default(){
        return [
          '属性','说明','可选值','默认值','类型'
        ]
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
table
  width calc(100% - 40px)
  border-collapse collapse
  border-spacing 0
  empty-cells show
  // border 1px solid #ebedf0
  td
    color #003a8c
    font-size 16px
    line-height 42px
    padding 0 2rem
    border-width 1px 0
    border-color #e8e8e8
    border 1px solid #ebedf0
    border-width 0 0 1px 0
    cursor default
  thead
    td
      border none
      background rgba(#666,.2)
      font-weight 600
  tbody
    tr
      &:hover
        td
          background rgba(#000,.04)
          // line-height 46px
          color #999

    td
      padding-left 2rem  
      &:last-child
        color #c41d7f
        
</style>



