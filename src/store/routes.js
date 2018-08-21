
import Config from '../components/Config'

const LayNav = res => require.ensure([], () => res(require('../views/layout/Nav.vue')), 'LayNav');
const LayFooter = res => require.ensure([], () => res(require('../views/layout/Footer.vue')), 'LayFooter');

// 弹窗相关
const PopToast = res => require.ensure([], () => res(require('../views/pop/Toast.vue')), 'PopFooter');



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
  },
  {
    name:'Pop',
    path:'/pop',
    component:Config,
    children:[
      {name:'toast',path:'toast',component:PopToast}
    ]
  },
]