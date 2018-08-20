<template>
  <nav>
    <h3></h3>
    <ul>
      <li v-for='(item,index) in 200' :key='index'>{{item}}</li>
    </ul>
  </nav>
</template>
<style lang="stylus" scoped>
nav
  border-right 1px solid #ddd
  height 100%
  overflow auto
</style>

