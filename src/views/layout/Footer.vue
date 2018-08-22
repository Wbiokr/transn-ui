<template lang='jade'>
  .p-lay-footer
    vDetail
      div(slot='t') footer组件
      div(slot='s') 传神项目底部友情链接，快捷链接等封装
      div(slot='s-use') 项目中存在底部友情链接
      div(slot='s-code') 
        vWrapper(isFirst=1)
          tFooter(slot='com' type='white')
          div(slot='tem') {{tem}}
          div(slot='scr') {{scr2}}
        vWrapper
          tFooter(slot='com' type='black' v-bind:links='links')
          div(slot='tem') {{tem}}
          div(slot='scr') {{scr}}
      div(slot='s-api') 
        vTabel(v-bind:list='list')
</template>
<script>
import vDetail from '@/Detail.vue'
import tFooter from 'transn/dist/Footer/'
// import tFooter from '../../transn/layout/footer/footer'
import vWrapper from '@/Demo.vue'
import vTabel from '@/Table.vue'
export default {
  components: { vDetail, tFooter, vWrapper, vTabel },
  data() {
    return {
      tem: `
          <template>

            <tFooter type='white' v-bind:links='links' />

          </template>
          `,
      scr2: `
        import tFooter from 'transn/Footer/'
        export default {
          components:{tFooter},
        }
      `,
      scr: `
        import tFooter from 'transn/Footer/'
        export default {
          components:{tFooter},
          data(){
            return {
              links:[
                      {
                        title:'one',
                        children:[
                          {name:'百度',path:'https://www.baidu.com/'},
                          {name:'Google',path:'https://www.google.com/'},
                          {name:'搜狗',path:'https://www.sogou.com/'},
                        ]
                      },
                      {
                        title:'two',
                        children:[
                          {name:'公司介绍',path:'https://www.iol8.com/iol8/about1.html'},
                          {name:'联系我们',path:'https://www.iol8.com/iol8/about4.html'},
                        ]
                      },
                      {
                        title:'haha',
                        children:[
                          {name:'测试1',path:'https://www.wbiokr.com/'}
                        ]
                      }
              ]
            }
          }
        }
          `,
      list: [
        {
          name: 'type',
          content: '类型',
          type: 1,
          allV: ['white', 'black'],
          defaultV: 'white'
        },
        {
          name: 'links',
          content: '快速链接集',
          type: 4,
          allV: '格式数组',
          defaultV: '请查看demo1'
        },
      ],
      links: [
        {
          title: 'one',
          children: [
            {
              name: '百度',
              path: 'https://www.baidu.com/'
            },
            {
              name: 'Google',
              path: 'https://www.google.com/'
            },
            {
              name: '搜狗',
              path: 'https://www.sogou.com/'
            }
          ]
        },
        {
          title: 'two',
          children: [
            {
              name: '公司介绍',
              path: 'https://www.iol8.com/iol8/about1.html'
            },
            {
              name: '联系我们',
              path: 'https://www.iol8.com/iol8/about4.html'
            }
          ]
        },
        {
          title:'haha',
          children:[
            {
              name:'测试1',
              path:'https://www.wbiokr.com/'
            }
          ]
        }
      ]
    }
  }
}
</script>

