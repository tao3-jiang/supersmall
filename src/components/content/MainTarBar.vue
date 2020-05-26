<template>
  <TarBar>
    <TarBarItem path="/home" activeColor="green">
      <img slot="img" src="~assets/img/tarbar/home.png">
      <img slot="img_active" src="~assets/img/tarbar/home_active.png">
      <p slot="content">首页</p>
    </TarBarItem>
    <TarBarItem path="/category" activeColor="yellow">
      <img slot="img" src="~assets/img/tarbar/property.png">
      <img slot="img_active" src="~assets/img/tarbar/property_active.png">
      <p slot="content">分类</p>
    </TarBarItem>
    <TarBarItem path="/cart">
      <img slot="img" src="~assets/img/tarbar/shopping.png">
      <img slot="img_active" src="~assets/img/tarbar/shopping_active.png">
      <p slot="content">购物车</p>
    </TarBarItem>
    <TarBarItem path="/profile">
      <img slot="img" src="~assets/img/tarbar/my.png">
      <img slot="img_active" src="~assets/img/tarbar/my_active.png">
      <p slot="content">我的</p>
    </TarBarItem>
  </TarBar>
</template>

<script>
  import TarBar from "components/common/tarbbar/TarBar"
  import TarBarItem from "components/common/tarbbar/TarBarItem"
  export default {
    name: "MainTarBar",
    components:{
      TarBar,
      TarBarItem
    }
  }
</script>

<style scoped>

</style>
