<template>
    <div class="news clearfix">
        <div class="news-main">
            <ul class="news-ads">
                <li v-for="(item,index) in ads" :key="index">
                    <a :href="item.url">
                        <img :src="item.logo" alt="" class="news-ads-img">
                        <section>
                            <h3>{{item.title}}</h3>
                            <p>{{item.detail}}</p>
                        </section>
                    </a>
                </li>
            </ul>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="快讯" name="first">
                    <section v-for="item in quickNews" :key="item.id" class="news-item">
                        <h3>发布时间：{{item.createTime|formatDate}}</h3>
                        <el-collapse v-model="activeNews">
                        <el-collapse-item :title="item.newsTitle" name="1">
                            <div class="news-content">{{item.newsDetail}}</div>
                        </el-collapse-item>
                        </el-collapse>
                    </section>
                </el-tab-pane>
                <el-tab-pane label="新闻" name="second">
                    <router-link 
                        v-for="md in mdNews" 
                        :key="md.md_id"
                        :to="{name:'NewsDetail',params:{id:md.md_id}}" tag="div"
                    >
                        <el-card class="box-card" >
                            <h3>{{md.title}}</h3>
                            <p>{{md.summary}}</p>
                            <!-- <iframe src="http://player.bilibili.com/player.html?aid=2388044&cid=3736324&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="500" height="300"> </iframe> -->
                        </el-card>
                    </router-link>

                </el-tab-pane> 
            </el-tabs>
        </div>
        <div class="news-side">
            <div class="news-search">
                <section>
                    <el-input v-model="formInline.user" placeholder="输入项目或代币名称...">
                    </el-input>
                    <el-button type="primary" @click="onSubmit" circle >
                        <i class="el-icon-search"></i>
                    </el-button>
                </section>
                <ul>
                    <li class="news-search-items" v-for="item in searchItems" :key="item">
                        {{item}}
                    </li>
                </ul>
            </div>
            <div class="news-chat">
                聊天室尚未开通
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';
import marked from 'marked';
import _ from 'lodash';
  export default {
    data() {
      return {
        activeName: 'first',
        activeNews: ['1','2'],
        formInline: {
          user: '',
          region: ''
        },
        ads:[
            {
                url:"https://www.hbg.com/zh-cn/invite/",
                logo:'https://img.jinse.com/865739',
                title:"Huobi",
                detail:"0门槛30%返佣",
            },            {
                url:"https://www.baidu.com",
                logo:'https://img.jinse.com/865739',
                title:"Huobi",
                detail:"0门槛30%返佣",
            },            {
                url:"https://www.hbg.com/zh-cn/invite/",
                logo:'https://img.jinse.com/865739',
                title:"Huobi",
                detail:"0门槛30%返佣",
            },            {
                url:"https://www.hbg.com/zh-cn/invite/",
                logo:'https://img.jinse.com/865739',
                title:"Huobi",
                detail:"0门槛30%返佣",
            },            {
                url:"https://www.hbg.com/zh-cn/invite/",
                logo:'https://img.jinse.com/865739',
                title:"Huobi",
                detail:"0门槛30%返佣",
            },            {
                url:"https://www.hbg.com/zh-cn/invite/",
                logo:'https://img.jinse.com/865739',
                title:"Huobi",
                detail:"0门槛30%返佣",
            },            {
                url:"https://www.hbg.com/zh-cn/invite/",
                logo:'https://img.jinse.com/865739',
                title:"Huobi",
                detail:"0门槛30%返佣",
            },            {
                url:"https://www.hbg.com/zh-cn/invite/",
                logo:'https://img.jinse.com/865739',
                title:"Huobi",
                detail:"0门槛30%返佣",
            },
        ],
        searchItems:[
            'API','Network','快讯'
        ],
        quickNews:[],
        mdNews: [],
      };
    },
    filters: {
      formatDate(s){
        const t = new Date(s*1);
        let d = '';
        d += (t.getFullYear()+'年');
        d += ((t.getMonth()+1)+'月');
        d += (t.getDate()+'日');
        d += " ";
        d += (t.getHours()+'时');
        d += (t.getMinutes()+'分');
        d += (t.getSeconds()+'秒');
        return d;
      }  
    },
    mounted() {
        this.getQuickNews();
        this.getMdNews();
    },
    methods: {
      handleClick(tab, event) {
        console.log();
      },
      onSubmit() {
        console.log();
      },
      getQuickNews(){
        this.loading = true;
        let url = "/api/getquicknews"; //本地测试
        // let url = "/api/getquicknews"; //线上环境
        
        Axios.get(url)
        .then(res=>res.data)
        .then(data=>{
            if(data.code ==1){
                this.loading = false;
                this.quickNews = [...data.datas.quickNews];
            }
        })                
      },
      getMdNews(){
        this.loading = true;
        let url = "/api/getmdnews"; //本地测试
        // let url = "/api/getmdnews"; //线上环境
        
        Axios.get(url)
        .then(res=>res.data)
        .then(data=>{
            if(data.code ==1){
                this.loading = false;
                this.mdNews = data.datas.mdNewsList;
            }
        })
      },
    },
  };
</script>
<style scoped>
    .news{
        background-color: #fff;
        min-height: 720px;
        width: 1120px;
        min-width: 1120px;
        margin: 0 auto;
        text-align: left;
        font-size: 14px;
        position: relative;
        padding: 12px 36px;
    }
    .news-main{
        width: 720px;
        float: left;
    }
    .news-side{
        width: 300px;
        float: right;
        overflow: hidden;
    }
    .news-search{
        margin-bottom: 1em;
    }
    .news-search section{
        display: flex;
        margin-bottom: 1em;
    }
    .news-search-items{
        display: inline-block;
        padding: 0 1em;
        height: 2em;
        line-height: 2em;
        border: 1px solid #999;
        margin-right: 1em;
        border-radius: 1em;
    }
    .news-search-items:hover{
        color: #409EFF;
        border-color: #409EFF;
    }
    .news-ads{
        height: 150px;
        margin-bottom: 12px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        overflow: hidden;
        padding: 3px;
    }
    .news-ads li{
        width: 160px;
        height: 60px;
        margin-bottom: 18px;
    }
    .news-ads li a{
        display: flex;
        width: 100%;
        height: 100%;
        padding: 6px;
    }
    .news-ads li a:hover{
        box-shadow: 0 1px 8px rgba(0,0,0,0.1);
    }
    .news-ads li a section{
        flex:1;
        padding-top: 3px;
        color: #333;
    }
    .news-ads .news-ads-img{
        height: 48px;
        width: 48px;
    }
    .news-item{
        padding-top: 1.5em;
        
    }
    .news-item h3{
        background:linear-gradient(180deg,#ffffff11,#F0B90B66);
        height: 2em;
        line-height: 2em;
        padding-left: 1em;
        border-radius: 1em;
    }
    .box-card{
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        margin-bottom: 18px;
    }
    .box-card:hover{
        box-shadow: 0 1px 12px rgba(0,0,0,0.2);
    }
    .news-content{
        padding-left: 1em;
    }
    .news-chat{
        min-height: 700px;
        box-shadow: 0 1px 5px rgba(0,0,0,0.1) inset;
        border-radius: 3px;
    }
</style>
