<template>
  <div class="img">
    <div v-for="items in recommend" :key="items.sort" class="recommend">
      <a :href="items.link" >
        <img :src="items.image">
        <p>{{items.title}}</p>
      </a>

    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendHome",
    props:{
      recommend:{
        type:Array
      }
    }
  }
</script>

<style scoped>
  .img{
    display: flex;
    text-align: center;
    padding:10px 0 20px;
    border-bottom: 10px solid #eee;

    /*align-items: center;*/
  }

  .recommend{
    flex: 1;
  }
  .img img{
    width: 70px;
    height: 70px;
  }
</style>
