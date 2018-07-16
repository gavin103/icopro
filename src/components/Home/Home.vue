<template>
  <section class="home">
    <div class="home-banner-wrap">
        <div class="home-banner">
            <div class="home-banner-title">            
                <h2>B.Best 杨帆起航</h2>
                <p><a href="/register">注册</a>&nbsp;&nbsp;<span>| 已经注册？</span>&nbsp;<a href="/login">登录B.BEST</a> </p>
            </div>
            <div class="home-banner-image">
                <a href="#" v-for="(pic,i) in banners" :key="i">
                    <img :src="pic" :alt="pic">
                </a>
            </div>
        </div>
    </div>
    <div class="hot-list">
      <h2 class="title">
        热门ICO推荐
      </h2>
      <el-row :gutter="12">
        <el-col :span="6" v-for="(item,index) in hotList" :key="index">
          <el-card shadow="hover" :body-style="{height:'291px', padding:'0px'}">
            <router-link :to="{name:'Detail',params:{id:item.icoId}}"><img :src="item.largeImg" :alt="item.icoTitle" class="ico-img"></router-link>
            <h3 class="ico-band"> <span></span> {{item.icoTitle}}</h3>
            <p class="ico-dis">{{item.icoDescription}}</p>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="list-wrap">
        <section class="list-rate">
            <h2>币种列表</h2>
        </section>
        <el-card v-for="ico in icosList" :key="ico.icoId" shadow="hover" class="list-card clearfix">
            <router-link class="card-img" :to="{name:'Detail',params:{id:ico.icoId}}" tag="div">
                <img :src="ico.smallImg" alt="">
            </router-link>
            <div class="card-info">
                <h3>{{ico.icoTitle}}</h3>
                <p>{{ico.icoDescription}}</p>
            </div>
            <div class="card-rate">
                <img :src="ico.rateLevelImg" alt="">
            </div>
            <div class="card-end">
                <p>{{ico.endTime.split(" ")[0]}}</p>
            </div>
            <div class="card-start">
                <p>{{ico.startTime.split(" ")[0]}}</p>
            </div>
        </el-card>
    </div>
  </section>
</template>

<script>
  import Axios from 'axios';
  export default {
    name:'home',
    components: {
      // AppLogo
    },
    data() {
      return {
        banners:[
          "http://47.104.31.231/image/static/Banner1.png",
          "http://47.104.31.231/image/static/Banner2.png",
          "http://47.104.31.231/image/static/banner3.png",
          "http://47.104.31.231/image/static/banner4.jpg",
        ],
        hotList:[],
        icosList:[]
      }
    },
    mounted() {
        this.getIcoList();
    },
    methods: {
      getIcoList(){
        this.loading = true;
        //let url = "http://127.0.0.1:8888/api/getlist"; //本地测试
        let url = "http://gavin.frpgz1.idcfengye.com/api/getlist"; //线上环境
        Axios.get(url)
        .then(res=>res.data)
        .then(data=>{
            this.loading = false;
            if(data.code == 1){
                if(data.datas && data.datas.icosList){
                    data.datas.icosList.forEach(item=>{
                        switch(item.ratingLevel){
                            case "1":
                                item.rateLevelImg = "http://47.104.31.231/image/static/levela.png";
                                break;
                            case "2":
                                item.rateLevelImg = "http://47.104.31.231/image/static/levelb.png";
                                break;  
                            case "3":
                                item.rateLevelImg = "http://47.104.31.231/image/static/levelc.png";
                                break;   
                        }
                    })
                    this.hotList = [...data.datas.icosList];
                    if(this.hotList.length>4){
                      this.hotList.length = 4;
                    }
                    this.icosList = [...data.datas.icosList];
                    if(this.hotList.length>12){
                      this.hotList.length = 12;
                    }
                }
            }else{
                Message.error({
                    message: data.msg||"请求失败",
                    center: true
                });
            }  
        })
      },
    }
  }
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 58px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    text-align: center;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .home{
      background-color: #fff;
      padding-bottom: 36px;
      margin-bottom: 72px;
  }
  .home-banner-wrap{
      background: #161616;
      padding: 48px 0;
  }
  .home-banner{
    width: 1120px;
    margin: 0 auto;
    height: 236px;
  }
  .home-banner-title{
    text-align: center;
    margin-bottom: 30px;
  }
  .home-banner-title h2{
      color: #F0B90B;
      margin-bottom: 18px;
  }
  .home-banner-title p a{
      color: #ffffff;
      font-weight: 900;
  }
   .home-banner-title p span{
       color: #999;
   }
   .home-banner-image{
       height: 130px;
       display: flex;
       justify-content: space-between;
   }
   .home-banner-image a{
       width: 270px;
       height: 100%;
   }
   .home-banner-image a img{
       width: 100%;
       height: 100%;
   }

  .home-banner img{
    width: 100%;
    height: 100%;
  }
  .title{
    padding-top: 18px;
    font-size: 30px;
    text-align: center;
    padding-bottom: 18px;
  }
  .hot-list{
    width: 1120px;
    min-width: 1120px;
    margin: 0 auto;
  }
  .hot-list .ico-img{
    width: 100%;
    height: 153px;
  }
  .hot-list .ico-band{
    height: 30px;
    line-height: 30px;
    margin: 0 0 12px 18px;
  }
  .hot-list .ico-band span{
    height: 30px;
    width: 30px;
    display: inline-block;
    background: url(http://47.104.31.231/image/static/rocket.png) no-repeat;
    background-size:100% 100%;

  }
  .hot-list .ico-dis{
    padding: 0 16px;
    width: 268px;
    max-height: 72px;
    font-size: 14px;
    word-wrap: break-word;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
    .list-wrap{
        width: 1160px;
        margin: 0 auto;
        padding: 18px 18px 88px;
    }
    .list-rate{
        margin-bottom: 12px;
    }
    
    .list-rate h2{
        text-align: center;
    }
    .list-rate .list-rate-btn{
        float: right;
        width: 110px;
    }
    .list-card{
        height: 140px;
        margin-bottom: 12px;
    }
    .card-img{
        width: 100px;
        height: 100px;
        margin-right: 20px;
        float: left;
    }
    .card-img img{
        width: 100%;
        height: 100%;
    }
    .card-info{
        float: left;
        width: 440px;
    }
    .card-info h3{
        font-size: 18px;

    }
    .card-info p{
        height: 60px;
    }
    .card-start, .card-end, .card-rate{
        width: 150px;
        height: 100%;
        text-align: center;
        line-height: 100px;
        float: right;
    }
    .card-end, .card-start{
        width: 100px;
    }
    .card-rate{
        width: 140px;
        padding-top: 12px;
    }
    .card-rate img{
        width: 80px;
        height: 80px;
    }
    

    .el-checkbox+.el-checkbox{
        margin-left: 0
    }
    .el-checkbox{
        width: 120px;
    }
</style>
