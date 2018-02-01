<template>
  <div class="box">
  	<div class="header">
  		<mt-header fixed title="我的" class="header1">
  		<router-link to="/" slot="left">
    		<mt-button icon="back" class="header2"></mt-button>
  		</router-link>
  	</mt-header>
  	</div>
  	<section>
			<span class="icon iconfont" >&#xe61b;</span>
			<div class="ent">
				<a href="#"><h4>登录/注册</h4></a>
				<p>登录后享受更多特权</p>
			</div>
			<span> > </span>
  	</section>
  	<div class="luck">
  		<a href="#" class="a1">
  			<i class="icon iconfont">&#xe680;</i>
  			<p>红包</p>
  		</a>
  		<a href="#" class="a2">
  			<i class="icon iconfont">&#xe63b;</i>
  			<p>金币</p>
  		</a>
  	</div>
  	<footer>
  		<div class="addres">
  			<div class="icon iconfont">&#xe60d;<span>我的地址</span></div>
  		</div>
  		<div class="gold">
  			<div class="icon iconfont">&#xe60d;<span>金币商城</span></div>
  			<div class="icon iconfont">&#xe60d;<span>分享拿五元现金</span></div>
  		</div>
  		<div class="customer">
  			<div class="icon iconfont">&#xe60d;<span>我的客服</span></div>
  			<div class="icon iconfont">&#xe60d;<span>下载饿了么APP</span></div>
  		</div>
  	</footer>
  </div>
</template>

<script>
export default {
  name: 'Mine',
  data () {
    return {
    	
    }
  } 
}
</script>

<style scoped lang="scss">

.box{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	.header{
		.header1{
			font-size: 20px;
			font-weight: 700;
		}
		.header2{
			font-size: 20px;
		}
	}
	section{
		margin-top: 40px;
		width: 100%;
		height: 1.1rem;
		display: flex;
		background:#26a2ff;
		.icon{
			font-size:70px;
			color: white;
			line-height: 1.1rem;
			padding-left: 0.1rem;
		}
		.ent{
			width: 100%;
			padding-left: 0.1rem;
			color: white;
			h4{
				font-size: 20px;
				padding-top:0.4rem;
				color: white;
			}
			p{
				font-size: 14px;
				padding-top: 0.075rem;
			}
		}
		span{
			font-size: 18px;
			color: white;
			padding-right: 0.15rem;
			line-height: 1.1rem;
		}
	}
	.luck{
		width: 100%;
		height: 0.83rem;
		display: flex;
		background: white;
		.a1,.a2{
			width: 50%;
			height: 0.83rem;
			display: block;
			p{
				font-size: 14px;
				text-align: center;
				color: black;
				font-weight: 700;
			}
		}
		.a1{
			box-sizing: border-box;
			border-right:0.002rem solid #000000 ;
			display: flex;
			flex-direction: column;
			i{
				font-size: 0.26rem;
				color: #E8470B;
				text-align: center;
				padding-top: 0.2rem;
			}
		}
		.a2{
				display: flex;
				flex-direction: column;
			i{
				font-size: 0.3rem;
				color: #00D762;
				text-align: center;
				padding-top: 0.175rem;
			}
		}
	}
	footer{
		width: 100%;
		background: #DDDDDD;
		.addres{
			margin-top: 0.15rem;
			width: 100%;
			height: 0.5rem;
			background: white;
		}
		.gold{
			margin-top: 0.15rem;
			width: 100%;
			height: 1rem;
			background: white;
		}
		.customer{
			margin-top: 0.15rem;
			width: 100%;
			height: 1rem;
			background: white;
		}
	}
	.icon{
		font-size: 20px;
		padding-top: 0.1rem;
	}
}

</style>
