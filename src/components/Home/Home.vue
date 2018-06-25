<template>
  <section class="home">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="hot-list">
      <h2 class="title">
        热门ICO推荐
      </h2>
      <el-row :gutter="12">
        <el-col :span="6" v-for="(item,index) in hotList" :key="index">
          <el-card shadow="hover" :body-style="{height:'291px', padding:'0px'}">
            <img :src="item.imgSrc" :alt="item.band" class="ico-img">
            <h3 class="ico-band">{{item.band}}</h3>
            <p class="ico-dis">{{item.discription}}</p>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="policy-list">

    </div>
  </section>
</template>

<script>
  
  export default {
    name:'home',
    components: {
      // AppLogo
    },
    data() {
      return {
        hotList:[
          {
            imgSrc:"https://icobench.com/images/icos/logos/sharering.jpg",
            star:4,
            discription:"The world’s first trusted token for sharing services. One way to pay for sharing ever",
            band:"ShareRing",
            endTime:"1530008000000"
          },
          {
            imgSrc:"https://icobench.com/images/icos/logos/sharering.jpg",
            star:4,
            discription:"The world’s first trusted token for sharing services. One way to pay for sharing ever",
            band:"ShareRing",
            endTime:"1530008000000"
          },
          {
            imgSrc:"https://icobench.com/images/icos/logos/sharering.jpg",
            star:4,
            discription:"The world’s first trusted token for sharing services. One way to pay for sharing ever",
            band:"ShareRing",
            endTime:"1530008000000"
          },
          {
            imgSrc:"https://icobench.com/images/icos/logos/sharering.jpg",
            star:4,
            discription:"The world’s first trusted token for sharing services. One way to pay for sharing ever",
            band:"ShareRing",
            endTime:"1530008000000"
          }
        ]
      }
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
      margin-bottom: 72px;
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
