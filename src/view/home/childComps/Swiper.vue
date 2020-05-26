<template>
  <Swiper class="detail_swiper">
<!--    <swiper-item v-for="item in topImages" :key="item">-->
<!--      <img :src="item">-->
<!--    </swiper-item>-->
  </Swiper>
</template>

<script>
  import Swiper from 'components/common/swiper/Swiper'
  // import SwiperItem from 'components/common/swiper/SwiperItem'
  export default {
    name: "Swiper",
    components:{
      Swiper,
      // SwiperItem
    },
    props:{
      banner:{
        type:Array
      }
    },
    data(){
      return{
        isImgLoad:false
      }
    },
    methods:{
      imageLoad(){
        if(!this.isImgLoad){
          this.$emit('imageLoad')
          this.isImgLoad=true
        }
      }
    }
  }
</script>

<style scoped>
  .swiper{
    height: 100px;
    width: 100%;
  }
</style>
