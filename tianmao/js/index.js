let timer;
const app=new Vue({
  el:"#app",
  data:{
    imgSrc: ["https://how2j.cn/tmall/img/lunbo/1.jpg", "https://how2j.cn/tmall/img/lunbo/2.jpg",
      "https://how2j.cn/tmall/img/lunbo/3.jpg","https://how2j.cn/tmall/img/lunbo/4.jpg"],
    imgIndex:0,
  },
  methods: {
    isActive(index){
      if(index==this.imgIndex)
          return true;
          return false;
    },
    add(index){
      this.imgIndex=index;

    },
    show(){
      
      this.$refs.leftList.style.display="block";
     
    },
    isShow(){
      this.$refs.leftList.style.display="none";
   
    },
    showImg(){
      this.$refs.spanImg.style.display ="inline-block";
    },
    isShowImg(){
      this.$refs.spanImg.style.display="none";
    }
  },  
  mounted() {

    timer=setInterval(() => {
        if(this.imgIndex>=3){
          this.imgIndex=0;
        }
        else{
          this.imgIndex++;
        }
    }, 3000);
  },
})