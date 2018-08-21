<template lang="jade">
  table
    thead
      tr
        td(v-for='(item,index) in titles' v-bind:key='index') {{item}}
    tbody
      tr(v-for='(item,index) in list' v-bind:key='index' )  
        td {{item.name}}
        td {{item.content}}
        td {{item.type | changeType}}
        td {{item.allV||'任意符合类型内容'}}
        td {{item.defaultV||'默认为空'}}
</template>
<script>
export default {
  props:{
    list:{
      type:[Object,Array],
      default(){
        return [
          {name:'color',content:'颜色',type:1,allV:['red','pink'],defaultV:'red'},
          {name:'color1',content:'颜色',type:1,allV:['red','pink'],defaultV:'red'},
          {name:'color2',content:'颜色',type:1,allV:['red','pink'],defaultV:'red'},
          {name:'color3',content:'颜色',type:1,allV:['red','pink'],defaultV:'red'},
        ]
      }
    },
    titles:{
      type:[Array],
      default(){
        return [
          '属性','说明','类型','可选值','默认值'
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



