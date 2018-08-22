<template lang='jade'>
  .p-lay-footer
    vDetail
      div(slot='t') nav组件
      div(slot='s') 传神项目头部导航，流式/浮式布局
      div(slot='s-use') 项目中用到导航栏，流式/浮式布局皆可
      div(slot='s-code') 
        vWrapper(isFirst=1)
          tNav(slot='com')
          div(slot='tem') {{tem}}
          div(slot='scr') {{scr2}}
        vWrapper
          tNav(slot='com' home='/home' stream='fixed' v-bind:route='$route.path' v-bind:navs='navs')
          div(slot='tem') {{tem2}}
          div(slot='scr') {{scr}}
      div(slot='s-api') 
        vTabel(v-bind:list='list')
</template>
<script>
import vDetail from '@/Detail.vue'
// import tNav from 'transn/dist/Footer/'
import tNav from '../../transn/layout/nav/nav.vue'
import vWrapper from '@/Demo.vue'
import vTabel from '@/Table.vue'
export default {
  components: { vDetail, tNav, vWrapper, vTabel },
  data() {
    return {
      tem: `
          <template>

            <tNav />

          </template>
          `,
      scr2: `
        import tNav from 'transn/Footer/'
        export default {
          components:{tNav},
        }
      `,
      tem2: `
          <template>

            <tNav 
              home='/home'
              v-bind:route='$route.path'
              stream='fixed'
              v-bind:navs='navs'
            />

          </template>
          `,
      scr: `
        import tNav from 'transn/Footer/'
        export default {
          components:{tNav},
          data(){
            return {
              navs: [
                    { name: '首页', path: '/' },
                    {
                      name: '定制化产品',
                      path: '',
                      children: [
                        { name: '定制1', path: '/dz/1' },
                        { name: '定制2', path: '/dz/2' },
                        {
                          name: '定制类',
                          path: '',
                          children: [
                            { name: '类1', path: '/type/1' },
                            { name: '类2', path: '/type/2' }
                          ]
                        }
                      ]
                    },
                    {
                      name: '个性化',
                      path: '',
                      children: [
                        { name: '共享1', path: '/gx/1' },
                        { name: '共享2', path: '/gx/2' }
                      ]
                    }
                  ]
            }
          }
        }
          `,
      list: [
        {
          name: 'home',
          content: 'logo点击跳转链接',
          type: 1,
          allV: '',
          defaultV: '/'
        },
        {
          name: 'route',
          content: '当前路由，为bind变量值',
          type: 1,
          allV: '跟随路由变量值传入',
          defaultV: '/'
        },
        {
          name: 'stream',
          content: 'position值',
          type: 4,
          allV: ['fixed', 'relative', 'absolute'],
          defaultV: 'relative'
        },
        {
          name: 'navs',
          content: '导航链接组',
          type: 4,
          allV: '',
          defaultV: []
        }
      ],

      scr: `
            import tNav from 'transn/Footer/'
            export default {
              components:{tNav},
              data(){
                return {
                  navs: [
                    { name: '首页', path: '/' },
                    {
                      name: '定制化产品',
                      path: '',
                      children: [
                        { name: '定制1', path: '/dz/1' },
                        { name: '定制2', path: '/dz/2' },
                        {
                          name: '定制类',
                          path: '',
                          children: [
                            { name: '类1', path: '/type/1' },
                            { name: '类2', path: '/type/2' }
                          ]
                        }
                      ]
                    },
                    {
                      name: '个性化',
                      path: '',
                      children: [
                        { name: '共享1', path: '/gx/1' },
                        { name: '共享2', path: '/gx/2' }
                      ]
                    }
                  ]
                }
              }
            }
              `,
      navs: [
        { name: '首页', path: '/' },
        {
          name: '定制化产品',
          path: '',
          children: [
            { name: '定制1', path: '/dz/1' },
            { name: '定制2', path: '/dz/2' },
            {
              name: '定制类',
              path: '',
              children: [
                { name: '类1', path: '/type/1' },
                { name: '类2', path: '/type/2' }
              ]
            }
          ]
        },
        {
          name: '个性化',
          path: '',
          children: [
            { name: '共享1', path: '/gx/1' },
            { name: '共享2', path: '/gx/2' }
          ]
        }
      ]
    }
  }
}
</script>

