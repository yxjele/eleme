<template>
  <div id="app">
    <router-view class="contet"/>
    <div class="nav">
      <router-link to="/">
        <i class="icon iconfont">&#xe699;</i>
       <span> 首页</span>
        </router-link>
      <router-link to="/find">
        <i class="icon iconfont">&#xe65d;</i>
        <span>发现</span>
        </router-link>
      <router-link to="/order">
        <i class="icon iconfont">&#xe606;</i>
        <span>订单</span>
      </router-link>
      <router-link to="/mine">
        <i class="icon iconfont">&#xe608;</i>
        <span>我的</span>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
@import './assets/icon/iconfont.css';
*{
  margin:0;
  padding: 0;
}
html,body {
  font-size: 100px;
}

a{
  text-decoration: none;
}

#app{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;
}
.nav{
  width: 100%;
  height: .5rem;
  line-height: .5rem;
  display:flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9999;
  box-shadow: 0 -0.266667vw 0.533333vw rgba(0,0,0,.1);
  background: #fff;
}
.nav a{
  flex:1;
  height: .5rem;
  display:flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.nav>a>i{ 
  height: .2rem;
   display: flex;
  justify-content: center;
  align-items: center;
  color: #8e8e93;
  font-size: .2rem;
}
.nav>a>span{
  display: flex;
  justify-content: center;
  align-items: center;
  height: .2rem;
  color: #8e8e93;
  font-size: 12px;
}
.content{
   flex:1;
}
</style>
