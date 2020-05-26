<template>
  <div class="wrapper" ref="wrapperRef">
    <div class="content" @click="scrollToCom">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props:{
      //是否需要随时监听位置0,1是不会监听位置，3会随时监听位置
      probeType:{
        type:Number,
        default(){
          return 0
        }
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return{
        scroll:null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapperRef,{
        //侦测位置 参数3是随时侦测位置
        probeType:this.probeType,
        //下拉到最低时，可不可以再次调用函数，按照我的理解是这个意思
        pullUpLoad:this.pullUpLoad
      })
      //监听下拉位置
      this.scroll.on('scroll',(position)=>{
        //随时将动态的位置传送给父组件
        this.$emit('backTopShow',position)
      })
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullUpLoadCom')
        // this.scroll.finishPullUp()
      })
    },
    methods:{
      //定义函数，等着别人调用，返回顶部
      scrollToCom(x,y,time){
        //先判断this.scroll是否有值，最好的是都加上
        console.log(y)
        this.scroll && this.scroll.scrollTo(x,y,time);
      },
      finishPullUp(){
        // 如果不加这个方法，下拉到最底下时，只能请求一个，加上这个，只要到最底下，都会再发一次请求
        this.scroll && this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll && this.scroll.refresh()
      },
      //获取离开home页面时的位置
      getSaveY(){
        setTimeout(()=>{
          return this.scroll ? this.scroll.y : 0
        },5000)
      }
    }
  }
</script>

<style scoped>
  .wrapper{
    /*overflow: hidden;*/
  }
</style>
