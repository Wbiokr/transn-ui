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

  $.prototype.$alert=msg=>{
    MyAlert.msg=msg;
  }
}

export default Alert ;