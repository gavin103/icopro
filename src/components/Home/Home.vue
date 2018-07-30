<template>
  <section class="home">
    <div class="home-banner-wrap">
        <div class="home-banner">
            <div class="home-banner-title">            
                <h2>B.Best 杨帆起航</h2>
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
          <el-card class="hot-list-card" :body-style="{height:'291px', padding:'0px'}">
            <router-link :to="{name:'Detail',params:{id:item.icoId}}"><img :src="item.largeImg" :alt="item.icoTitle" class="ico-img"></router-link>
            <h3 class="ico-band"> <span></span> {{item.icoTitle}}</h3>
            <p class="ico-dis">{{item.icoDescription}}</p>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="list-wrap">
        <h2 class="title">
            币种列表
        </h2>
        <section class="list-rate">
            <el-button type="text" class="list-rate-btn">LOGO</el-button>
            <el-button style="flex:1;text-align:left;padding-left:15px" type="text" class="list-rate-btn">项目描述</el-button>
            <el-button type="text" class="list-rate-btn">开始时间</el-button>
            <el-button style="width:70px" type="text" class="list-rate-btn">结束时间</el-button>
            <el-button style="width:150px" type="text" class="list-rate-btn">评价等级</el-button>
        </section>
        <el-card v-for="ico in icosList" :key="ico.icoId" shadow="hover" class="list-card clearfix">
            <router-link class="card-link" :to="{name:'Detail',params:{id:ico.icoId}}" tag="div">
                <div class="card-img">
                <img :src="ico.smallImg" alt="">
                </div>
                
            
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
            </router-link>
        </el-card>
        <p class="list-more">
            <router-link to="/icolist" class="list-more-btn">查看更多...</router-link>
        </p>
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
                    if(this.hotList.length>15){
                      this.hotList.length = 15;
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

<style scoped>
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
      margin-bottom: 36px;
  }
  .home-banner-wrap{
      background: #161616;
      padding: 48px 0 24px;
      margin-bottom: 24px;
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
      text-shadow: 0 1px 1px #333,
            0 0 4px white,    
            0 -5px 4px #ff3,   
            3px -10px 6px #fd3,    
            -3px -15px 11px #C90,   
            3px -25px 18px #f20;
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
       width: 256px;
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
    color: #fff;
    text-shadow: 0px 0px 1px #000,0px 0px 2px #333,
                     0px 0px 3px #666,
                     0px 0px 4px #999;  
  }

  .hot-list{
    width: 1120px;
    min-width: 1120px;
    margin: 0 auto;
  }
  .hot-list-card:hover{
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.2);
  }
  .hot-list .ico-img{
    width: 100%;
    height: 153px;
  }
  .hot-list .ico-band{
    height: 30px;
    width: 250px;
    line-height: 30px;
    margin: 0 0 12px 18px;
    position: relative;
  }
  .hot-list .ico-band span{
    height: 30px;
    width: 30px;
    display: inline-block;
    background: url(http://47.104.31.231/image/static/rocket.png) no-repeat;
    background-size:100% 100%;
    position: absolute;
    right: 8px;
    top: -140px;
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
        padding: 18px 18px 0;
    }
    .list-rate{
        margin-bottom: 12px;
        display: flex;
        padding: 0 18px;
    }
    
    .list-rate h2{
        text-align: center;
    }
    .list-rate .list-rate-btn{
        width: 100px;
        color: #888;
    }
    .list-card{
        height: 140px;
        margin-bottom: 12px;
        cursor: pointer;
    }
    .list-card:hover{
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    }
    .list-more{
        text-align: center;
        padding-top: 12px;
    }
    .list-more-btn{
        display: block;
        width: 150px;
        height: 36px;
        line-height: 36px;
        border: 1px solid #888888;
        border-radius: 18px;
        color: #888888;
        margin: 0 auto;
    }
    .list-more-btn:hover{
        color: #000;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        border: 1px solid #000;
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
    .card-link{
        cursor: pointer;
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
