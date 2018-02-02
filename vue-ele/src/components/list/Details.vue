<template>
  <div class="details">
    <div class="header">
      <mt-header title="" class="header-mt">
        <router-link to="/list" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="detail" v-if="detail">
      <img class="detail-img" :src="'https://fuss10.elemecdn.com/'+detail.image_path+'.'+detail.image_path.split('').slice(32,).join('')+'?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/'">
      <div class="detail-name">
        <h2 class="detail-h2">
          <span class="h2-span">
            品牌
          </span>
          <span>
            {{detail.name}}
          </span>
          <i class="h2-i"></i>
        </h2>
        <div class="detail-evaluate">
          <span>
            {{detail.rating}}
          </span>
          <span>
            月售{{detail.recent_order_num}}单
          </span>
          <span>
            {{detail.delivery_mode.text}}
            <span>约{{detail.order_lead_time}}分钟</span>
          </span>
          <span>距离1.4km</span>
        </div>
        <p class="detail-p">
          {{detail.promotion_info}}
        </p>
      </div>
    </div>
    <div class="detail-shop">
      <div class="shop-discount">
        <span class="discount-first">
          {{detail.activities[0].icon_name}}
        </span>
        <span class="discount-explain">
          {{detail.activities[0].tips}}
        </span>
      </div>
      <div class="discount">
        27个优惠
        <i class="discount-horn"></i>
      </div>
    </div>
    <div class="shop-tab">
      <div class="shop shop-order">点餐</div>
      <div class="shop">评价</div>
      <div class="shop">商家</div>
    </div>
    <div>
      <div class="menuview-menuview">
        <div class="menuview-menuviewMain">
          <main class="menuview-main">
            <ul class="menucategory-category">
              <li v-for="item in list">
                <img class="menucategory-img" :src="'https://fuss10.elemecdn.com/'+item.icon_url+'.'+item.icon_url.split('').slice(32,).join('')+'?imageMogr/format/webp/thumbnail/26x/'">
                <span>
                  {{item.name}}
                </span>
              </li>
            </ul>
            <section class="container">
              
            </section>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Details',
  data () {
    return {
      detail: null,
      list: []
    }
  },
  mounted () {
    console.log(this.$route.params.fid);
    var id = this.$route.params.fid;
    axios.get(`/restapi/shopping/restaurant/${id}?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&extras[]=qualification&terminal=h5&latitude=39.90469&longitude=116.407173`)
    .then((res) => {
      console.log(res);
      this.detail = res.data;
    }),
    axios.get("/restapi/shopping/v1/restaurants/150039723/menu/categories")
    .then((res) => {
      console.log(res);
      this.list = res.data;
    })
  }
}
</script>

<style scoped>
  .header{
    height: .7rem;
    background: #c4bdcc;
    position: relative;
  }
  .header-mt{
    background: #c4bdcc;
  }
  .detail{
    padding: .4rem .2rem 0;
    position: relative;
    display: flex;
    background: #fff;
    text-align: center;
  }
  .detail-img{
    width: .8rem;
    height: .8rem;
    border-radius: .025rem;
    box-shadow: 0 0 .02rem rgba(0,0,0,.2);
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -.4rem;
    margin-top: -.35rem;
  }
  .detail-name{
    flex: 1;
    width: 3.6rem;
  }
  .detail-h2{
    margin: 0;
    font-size: .2rem;
    line-height: .4rem;
    font-weight: 700;
    white-space: nowrap;
    position: relative;
    padding-right: .13rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .h2-span{
    width: .48rem;
    height: .24rem;
    background: #fff100;
    border-radius: .01rem;
    font-size: .12rem;
    position: relative;
    margin-right: .08rem;
    line-height: .24rem;
  }
  .h2-i{
    content: '';
    border-style: solid;
    border-width: .05rem 0 .05rem .06rem;
    border-color: transparent transparent transparent rgba(0,0,0,.67);
    position: absolute;
    right: .14rem;
    top: .18rem;
  }
  .detail-evaluate{
    white-space: nowrap;
    height: .16rem;
    margin-top: .01rem;
    font-size: .14rem;
    color: #333;
  }
  .detail-p{
    width: 2.2rem;
    font-size: .1rem;
    font-weight: 300;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: .06rem auto .06rem;
    padding: 0;
    white-space: nowrap;
  }
  .detail-shop{
    display: flex;
    border-radius: 1px;
    border: 1px solid #eee;
    padding: .06rem .1rem;
    font-size: .1rem;
    color: #666;
    margin: 0 .26rem;
    align-items: center;
  }
  .shop-discount{
    flex: 1;
    overflow: hidden;
  }
  .discount-first{
    background: #70bc46;
    color: #fff;
    margin-right: .01rem;
    text-align: center;
  }
  .discount{
    width: .7rem;
    flex-shrink: 0;
    position: relative;
    text-align: center;
  }
  .discount-horn{
    content: '';
    display: flex;
    border-style: solid;
    border-width: .05rem .05rem 0;
    border-color: rgba(0,0,0,.57) transparent transparent;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
  }
  .shop-tab{
    line-height: .6rem;
    display: flex;
    background: #fff;
    border-bottom: 1px solid #eee;
  }
  .shop{
    position: relative;
    flex: 1;
    text-align: center;
    font-size: .14rem;
    color: #666;
    border-bottom: 1px solid #ddd;
  }
  .shop-order{
    color: #333;
    font-weight: 700;
  }
  .menuview-menuview{
    height: 1252px;
    box-sizing: border-box;
  }
  .menuview-menuviewMain{
    height: 100%;
    padding-bottom: .64rem;
    background-color: #fff;
  }
  .menuview-main{
    display: flex;
    height: 100%;
  }
  .menucategory-category{
    padding: 0 0 .53rem;
    list-style: none;
    flex: none;
  }
  .menucategory-category li{
    width: 1rem;
    position: relative;
    padding: .14rem .05rem;
    border-bottom: 1px solid #e8e8e8;
    font-size: .14rem;
    color: #666;
    transform: translateZ(0);
  }
  .menucategory-img{
    width: .17rem;
    height: .17rem;
    vertical-align: top;
    margin-right: .04rem;
  }
</style>
