<template>
    <section class="item-page" v-show='total/size>1'>
        <div class="p-ul">
            <a href="javascript:;" class="up" @click='prev' :class='{dis:Number(page)<=1}'></a>
            <a v-for='(item,index) in pages' v-bind:key='index' @click='jump(item)' v-bind:class='{cur:item==page}'>{{item}}</a> 
            <a href="javascript:;" class="next" @click='next' :class='{dis:Number(page)>=Math.round(total/size)}'></a>
        </div>
    </section>
</template>
<script>
export default {
  props:{
    total:{
      default:0, 
      type:[Number,String],  //分页总数
    },
    current:{
      default:1,
      type:[Number,String], //当前页码数
    },
    size:{
      default:10,
      type:[Number,String], //每页项目数
    },
    cb:{
      type:Function, //回调函数
    }
  },
  data(){
    return{
      page:1,
      pages:[1,2,3,4,5,6],
    }
  },
  created(){
    this.page=this.current;
    this.calPages();
  },
  methods:{
    prev(){
      if(this.page<=1) return ;
      this.page--;
      this.calPages();
    },
    next(){
      if(this.page>=Math.round(this.total/this.size)) return ;
      this.page++;
      this.calPages()
    },
    jump(p){
      this.page=p;
      this.calPages()

    },
    calPages(){
      const maxPage=Math.round(this.total/this.size)

      if(maxPage>=1&&maxPage<=6){
        const newpage=[];
        for(let i=0;i<maxPage;i++){
          newpage.push(i+1)
        }
        this.pages=newpage;

      }else{
        if(this.page<=4){
          this.pages=[1,2,3,4,5,6]
        }else if(this.page>maxPage-2){
          this.pages=[maxPage-5,maxPage-4,maxPage-3,maxPage-2,maxPage-1,maxPage]
        }else{
          this.pages=[this.page-3,this.page-2,this.page-1,this.page,this.page+1,this.page+2]
        }
      }

      this.cb&&this.cb(this.page)
    }
  }
}
</script>

<style scoped lang='scss'>
.item-page {
  text-align: center;
  margin:0 auto;
  // padding: 20px ;
  padding:50px 20px;
}
.item-page *{
  transition:none;
}
.item-page a {
  display: inline-block;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.87);
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  margin:0 10px;
  cursor: pointer;
  border-radius: 100%;
  &:hover{
    transition: all ease 0.3s;
  }
  &:hover,&.cur {
    background-image: linear-gradient(-49deg, #FD76A6 0%, #FFDCA2 100%);
    box-shadow: 0 3px 10px 0 rgba(253, 140, 165, 0.71);
    color: rgba(255, 255, 255, 0.87);
  }
  &.up,&.next{
    border-radius: 0;
    border-top:6px solid transparent;
    border-bottom:6px solid transparent;
    &:hover,&.dis{
      background: none;
      box-shadow: none;
      opacity: 0.5;
    }
  }
  &.next{
    border-left:6px solid #000;
    border-right:6px solid transparent;

  }
  &.up{
    border-left:6px solid transparent;
    border-right:6px solid #000;

  }
}
.item-page a.up,
.item-page a.next {
  width: 6px;
  height: 11px;
}
.item-page a.up img,
.item-page a.next img {
  width: 100%;
  height: 100%;
}
.item-page .p-ul {
  display: inline-block;
}
</style>
