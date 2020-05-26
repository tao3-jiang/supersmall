<template>
  <div class="bar-bar">
    <div class="left"><slot name="nar-left"></slot></div>
    <div class="center"><slot name="nar-center"></slot></div>
    <div class="right"><slot name="nar-right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NarBar"
  }
</script>

<style scoped>
.bar-bar{
  z-index: 100;
  display: flex;
  width: 100%;
  height: 44px;
  line-height: 44px;
  box-shadow: 0 2px 2px -1px #888;
}
  .left,.right{
    width: 60px;
  }
  .center{
    flex:1;
    text-align: center;
  }
</style>
