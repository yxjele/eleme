<template>
  <div class="header">
  	<mt-header fixed title="发现" class="header1">
  		<router-link to="/" slot="left">
    		<mt-button icon="back" class="header2"></mt-button>
  		</router-link>
  	</mt-header>
  	<section>
  		<div class="lianjie">
  				<ul>
  					<li id="li1"><a href="#">
  						<p class="p1">金币商城</p>
  						<span>0元好物在这里</span>
  					</a></li>
  					<li><a href="#">
  						<p class="p2">必吃爆料</p>
  						<span>最夯外卖指南</span>
  						<img src="../assets/img/b784087aff96a97f4e5183d0d784fjpeg.png">
  					</a></li>
  					<li id="li2"><a href="#">
  						<img src="../assets/img/9c9aea0e856149083d84af3444b78jpeg.png" id="img1">
  					</a></li>
  					<li><a href="#">
  						<p class="p3">推荐有奖</p>
  						<span>5元现金拿不停</span>
  						<img src="../assets/img/8d42eef97ff4c1c2b671085358541jpeg.png">
  					</a></li>
  					<li><a href="#">
  						<p class="p4">周边优惠</p>
  						<span>领取口碑好券</span>
  						<img src="../assets/img/2351e989d4171479ba0d7b5c06053jpeg.png">
  					</a></li>
  					<li><a href="#">
  						<p class="p5">百元红包</p>
  						<span>兴业银行联名卡</span>
  						<img src="../assets/img/a45d2b9d7d09bbc49b40d4e626093jpeg.png">
  					</a></li>
  				</ul>
  				<div class="pig">
  					<img src="../assets/img/656006edcd86033a1b32b23ddea37jpeg.png">
  				</div>
  		</div>
  	</section>
  	<div class="tuijian">
  		<h4 class="icon iconfont">&#xe699;为你推荐</h4>
  		<p>你的口味我都懂得</p>
  	</div>
  	<div class="shuju">
  		<ol>
  			<li v-for="item in list"><a href="#">
  				<img :src="'http://fuss10.elemecdn.com/'+item.food.image_path+'.jpeg?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/'">
  				<h4 class="details">{{item.food.name}}</h4>
  				<div class="good">月售{{item.food.month_sales}}份
  					<span>好评{{item.food.satisfy_rate}}%</span>
  				</div>
  				<div class="price">￥{{item.food.price}}
  					<span class="price1">￥{{item.food.original_price}}</span>
  				</div>
  				<div class="shop">{{item.food.restaurant_name}}</div>
  			</a></li>
  			<button @click="loadMore">查看更多 >
  			</button>
  		</ol>
  	</div>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import axios from 'axios';
export default {
  name: 'Find',
  data () {
    return {
    		list:[],
    		offset:0
    }
  },
   mounted () {
		axios.get("/restapi/shopping/v1/find/recommendation?latitude=39.90469&longitude=116.407173&offset=0&limit=6")
    .then((res)=>{
      console.log(res)
      this.list = res.data.items;
    })
	},
	methods:{
		loadMore () {
			Indicator.open({
  		text: '加载中...',
  		spinnerType: 'fading-circle'
	});
			axios.get("/restapi/shopping/v1/find/recommendation?offset=${this.offset + 20}&limit=20&rank_id=8a51a9675b5145afb1bab3c38db39cad&latitude=39.90469&longitude=116.407173")	
    .then((res)=>{
      console.log(res)
      this.offset +=20;
      this.list = this.list.concat(res.data.items);
    	}) 
		}
	}		
}
</script>

<style scoped>
	.header1{
		font-size: 20px;
		font-weight: bold;
	}
	.header2{
		font-size: 20px;
		font-weight:bold;
	}
	section{
		width: 100%;
		margin-top: 0.4rem;
		height: 3.415rem;
		display: flex;
	}
	.lianjie{
		width: 100%;
		height: 2.4rem;
		font-size: 16px;
	}
	.lianjie ul{
		width: 100%;
		height: 2.4rem;
	}
	.lianjie ul li{
		width: 50%;
		height: 0.8rem;
		float: left;
		list-style: none;
		border: 0.005rem solid #CCCCCC;
		box-sizing: border-box;
	}
	.lianjie ul li img{
		width: 0.45rem;
		height: 0.45rem;
		float: right;
		padding-right: 0.15rem;
	}
	#img1{
		width: 0.75rem;
		height: 0.75rem;
	}
	.lianjie ul li span{
		font-size: 14px;
	}
	.lianjie ul li p,span{
		padding-left: 0.1rem;
	}
	.p1{
		color: rgb(255, 153, 0);
		padding-top: 0.075rem;
	}
	.p2{
		color: rgb(245, 120, 93);
		padding-top: 0.075rem;
	}
	.p3{
		color:rgb(27, 169, 225) ;
		padding-top: 0.075rem;
	}
	.p4{
		color: rgb(237, 102, 96);
		padding-top: 0.075rem;
	}
	.p5{
		color:rgb(232, 143, 40);
		padding-top: 0.075rem;
	}
	#li1{
		border-bottom:none ;
	}
	#li2{
		border-top:none ;
	}
	.pig{
		width: 100%;
		height: 1.125rem;
		background: #E9E9E9;
		margin-bottom: 0.05rem;
	}
	.pig img{
		width: 100%;
		height: 0.975rem;
		padding-top:0.075rem ;
	}
	.tuijian{
		width: 100%;
		height: 0.5rem;
		margin-top:0.15rem;
	}
	.tuijian h4{
		font-size: 18px;
		text-align: center;
		padding-top: 0.075rem;
		
	}
	.tuijian p{
		font-size: 12px;
		text-align: center;
		color: #8E8E93;
		padding-bottom: 0.075rem;
	}
	.shuju{
		width: 100%;
		height: 100%;
		margin-bottom: 50px;
	}
	.shuju ol{
		width: 100%;
		height: 100%;
		display: flex;
		flex-wrap:wrap;
		flex-grow: 1;
	}
	.shuju li{
		font-size: 16px;
		width: 47.3%;
		height: 100%;
		list-style: none;
		margin:0.05rem 0.05rem;
	}
	.shuju img{
		width: 100%;
		height: 1.725rem;
		text-align: center;
	}
	.details{
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		height: 0.25rem;
		text-align: center;
		font-size: 16px;
		color: black;
	}
	.good{
		height: 0.12rem;
		text-align: center;
		font-size:12px ;
	}
	.price{
		padding-left: 0.2rem;
		padding-top:0.05rem ;
		height:0.22rem ;
		color:  #ff6000;
		border-bottom: 0.005rem solid #999999;
	}
	.price1{
		padding-left:0;
		font-size:12px ;
		color:gray ;
		text-decoration: line-through;
	}
	.shop{
		font-size: 12px;
		text-align: center;
		height: 0.33rem;
		line-height: 0.33rem;
		color: #999999;
	}
	button{
		margin: 0 auto;
		border: none;
		background: white;
		padding:0.125rem 0;
	}
</style>
