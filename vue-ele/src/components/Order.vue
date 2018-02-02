<template>
<div class="order">
    <!-- header -->
    <mt-header fixed title="订单">
        <router-link to="/" slot="left">
        <mt-button icon="back" style="color:#fff"></mt-button></router-link>
    </mt-header>
    <div class="jilu">
        <img src="https://fuss10.elemecdn.com/8/c8/bbe5984003cb26fc7b445a4a15195png.png" alt="">
        <h3>近三个月无外卖订单记录</h3>
    </div>
    <p>
      <span>查看三个月之前的外卖订单</span>
      <span class="iconfont">&#xe600;</span>
    </p>
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
hetml,body{
  background-color: #f5f5f5;
}
.order{
  position: relative;
  height: 100%;
  margin-bottom:.6rem;
}
header{font-size:.16rem;height:.44rem}
/* 添加收货地址 */
.jilu{
  width: 100%;
  margin-top: 1.64rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  color: #999;
}
img{
  width: 2.5rem;
}
h3{
  font-size: .18rem;
  margin: .2rem 0;
  color: #999;
}
p{
  font-size: .14rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #666;
}
</style>
