<template>
  <div>
    <Swiper class="detail_swiper">
      <swiper-item v-for="item in topImages" :key="item">
        <img :src="item">
      </swiper-item>
    </Swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: "DetailSwiper",
    props:{
      topImages:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
  .detail_swiper img{
    width: 100%;
    height: 300px;
  }
</style>
