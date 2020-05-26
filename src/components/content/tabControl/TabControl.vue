<template>
  <div class="tabControl">
    <div class="content"
         v-for="(item,index) in tanContent"
         :key="index"
         :class="{active:index === indexCheck}"
         @click="itemChange(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      tanContent:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        indexCheck:0
      }
    },
    methods:{
      itemChange(index){
        this.indexCheck = index;
        this.$emit('item_click',this.indexCheck)
      }
    }
  }
</script>

<style scoped>
  .tabControl{
    z-index: 9;
    display: flex;
    height: 44px;
    font-size: 15px;
    line-height: 44px;
    text-align: center;
    background-color: #fff;
  }
  .content{
    flex: 1;
  }
  .active span{
    color:salmon;
    padding-bottom: 3px;
    border-bottom: 3px solid salmon;
  }
</style>
