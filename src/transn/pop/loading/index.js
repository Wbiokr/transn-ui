import Tem from './tem.vue'

const Loading = {
  lock:false,
  install($){
    if(Loading.lock) return ;
    Loading.lock=true;

    const LoadingConstructor = $.extend(Tem);

    const MyLoading=new LoadingConstructor();

    MyLoading.$mount(document.createElement('div'));

    document.body.appendChild(MyLoading.$el);

    $.prototype.$loading=({
      action=true,
      type=1,
      zz=0,
    })=>{
      Loading.lock=false;
      MyLoading.isLoading=action;
      
    }
  }
}

export default Loading ;