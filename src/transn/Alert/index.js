import Tem from './alert.vue'

const Alert={};

Alert.lock=false;

Alert.install=$=>{
  if(Alert.lock) return ;
  Alert.lock=true;

  const AlertConstrutor=$.extend(Tem);

  const MyAlert=new AlertConstrutor();

  MyAlert.$mount(document.createElement('div'));

  document.body.appendChild(MyAlert.$el);

  $.prototype.$alert=(opts)=>{
    MyAlert.radius=0; //圆角
    MyAlert.bg_zz='rgba(0,0,0,.7)'; //遮罩背景色
    MyAlert.bg_btn='rgba(24,144,255,0.8)';//按钮背景色
    MyAlert.bg_ct='#fff';//内容背景色
    MyAlert.color_btn='#fff';//按钮色
    MyAlert.color_txt='#ED462F';//文本色
    if(typeof opts==='string'){
      MyAlert.msg=opts
    }else{
      // const {radius,bg_zz,bg_btn,color_btn,color_txt}=opts;
      // MyAlert
      for(let i in opts){
        MyAlert[i]=opts[i];
      }
    }
  }
}

export default Alert ;