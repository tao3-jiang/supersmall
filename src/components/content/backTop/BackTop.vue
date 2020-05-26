<template>
  <div class="top">
    <img src="~assets/img/home/top.png" />
  </div>
</template>

<script>
  export default {
    name: "BackTop"
  }
</script>

<style scoped>
  .top{
    position: fixed;
    bottom:46px;
    right: 8px;
    z-index: 9;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #fff;
  }
  .top img{
    width: 43px;
    height: 43px;
    margin-left: 4px;
  }
  .top:hover{
    cursor: pointer;
  }
</style>
