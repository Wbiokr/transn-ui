<template>
    <section class="item-page" v-show='total/size>1'>
        <div class="p-ul">
            <a href="javascript:;" class="up" @click='prev' :class='{dis:Number(current)<=1}'>
              <span></span>
            </a>
            <a v-for='(item,index) in pages' v-bind:key='index' @click='jump(item)' v-bind:class='{cur:item==current}'>{{item}}</a> 
            <a href="javascript:;" class="next" @click='next' :class='{dis:Number(current)>=Math.ceil(total/size)}'>
              <span></span>
            </a>
            <span>跳至</span>
            <input type="text" oninput='value=value.replace(/[^\d]/g,"")'  style="cursor:auto;" @keyup.enter='jump(Number($event.target.value))'  />
            <span>页</span>
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
      default:5,
      type:[Number,String], //每页项目数
    },
    cb:{
      type:Function, //回调函数
    }
  },
  data(){
    return{
      // page:1,
      pages:[1,2,3,4,5,6],
    }
  },
  watch:{
    total(){
      this.updatePages()
    }
  },
  mounted(){
    this.updatePages()
    // this.page=this.current;
    // this.calPages(this.current);
  },
  methods:{
    prev(){
      if(this.current<=1) return ;
      // this.page--;
      this.calPages(this.current-1);
    },
    next(){
      if(this.current>=Math.ceil(this.total/this.size)) return ;
      // this.page++;
      this.calPages(this.current+1)
    },
    jump(p){
      // this.page=p;
      if(p<1) return ;
      if(p>Math.ceil(this.total/this.size)) return ;

      this.calPages(p)

    },
    updatePages(){
      const maxPage=Math.ceil(this.total/this.size)

      if(maxPage>=1&&maxPage<=6){
        const newpage=[];
        for(let i=0;i<maxPage;i++){
          newpage.push(i+1)
        }
        this.pages=newpage;

      }else{
        if(this.current<=4){
          this.pages=[1,2,3,4,5,6]
        }else if(this.current>maxPage-2){
          this.pages=[maxPage-5,maxPage-4,maxPage-3,maxPage-2,maxPage-1,maxPage]
        }else{
          this.pages=[this.current-3,this.current-2,this.current-1,this.current,this.current+1,this.current+2]
        }
      }
    },
    calPages(p){
      const maxPage=Math.ceil(this.total/this.size)

      if(maxPage>=1&&maxPage<=6){
        const newpage=[];
        for(let i=0;i<maxPage;i++){
          newpage.push(i+1)
        }
        this.pages=newpage;

      }else{
        if(p<=4){
          this.pages=[1,2,3,4,5,6]
        }else if(p>maxPage-2){
          this.pages=[maxPage-5,maxPage-4,maxPage-3,maxPage-2,maxPage-1,maxPage]
        }else{
          this.pages=[p-3,p-2,p-1,p,p+1,p+2]
        }
      }

      this.cb&&this.cb(p)
    }
  }
}
</script>

<style scoped lang='scss'>
.item-page {
  text-align: right;
  margin:0 auto;
  // padding: 20px ;
  padding-top: 20px;
}
.item-page *{
  transition:none;
}
.item-page a ,.item-page input{
  display: inline-block;
  font-size: .7px;
  color: rgba(0, 0, 0, 0.87);
  float: left;
  width: 1.6rem;
  height: 1.6rem;
  line-height: 1.6rem;
  text-align: center;
  margin:0 .3rem;
  border:1px solid #D8D8D8;
  border-radius:4px;
  cursor: pointer;
  &.up span{
    transform: rotate(135deg);
    // trans
  }
  &.next span{
    transform: rotate(-45deg);
  }
  &.dis{
    cursor:not-allowed;
    color: #ccc;
    border-color:#ccc;
    span{
       
    }
  }
  span{
    display: inline-block;
    height: .5rem;
    width: .5rem;
    border:1px solid #999;
    border-left:none;
    border-top:none;
  }
  // border-radius: 100%;
  &:hover{
    transition: all ease 0.3s;

  }
  &:hover,&.cur {
    // background-image: linear-gradient(-49deg, #FD76A6 0%, #FFDCA2 100%);
    // box-shadow: 0 3px 10px 0 rgba(253, 140, 165, 0.71);
    color: #9C92FF ;
    border-color:#9C92FF ;
    span{
      border-color:#9C92FF;
    }
  }
  
}
.item-page input{
  width:2.5rem;
}
.item-page .p-ul >span{
  float: left;
  height: 1.6rem;
  line-height:1.6rem;
  padding: 0 .5rem;
}
.item-page .p-ul {
  display: inline-block;
}
</style>
