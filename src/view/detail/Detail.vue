<template>
  <div>
    <DetailNarBar/>
    <DetailSwiper :top-images="topImages"></DetailSwiper>
  </div>
</template>

<script>
  import DetailNarBar from './childDetail/DetailNarBar';
  import DetailSwiper from "./childDetail/DetailSwiper";

  import {getDetailData} from 'network/detail'

    export default {
      name: "Detail",
      components:{
        DetailNarBar,
        DetailSwiper
      },
      data(){
        return{
          iid:null,
          // detailData:null,
          topImages:[]
        }
      },
      created() {
        this.iid = this.$route.params.iid
        console.log(this.iid);
        getDetailData(this.iid).then(res=>{
          console.log(res);
          this.topImages = res.data.result.itemInfo.topImages
        })
      }
    }
</script>

<style scoped>

</style>
