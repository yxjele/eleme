<template>
  <div class="list">
    <div class="header">
      <div class="header-food">
        <mt-header title="商超便利">
          <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>
      </div>
      <div class="header-screen">
        <a href="javascript:" class="screen-nav" @click="display=!display">
          <span>综合排序</span>
          <span class="screen-last"></span>
        </a>
        <a href="javascript:" class="screen-nav">距离最近</a>
        <a href="javascript:" class="screen-nav">
          <i class="Member iconfont">&#xe692;</i>
          <span>会员领红包</span>
        </a>
        <a href="javascript:" class="screen-nav-more" @click="display1=!display1">
          <span>筛选</span>
          <i class="screen iconfont">&#xe67f;</i>
        </a>
      </div>
      <section class="zuo" v-if="display" @click="show()">
        <ul class="ranking">
          <li>
            <span>综合排名</span>
            <img class="ranking-img" src="../../assets/dui.png">
          </li>
          <li>
            <span>销量最高</span>
            <img class="ranking-img" src="../../assets/dui.png">
          </li>
          <li>
            <span>起送价最低</span>
            <img class="ranking-img" src="../../assets/dui.png">
          </li>
          <li>
            <span>配送最快</span>
            <img class="ranking-img" src="../../assets/dui.png">
          </li>
        </ul>
      </section>
      <section class="zuo1" v-if="display1" @click="hidden()">
        <div class="funnel">
          <div class="morefilter">
            <dl>
              <dt>配送方式</dt>
              <dd>
                <div class="funnel-dd">
                  <img src="">
                  <span>蜂鸟专送</span>
                </div>
              </dd>
            </dl>
            <dl>
              <dt>优惠活动</dt>
              <dd>
                <div class="morefilter-dd" v-for="ems in list1">
                  <span class="morefilter-span">
                    {{ems.icon_name}}
                  </span>
                  <span>
                    {{ems.name}}
                  </span>
                </div>
              </dd>
            </dl>
            <dl>
              <dt>人均消费</dt>
              <dd>
                <div class="shopping" v-for="ats in list2">
                  <span class="shopping-span">
                    {{ats.description}}
                  </span>
                </div>
              </dd>
            </dl>
            <dl>
              <dt>商家属性（可多选）</dt>
              <dd>
                <div class="market" v-for="dd in list3">
                  <span class="market-span">
                    {{dd.icon_name}}
                  </span>
                  <span>
                    {{dd.name}}
                  </span>
                </div>
              </dd>
            </dl>
          </div>
          <div class="btn">
            <sapn class="btn-clear">清空</sapn>
            <span class="btn-q">确定</span>
          </div>
        </div>
      </section>
    </div>
    <div class="from">
      <ul>
        <li class="from-li" v-for="item in list">
          <router-link :to="{name:'Details', params:{fid: item.restaurant.id}}" class="router-link-active">
            <div class="from-left">         
              <img class="from-img" :src="'https://fuss10.elemecdn.com/'+item.restaurant.image_path+'.'+item.restaurant.image_path.split('').slice(32,).join('')+'?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/'">
            </div>
            <div class="from-right">
              <div class="introduce">
                <span>{{item.restaurant.name}}</span>
                <div class="right-star">
                  <span>*****</span>
                  <span>{{item.restaurant.rating}}</span>
                  <span>
                    月售{{item.restaurant.recent_order_num}}单
                  </span>
                  <span class="from-Hummingbird">蜂鸟专送</span>
                </div>
                <div class="right-price">
                  <span>
                    ￥{{item.restaurant.float_minimum_order_amount}}起送
                  </span>
                  <span>|</span>
                  <span>
                    配送费￥{{item.restaurant.float_delivery_fee}}
                  </span>
                  <div class="distance">
                    <span>1.36km</span>
                    <span>|</span>
                    <span>24分钟</span>
                  </div>
                </div>
                <div class="evaluate">
                  <img class="evaluate-img" :src="'https://fuss10.elemecdn.com/'+item.restaurant.recommend.image_hash+'.png?imageMogr/format/webp/thumbnail/!60x60r/gravity/Center/crop/60x60/'">
                  <span class="evaluate-span">
                    {{item.restaurant.recommend.reason}}
                  </span>
                </div>
              </div>
              <div class="Discount">
                <div class="reduce">
                  <span class="reduce-first">
                    {{item.restaurant.activities[0].icon_name}}
                  </span>
                  <span>
                    {{item.restaurant.activities[0].tips}}
                  </span>
                  <span class="reduce-last">10个活动</span>
                </div>
                <div class="gift">
                  <!-- <span class="gift-reduce">
                    {{item.restaurant.activities[1].icon_name}}
                  </span>
                  <span class="full">
                    {{item.restaurant.activities[1].tips}}
                  </span> -->
                </div>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="top">
      <i class="back iconfont">&#xe61d;</i>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'list',
  data () {
    return {
      list: [],
      list1: [],
      list2: [],
      list3: [],
      display: false,
      display1: false
    }
  },
  mounted () {
    var id = this.$route.params.id;
    axios.get('/restapi/shopping/v3/restaurants?latitude=39.90469&longitude=116.407173&keyword=&offset=0&limit=8&extras[]=activities&extras[]=tags&terminal=h5&brand_ids[]=&restaurant_category_ids[]=253&restaurant_category_ids[]=254&restaurant_category_ids[]=255&restaurant_category_ids[]=256&restaurant_category_ids[]=257&restaurant_category_ids[]=258&restaurant_category_ids[]=271&restaurant_category_ids[]=272&restaurant_category_ids[]=273&restaurant_category_ids[]=274&restaurant_category_ids[]=282&restaurant_category_ids[]=290&restaurant_category_ids[]=298')
    .then((res) => {
      console.log(res);
      this.list = res.data.items;
    }),
    axios.get('/restapi/shopping/v1/restaurants/filter-bar/attributes?latitude=39.90469&longitude=116.407173&terminal=h5')
    .then((res) => {
      console.log(res);
      this.list1 = res.data.activity_types;
      this.list2 = res.data.average_costs;
      this.list3 = res.data.supports;
    })
  },
  // methods: {
  //   loadMore() {
  //     this.loading = true;
  //     setTimeout(() => {
  //       this.getData();
  //       this.loading = false;
  //     }, 2500);
  //   },
  //   getData(){
  //     axios.get("/restapi/shopping/v3/restaurants?latitude=39.90469&longitude=116.407173&keyword=&offset=${this.offset+8}&limit=8&extras[]=activities&extras[]=tags&terminal=h5&brand_ids[]=&restaurant_category_ids[]=253&restaurant_category_ids[]=254&restaurant_category_ids[]=255&restaurant_category_ids[]=256&restaurant_category_ids[]=257&restaurant_category_ids[]=258&restaurant_category_ids[]=271&restaurant_category_ids[]=272&restaurant_category_ids[]=273&restaurant_category_ids[]=274&restaurant_category_ids[]=282&restaurant_category_ids[]=290&restaurant_category_ids[]=298")
  //     .then((res)=>{
  //       this.offset++;
  //       this.list = this.list.concat(res.data.items);
  //       this.loading = false;
  //     })
  //   }
  // } 
  methods: {
    show: function() {
      this.display = false;
      }
    },
    hidden: function() {
      this.display1 = false;
    }
}
</script>

<style scoped>
  .header{
    position: fixed;
    width: 100%;
    height: 0.62rem;
    background: #009fff;
    z-index: 100;
  }
  .header-screen{
    display: flex;
    position: relative;
    height: 0.3rem;
    border-bottom: 1px solid #ddd;
    line-height: 0.3rem;
    z-index: 100;
    background: #fff;
  }
  .screen-last{
    position: absolute;
    content: '\0020';
    right: .16rem;
    top: .14rem;
    width: 0;
    height: 0;
    border-left: .04rem solid transparent;
    border-right: .04rem solid transparent;
    border-top: .04rem solid #666;
  }
  .zuo{
    width: 100%;
    height: 8rem;
    position: absolute;
    top: .7rem;
    left: 0;
    transition-duration: 0.5s;
    background: rgba(0,0,0,.7);
  }
  .zuo1{
    width: 100%;
    height: 8rem;
    position: absolute;
    top: .7rem;
    left: 0;
    transition-duration: 0.5s;
    background: rgba(0,0,0,.7);
  }
  .ranking{
    width: 100%;
    padding-top: .06rem;
    padding-bottom: .06rem;
    font-size: .11rem;
    visibility: visible;
    max-height: 1500%;
    overflow: hidden;
    line-height: .35rem;
    background: #fff;
  }
  .ranking li{
    margin-left: .1rem;
  }
  .ranking-img{
    float: right;
    width: .2rem;
    height: .2rem;
    margin-top: .08rem;
    display: none;
  }
  .funnel{
    max-height: 1500%;
    position: absolute;
    left: 0;
    right: 0;
    border-top: 1px solid #ddd;
    background: #fff;
    z-index: 3;
    overflow: auto;
  }
  .morefilter{
    overflow: auto;
    height: 100%;
    background: #fafafa;
    line-height: normal;
  }
  .morefilter dl{
    margin: .1rem 0;
    overflow: hidden;
    font-size: .12rem;
  }
  .morefilter dl dt{
    margin-bottom: .1rem;
    padding: 0 .2rem;
  }
  .morefilter dl dd{
    display: flex;
    background: #fff;
    flex-wrap: wrap;
    position: relative;
  }
  .funnel-dd{
    display: flex;
    align-items: center;
    flex: 0 0 27.5%;
    border-right: 1px solid #eee;
    height: .35rem;
    font-size: .1rem;
    padding-left: .2rem;
  }
  .funnel-dd span{
    margin-left: .28rem;
  }
  .morefilter-dd{
    display: flex;
    align-items: center;
    flex: 0 0 27.5%;
    border-right: 1px solid #eee;
    height: .35rem;
    font-size: .1rem;
    padding-left: .2rem;
    border-bottom: 1px solid #eee;
  }
  .morefilter-dd:nth-child(3n){
    border-right: none;
  }
  .morefilter-span{
    width: .15rem;
    height: .15rem;
    line-height: .15rem;
    text-align: center;
    border-radius: 2px;
    background: #70bc46;
    color: #fff;
    margin-right: .06rem;
  }
  .shopping{
    display: flex;
    align-items: center;
    flex: 0 0 27.5%;
    border-right: 1px solid #eee;
    height: .35rem;
    font-size: .1rem;
    padding-left: .2rem;
  }
  .shopping:nth-child(3n){
    border-right: none;
  }
  .market{
    display: flex;
    align-items: center;
    flex: 0 0 27.5%;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    height: .35rem;
    font-size: .1rem;
    padding-left: .2rem;
  }
  .market:nth-child(3n){
    border-right: none;
  }
  .market-span{
    width: .15rem;
    height: .15rem;
    text-align: center;
    line-height: .15rem;
    border: 1px solid #3FBDE6;
    border-radius: 2px;
    color: #3FBDE6;
    margin-right: .06rem;
  }
  .btn{
    display: flex;
    height: .46rem;
    align-items: center;
    justify-content: space-around;
    background-color: #fafafa;
    border-top: 1px solid #eee;
    line-height: .46rem;
    text-align: center;
    font-size: .14rem;
  }
  .btn-clear{
    flex: 50%;
    background: #fff;
    color: #ddd;
  }
  .btn-q{
    flex: 50%;
    background: #00d762;
    color: #fff;
    border: 1px solid #00d762;
  }
  .screen-nav{
    flex: 1;
    text-align: center;
    color: #666;
    position: relative;
    font-size: 0.11rem;
  }
  .Member{
    font-size: 0.08rem;
    color: #feca34;
  }
  .screen-nav-more{
    width: 0.64rem;
    height: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #666;
    font-size: 0.11rem;
  }
  .screen{
    font-size: 0.1rem;
  }
  .from{
    position: relative;
    top: 0.75rem;
  }
  .from-li{
    overflow: hidden;
    border-bottom: 1px solid #fbfbfb;
  }
  .router-link-active{
    position: absolute;
    color: #666;
  }
  .from-left{
    float: left;
  }
  .from-img{
    position: absolute;
    width: .58rem;
    height: .58rem;
    margin: .12rem;
  }
  .introduce{
    overflow: hidden;
    border-bottom: 1px solid #f4f4f4;
  }
  .from-right{
    float: left;
    font-size: .14rem;
    margin-top: .12rem;
    margin-left: .74rem;
  }
  .right-star{
    font-size: .1rem;
    width: 3rem;
  }
  .from-Hummingbird{
    font-size: .1rem;
    float: right;
    margin-right: .1rem;
    background: #009bff;
    color: #fff;
  }
  .right-price{
    font-size: .1rem;
  }
  .distance{
    float: right;
    margin-right: .1rem;
  }
  .evaluate{
    margin-bottom: .03rem;
  }
  .evaluate-img{
    width: .09rem;
    height: .09rem;
  }
  .evaluate-span{
    font-size: .06rem;
    color: #e8470b;
  }
  .Discount{
    margin-top: .1rem;
  }
  .reduce{
    font-size: .1rem;
  }
  .reduce-first{
    width: .14rem;
    height: .14rem;
    text-align: center;
    line-height: .14rem;
    border-radius: 2px;
    background: #70bc46;
    color: #fff;
  }
  .reduce-last{
    float: right;
    margin-right: .1rem;
  }
  .gift{
    font-size: .1rem;
  }
  .gift-reduce{
    background: #70bc46;
    color: #fff;
  }
  .top{
    width: .5rem;
    height: .5rem;
    position: fixed;
    right: .2rem;
    bottom: .6rem;
    border-radius: 50%;
    background: #fff;
    border: 1px solid #999;
    z-index: 100;
  }
  .back{
    position: absolute;
    line-height: .52rem;
    margin-left: .17rem;
  }
</style>
