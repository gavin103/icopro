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
                    <section class="news-item">
                        <h3>今日 7月22日</h3>
                        <el-collapse v-model="activeNews">
                        <el-collapse-item title="FCoin公告：7月20日、21日FT存在价格异动 存在市场恶意做空行为" name="1">
                            <div class="news-content">FCoin发布公告称，FT/USDT、FT/BTC、FT/ETH交易对，2018年7月20日、2018年7月21日连续二个交易日价格跌幅累计超过20%，属于交易异常波动的情况。经过调查，发现FT价格遭到刻意打压（通过以诱导市场方向为目的的连续程序化交易），FT运营团队现已将相关数据上报FCoin平台，并报请FCoin平台采取措施限制相关恶意做空行为。</div>
                        </el-collapse-item>
                        <el-collapse-item title="FOne运作规则（保荐机构）公示" name="2">
                            <div class="news-content">FCoin于今日凌晨发布FOne交易区保荐机构运作规则公示，公示显示：
                            1.FCoin认证的保荐机构均可以在FOne申请以自己品牌命名的交易区（或多家保荐机构联合命名的交易区），在此专区内拥有上币权，运营权，及制定规则的权利，同时保荐机构也须对项目状态进行实时风险评估与处置。
                            2.每个保荐机构将获得自己交易区所有币种交易手续费的10%作为其运营收入，该手续费按月返还给保荐机构。并且，FCoin也积极鼓励保荐机构将自己交易区的优秀币种申请转板，转板以后，保荐机构仍然享受该币种10%的手续费收入，即保荐机构上币可终身获得其交易手续费的10%。多家保荐机构联名的交易区，需指定一家作为主保荐机构，由其代为收取运营收入，再内部分配。
                            3.若多家保荐机构申请上线同一币种，则需多家协商是否在多家的联合区统一首发。协商不成的，以项目方认定的保荐机构为准。
                            4.FOne将于近期进行保荐项目统一首发，每个保荐机构的首发项目最多不超过5个，请保荐机构积极申请，保障首发项目质量。本次首发只支持ERC20币种。
                            查看详情
                            </div>
                        </el-collapse-item>
                        </el-collapse>
                    </section>
                    <section class="news-item">
                        <h3>昨日 7月21日</h3>
                        <el-collapse>
                        <el-collapse-item title="FCoin公告：7月20日、21日FT存在价格异动 存在市场恶意做空行为" name="1">
                            <div class="news-content">FCoin发布公告称，FT/USDT、FT/BTC、FT/ETH交易对，2018年7月20日、2018年7月21日连续二个交易日价格跌幅累计超过20%，属于交易异常波动的情况。经过调查，发现FT价格遭到刻意打压（通过以诱导市场方向为目的的连续程序化交易），FT运营团队现已将相关数据上报FCoin平台，并报请FCoin平台采取措施限制相关恶意做空行为。</div>
                        </el-collapse-item>
                        <el-collapse-item title="FOne运作规则（保荐机构）公示" name="2">
                            <div class="news-content">FCoin于今日凌晨发布FOne交易区保荐机构运作规则公示，公示显示：
                            1.FCoin认证的保荐机构均可以在FOne申请以自己品牌命名的交易区（或多家保荐机构联合命名的交易区），在此专区内拥有上币权，运营权，及制定规则的权利，同时保荐机构也须对项目状态进行实时风险评估与处置。
                            2.每个保荐机构将获得自己交易区所有币种交易手续费的10%作为其运营收入，该手续费按月返还给保荐机构。并且，FCoin也积极鼓励保荐机构将自己交易区的优秀币种申请转板，转板以后，保荐机构仍然享受该币种10%的手续费收入，即保荐机构上币可终身获得其交易手续费的10%。多家保荐机构联名的交易区，需指定一家作为主保荐机构，由其代为收取运营收入，再内部分配。
                            3.若多家保荐机构申请上线同一币种，则需多家协商是否在多家的联合区统一首发。协商不成的，以项目方认定的保荐机构为准。
                            4.FOne将于近期进行保荐项目统一首发，每个保荐机构的首发项目最多不超过5个，请保荐机构积极申请，保障首发项目质量。本次首发只支持ERC20币种。
                            查看详情
                            </div>
                        </el-collapse-item>
                        </el-collapse>
                    </section>
                </el-tab-pane>
                <el-tab-pane label="动态" name="second">
                    <el-card class="box-card">
                        <div>
                            B站视频
                            <br>
                            <iframe src="http://player.bilibili.com/player.html?aid=2388044&cid=3736324&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="500" height="300"> </iframe>
                        </div>
                    </el-card>
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
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      onSubmit() {
        console.log('submit!');
      }
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
        box-shadow: 0 1px 12px rgba(0,0,0,0.1);
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
