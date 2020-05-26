<template>
  <div class="wrapper">
  <ul>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
    <li>111</li>
  </ul>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'

  export default {
    name: "category",
    data(){
      return{
        scroll:null
      }
    },
    mounted() {
      this.scroll = new BScroll(document.querySelector('.wrapper'),{
        probeType:3,
        pullUpLoad:true
      }),
        // this.scroll.on('scroll',(position)=>{
        //   console.log(position);
        // })
      this.scroll.on('pullingUp',()=>{
        console.log('下拉得到更多数据');
        setTimeout(()=>{
          this.scroll.finishPullUp()
        },1000)
      })
    }
  }
</script>

<style scoped>
  .wrapper{
    height: 200px;
    background-color: red;
  }
</style>
