
import Config from '../components/Config'

const LayNav = res => require.ensure([], () => res(require('../views/layout/Nav.vue')), 'LayNav');
const LayFooter = res => require.ensure([], () => res(require('../views/layout/Footer.vue')), 'LayFooter');

// 弹窗相关
const PopToast = res => require.ensure([], () => res(require('../views/pop/Toast.vue')), 'PopFooter');

// form相关
const Check = res => require.ensure([], () => res(require('../views/form/Check.vue')), 'FormCheck');

// data相关
const DataPage = res => require.ensure([], () => res(require('../views/data/Page.vue')), 'DataPage');


export default [
  {
    name:'Layout',
    path:'/layout',
    component:Config,
    children:[
      {name:'nav',path:'nav',component:LayNav },
      {name:'footer',path:'footer',component:LayFooter },
    ]
  },
  {
    name:'Form',
    path:'/form',
    component:Config,
    children:[
      {name:'check',path:'check',component:Check}
    ]
  },
  {
    name:'Pop',
    path:'/pop',
    component:Config,
    children:[
      {name:'toast',path:'toast',component:PopToast}
    ]
  },
  {
    name:'Data',
    path:'/data',
    component:Config,
    children:[
      {name:'page',path:'page',component:DataPage}
    ]
  }
]