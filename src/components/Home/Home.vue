<template>
  <section class="home">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="b in banners" :key="b.index" class="home-banner">
        <img :src="b" alt="">
      </el-carousel-item>
    </el-carousel>
    <div class="hot-list">
      <h2 class="title">
        热门ICO推荐
      </h2>
      <el-row :gutter="12">
        <el-col :span="8" v-for="(item,index) in hotList" :key="index">
          <el-card shadow="hover" :body-style="{height:'291px', padding:'0px'}">
            <router-link :to="{name:'Detail',params:{id:item.icoId}}"><img :src="item.largeImg" :alt="item.icoTitle" class="ico-img"></router-link>
            <h3 class="ico-band">{{item.icoTitle}}</h3>
            <p class="ico-dis">{{item.icoDescription}}</p>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="policy-list">

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
        hotList:[]
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
              console.log(data);
                if(data.datas && data.datas.icosList){
                    this.hotList = data.datas.icosList;
                    if(this.hotList.length>4){
                      this.hotList.length = 4;
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
  .home-banner img{
    width: 100%;
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
    margin-left: 8px;
  }
  .hot-list .ico-dis{
    margin: 0 8px;
    font-size: 14px;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: justify;
  }
</style>
