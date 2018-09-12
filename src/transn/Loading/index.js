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
      img=require('./loading1.gif'),
      bg='rgba(#fff,.15)',
    })=>{
      Loading.lock=false;
      MyLoading.isLoading=action;
      MyLoading.img=img;
      MyLoading.bg=bg;
      MyLoading.hasZz=true;

      // console.log(MyLoading)

      // !!bg&&(MyLoading.bg=bg);
      // !!img&&(MyLoading.img=img);
      bg===false&&(MyLoading.hasZz=false)
    }
  }
}

export default Loading ;