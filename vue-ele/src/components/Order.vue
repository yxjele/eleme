<template>
<div class="order">
    <!-- header -->
    <mt-header title="确认订单">
      <router-link to="/" slot="left">
        <mt-button icon="back" style="color:#fff"></mt-button>
      </router-link>
    </mt-header>
    <!-- 添加收货地址 -->
    <div class="address">
      <mt-button class="dizhi" type="primary"><span>+</span>添加收货地址</mt-button>
    </div>
    <!-- delivery -->
    <div class="delivery">
      <div class="delivery-top">
        <span>送达时间</span>
          <span>
            <select name="" id="select" title="">
              <option value>尽快送达(17:17送达)</option>
            </select>
            <i class="iconfont">&#xe630;</i>
          </span>
        </div>
        <div class="delivery-bottom">
          <span>在线支付</span>
          <span class="zhifu">支付方式</span>
        </div>
    </div>
    <!-- 商店信息 -->
    <div class="infos">
      <div class="info-box">
          <div class="info-name">
            <span>吉野家</span>
            <span class="dian">(北京站店)</span>
          </div>
          <ul>
            <li class="jiwei">
              <img src="https://fuss10.elemecdn.com/0/cf/e339711eecd730be5d3bf020f383epng.png?imageMogr/format/webp/thumbnail/!72x72r/gravity/Center/crop/72x72/" alt="">
              <p>吉味双拼饭</p>
              <span>x1</span>
              <span><span>￥</span>36.5</span>
            </li>
            <li>
              <div>
                <span class="baoz">包装</span>
                <span>餐盒</span>
              </div>
              <span>￥1</span>
            </li>
            <li>
              <div>
                <span class="peis">配送</span>
                <span>配送费</span>
              </div>
              <span>￥7</span>
            </li>
          </ul>
          <div class="hongb">
            <div >
              <h3>红包</h3>
              <span>(含店铺专享红包)</span>
            </div>
            <span>选择地之后使用红包</span>
          </div>
          <div class="shuom">
            <div>
              <span class="shuoming">优惠说明</span>
              <i class="iconfont">&#xe674;</i>
            </div>
            <div>
              <span>小计 ￥</span>
              <span class="prc">44.5</span>
            </div>
          </div>
        </div>
    </div>
    <div class="beizhu">
      <span>订单备注</span>
        <span>
          <select name="" id="select" title="">
            <option value>口味偏好、餐具份数等</option>
          </select>
          <i class="iconfont">&#xe630;</i>
        </span> 
    </div>
    <div class="fap">
      <span>发票信息</span>
      <span>商家不支持开发票</span>
    </div>
</div>
</template>

<script>
export default {
  name: 'Order',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* header */
header{font-size:.16rem;height:.44rem}
/* 添加收货地址 */
.address{
  height: .83rem;
  background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAICAYAAAEkWSnHAAAAAXNSR0IArs4c6QAAAUtJREFUSA1jYKAmYIQZpjL1fwOMjUwzMTHMvpXJ+BQk9r9WpY6BkYEJWR7GZmy60wBjU4UGu0xt2v+if/8Z+LCZeCebEW7j/zoVOBtFLRN/F2PD2W8oYoOJAw9/ten/zf79Y/AixXHAiLh3K5txEbqe/3WqwcDY0kUXx8tnYj7E2HBzH141o5J4QgAelcYz/3N9/MNQhkctphQjw787WYxN6BL/W9SkGX79S0UXx8tnYvrE2HCrD6YGnl9JdhTQhNuZDM0wg1BoUh0F1IzsKBSzRjmjIUCTEIDnSWTTgUVtBLCo1UAWowUbmO/2AIvnI8SY/X+SCjvDG8YMYLEtSIx6CtT8Z2BiWcjYcOMBNjNQAkxnwn/xn2wMqf//M7BgU0wtMUZGhq9M7AwzbiYzfibGzP8NqgYM//4HEKOWQjWPGZhi5jM2NPzDZQ4AaBtXeW5GU0UAAAAASUVORK5CYII=) repeat-x 0 100%;
  display: flex;
  align-items: center;
  align-items: center;
  justify-content: center;
  margin-bottom:.1rem;
}
.dizhi{
  height: .36rem;
  width: 1.55rem;
  border-radius:.18rem;
  font-size: .16rem;
  background-color: #fff;
  color:#2395ff;
  border: 1px solid #2395ff;
}
.dizhi span{
  margin-right: .1rem;
  font-weight: 600;
  font-size: .18rem;
}

/* delivery */

.delivery {
  padding:0 .2rem;
  height: 1.04rem;
  font-size: .16rem;
  box-shadow: 0 0 0.2rem 0 rgba(0,0,0,.08);

}
.delivery-top {
  display: flex;
  height: 50%;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
}
.delivery-bottom {
  display: flex;
  height: 50%;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
}
.delivery-bottom span, .delivery-top span {
  display: flex;
  align-items: center;
}
.zhifu{
  color: #2395ff;
  font-weight: 500;
}
select{
  -webkit-appearance: none;
  font-size: .16rem;
  border: none;
  background-color: transparent;
  color: #2395ff;
}

/* 店家信息 */
.infos{
  height: 100%;
  font-size: .16rem;
  margin-top: .1rem;
  box-shadow: 0 0 0.2rem 0 rgba(0,0,0,.08);
  
}
.info-box{
  display:flex;
  flex: 1;
  flex-direction: column;
  padding:0 .2rem;
}
.info-name{
  padding: .1rem 0;
}
.info-name span{
  font-weight: 600;
}
.dian{
  font-size: .14rem;
}
ul{
  height: 100%;
 border-top:1px solid rgba(0,0,0,.05);
}
li{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: .14rem;
  padding: .15rem 0;
}
li img{
  width: 10%;
  height: 10%;
}
.jiwei p{
  width:54%; 
}
.baoz{
  background: #00aeff;
  padding: 0 .02rem;
  border-radius:.02rem; 
  margin-right: .1rem;
}
.peis{
  background: #0061ff;
  padding: 0 .02rem;
  border-radius:.02rem; 
  margin-right: .1rem;
}
.hongb{
  font-size: .12rem;
  display:flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: .15rem 0;
  border-bottom:1px solid rgba(0,0,0,.05);
  color: #999;
}
.hongb div{
  display:flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
}
.shuom{
   font-size: .12rem;
  display:flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: .15rem 0;
}
.prc{
  font-size: .18rem;
}
.shuoming{
  color: #999;
}
.beizhu{
  font-size: .16rem;
  display:flex;
  flex:1;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.2rem .2rem;
  border-bottom:1px solid rgba(0,0,0,.05);
}
#select{
  color: #999;
}
.fap{
  font-size: .16rem;
  display:flex;
  flex:1;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.2rem .2rem;
  color: #999;
}
</style>
