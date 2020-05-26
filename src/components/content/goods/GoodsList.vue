<template>
  <div>
    <ul>
      <li v-for="(item,index) in goods" :key="index">
        <div @click="detail(item)">
          <img :src="item.show.img" @load="imgLoad">
          <p>{{item.title}}</p>
          <div class="price">
            <span>${{item.price}}</span>
            <img class="pentagonal" src="~assets/img/home/wujiaoxing.png">
            <span>{{item.cfav}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "GoodsList",
    props:{
      goods:{
        type:Array,
        default() {
          return [];
        }
      }
    },
    methods:{
      imgLoad(){
        this.$bus.$emit('imgLoadCom')
      },
      detail(item){
        this.$router.push('/detail/'+item.iid)
      }
    }
  }
</script>

<style scoped>
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  ul li{
    position: relative;
    width: 48%;
    height: 320px;
    font-size: 15px;
  }
  ul li p{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  ul li>div>img:first-child{
    width: 100%;
    border-radius: 5px;
  }
  .pentagonal{
    width: 14px;
    height: 14px;
  }
  .price{
    position: absolute;
    top:92%;
    left:28%
  }
  .price span:first-child{
    color:salmon;
    margin-right: 3px;
  }
</style>
