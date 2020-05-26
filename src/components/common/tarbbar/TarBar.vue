<template>
  <div class="footer">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TarBar"
  }
</script>

<style scoped>
  .footer{
    position:fixed;
    z-index: 999;
    left: 0;
    right: 0;
    bottom: 0;
    height: 49px;
    width: 100%;
    background-color: #f6f6f6;
    box-shadow: 0 -1px 2px rgba(245,245,245,0.8);
    display:flex;
  }
</style>
