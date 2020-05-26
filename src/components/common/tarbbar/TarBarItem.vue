<template>
  <div class="tar_bar" @click="subClick">
<!--    <img src="../../assets/tabbar/img/home.png">-->
<!--    <p>首页</p>-->
    <slot v-if="!isActive" name="img"></slot>
    <slot v-else name="img_active"></slot>
<!--    <div :class="{active:isActive}"><slot name="content"></slot></div>-->
    <div :style="isActiveColor"><slot name="content"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TarBarItem",
    props:{
      path:String,
      activeColor:{
        type:String,
        //如果么有传过来值 默认活跃状态时是红色
        default:'red'
      }
    },
    data(){
      return{
        // path:String
        // isActive: true,
      }
    },
    computed:{
      isActive(){
        //活跃状态时的路径是否包含传过来的路径
        return this.$route.path.indexOf(this.path) != -1
      },
      isActiveColor(){
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods:{
      subClick(){
        this.$router.push(this.path);
      }
    }
  }
</script>

<style scoped>
  .tar_bar{
    flex:1;

    text-align: center;
    vertical-align: middle;
    font-size: 14px;
  }
  .tar_bar img{
    width:20px;
    height: 20px;
    margin-top: 3px;
  }
  .active{
    color:red;
  }
</style>
