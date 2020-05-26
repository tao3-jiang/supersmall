<template>
  <NarBar>
    <img src="~assets/img/detail/left.png" slot="nar-left" @click="backRoute"/>
    <div class="content" slot="nar-center">
      <p v-for="(item,index) in title"
         :key="index"
         :class="{isActive : currentIndex === index}"
        @click="btnChangeColor(index)">
        {{item}}
      </p>
    </div>
  </NarBar>
</template>

<script>
  import NarBar from 'components/common/narbar/NarBar';
  export default {
    name: "DetailNarBar",
    components:{
      NarBar
    },
    data(){
      return{
        title:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    methods:{
      backRoute(){
        this.$router.back()
      },
      btnChangeColor(index){
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
  img{
    width: 30px;
    height: 30px;
    vertical-align: middle;
    margin: 0 15px;
  }
  .content{
    display: flex;
    justify-content: space-around;
  }
  .isActive{
    color:salmon;
  }
</style>
