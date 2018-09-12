
import Config from '../components/Config'

const LayNav = res => require.ensure([], () => res(require('../views/layout/Nav.vue')), 'LayNav');
const LayFooter = res => require.ensure([], () => res(require('../views/layout/Footer.vue')), 'LayFooter');

// 弹窗相关
const PopToast = res => require.ensure([], () => res(require('../views/pop/Toast.vue')), 'PopToast');
const PopLoading = res => require.ensure([], () => res(require('../views/pop/Loading.vue')), 'PopLoading');
const PopAlert = res => require.ensure([], () => res(require('../views/pop/Alert.vue')), 'PopAlert');

// form相关
const Check = res => require.ensure([], () => res(require('../views/form/Check.vue')), 'FormCheck');
const Verify = res => require.ensure([], () => res(require('../views/form/Verify.vue')), 'FormVerify');

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
      {name:'check',path:'check',component:Check},
      {name:'verify',path:'verify',component:Verify},
    ]
  },
  {
    name:'Pop',
    path:'/pop',
    component:Config,
    children:[
      {name:'toast',path:'toast',component:PopToast},
      {name:'alert',path:'alert',component:PopAlert},
      {name:'loading',path:'loading',component:PopLoading},
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