<template>
  <div id="home">
    <!--    导航栏-->
    <nar-bar class="nar-home">
      <p slot="nar-center">购物街</p>
    </nar-bar>
<!--    吸顶效果-->
    <tab-control class="tab-content"
                 :tanContent="['流行','新款','爆款']"
                 ref="tabControl1"
                 @item_click="tab_control"
                 v-show="isShowTab"
    />
    <!--    滚动 :probeType="3"是否监听位置-->
    <!--    @backTopShow="isShowBackTop" backTopShow是子组件向父组件传值-->
    <Scroll class="content" ref="scrollCom" :probeType="3" :pullUpLoad="true" @backTopShow="isShowBackTop" @pullUpLoadCom="pullUpLoad">
      <!--    轮播图，没有写完，待以后写-->
<!--      <Swiper :banner="banner" @imageLoad="imageLoad"></Swiper>-->
      <!--    热点-->
      <RecommendHome :recommend="recommend"></RecommendHome>
      <!--    本周最新-->
      <FeatureView />
      <tab-control class="tab-content" :tanContent="['流行','新款','爆款']" ref="tabControl2"  @item_click="tab_control"/>
      <!--    显示衣服-->
      <GoodsList :goods="goodsShow"/>
    </Scroll>
    <!--    返回顶部-->
    <BackTop @click.native="backTopClick" v-show="isShow"/>
  </div>
</template>

<script>
  import NarBar from 'components/common/narbar/NarBar';
  import Scroll from "components/common/scroll/Scroll";
  import TabControl from 'components/content/tabControl/TabControl';
  import GoodsList from "components/content/goods/GoodsList";
  import BackTop from "components/content/backTop/BackTop";

  import {getHomeMultidata} from "network/home";
  import {getHomeData} from "network/home";

  // import Swiper from "./childComps/Swiper";
  import RecommendHome from "./childComps/RecommendHome";
  import FeatureView from "./childComps/FeatureView";
  export default {
    name: "home",
    data(){
      return{
        banner:[],
        recommend:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        type:'pop',
        isShow:false,
        offsetTop:0,
        isShowTab:false,
        //保存离开时的位置
        saveY:0
      }
    },
    components:{
      NarBar,
      Scroll,
      TabControl,
      GoodsList,
      BackTop,
      // Swiper,
      RecommendHome,
      FeatureView
    },
    created() {
      this.getHomeMultidata();
      this.getHomeData('pop');
      this.getHomeData('new');
      this.getHomeData('sell');

    },
    activated() {
      this.$refs.scrollCom.scrollToCom(0,this.saveY,0)
      this.$refs.scrollCom.refresh()
    },
    deactivated() {
      console.log('deactivated');
      //获取
      this.saveY = this.$refs.scrollCom.scroll.getSaveY()
    },
    computed:{
      goodsShow(){
        return this.goods[this.type].list
      }
    },
    mounted(){
      this.$bus.$on('imgLoadCom', () => {
        this.$refs.scrollCom.refresh()
      })
    },
    methods:{
      //防抖函数
      //func 一个函数，delay等多久
      debounce(func,delay){
        let timer = null
        return function(...args){
          if(timer)clearTimeout(timer)
          timer =setTimeout(()=>{
            func.apply(this,args)
          },delay)
        }
      },

      backTopClick(){
        //获取组件
        //先获取组件（this.$refs.scrollCom）在获取组件中的属性（scroll）之后再通过一个方法scrollTo定位到顶部，第三个参数是返回需要用的时间
        // this.$refs.scrollCom.scroll.scrollTo(0,0,500);
        //上面的有点啰嗦。可以在scroll中定义一个方法
        this.$refs.scrollCom && this.$refs.scrollCom.scrollToCom(0,0,500);
      },
      /**
       * 网络请求相关方法
       * */
      getHomeData(type){
        const page = this.goods[type].page + 1;
        getHomeData(type,page).then(res=>{
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page += 1
          //这个（finishPullUp）方法是下拉到最底下时，可以多次发送请求
          this.$refs.scrollCom && this.$refs.scrollCom.finishPullUp();
        })
      },
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          console.log(res);
          this.banner = res.data.data.banner.list;
          console.log(this.banner);
          this.recommend = res.data.data.recommend.list;
        })
      },
      //加载完轮播图时获取offsetTop
      imageLoad(){
        //获取tabControll的offsettop
        //所有的组价都有一个属性:$el
        this.offsetTop = this.$refs.tabControl2.$el.offsetTop
      },
      /**
       * 事件监听相关方法
       * */
      tab_control(index){
        console.log(index);
        // if(item == '流行'){
        //   this.type = 'pop'
        // }else if(item == '新款'){
        //   this.type = 'new';
        // }else{
        //   this.type = 'sell';
        // }
        // switch (item) {
        //   case '流行':
        //     this.type = 'pop'
        //     break
        //   case '新款':
        //     this.type = 'new'
        //     break
        //   case '爆款':
        //     this.type = 'sell'
        //     break
        // }
        switch (index) {
          case 0:
            this.type = 'pop'
            break
          case 1:
            this.type = 'new'
            break
          case 2:
            this.type = 'sell'
            break
        }
        this.$refs.tabControl1.indexCheck = index
        this.$refs.tabControl2.indexCheck = index
      },
      //根据监听位置，决定是否显示返回顶部图标
      isShowBackTop(position){
        this.isShow = (-position.y) > 1000
        this.isShowTab = (-position.y)>548
      },
      pullUpLoad(){
        console.log('下拉到很多');
        this.goods[this.type].pop = this.goods[this.type].pop + 1;
        this.getHomeData(this.type);
      }
    }
  }
</script>

<style scoped>
  #home{
    height: 100vh;
    position:relative;
  }
  .nar-home{
    position: fixed;
    top:0;
    color: white;
    background-color: sandybrown;
  }

  .tab-content{
    position: sticky;
    top:44px;
    border-top: 44px;
  }
  .content{
    position: absolute;
    top:45px;
    bottom:49px;
    left: 0;
    right: 0;
  }
</style>
