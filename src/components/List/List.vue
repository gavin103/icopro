<template>
    <div class="list">
        <ul class="search-wrap">
            <li class="search-bar">
                <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
                    <el-button type="primary" slot="append" icon="el-icon-search">搜索</el-button>
                </el-input>
            </li>
            <li class="search-class">
                <span class="search-item">通证分类</span>
                <el-checkbox-group style="display:inline-block"
                    v-model="checkedItems"
                    :min="1"
                    :max="5">
                    <el-checkbox>全部</el-checkbox>
                    <el-checkbox v-for="item in clarification" :label="item.code" :key="item.code">{{item.name}}</el-checkbox>
                </el-checkbox-group>
            </li>
            <li>
                <span class="search-item">当前状态</span>
                <el-radio-group v-model="curStatus">
                    <el-radio :label="1">即将开始</el-radio>
                    <el-radio :label="2">进行中</el-radio>
                    <el-radio :label="3">已经结束</el-radio>
                </el-radio-group>
            </li>
        </ul>
        <div class="list-wrap">
            <section class="list-rate clearfix">
                <h2>币种列表</h2>
                <el-button type="text" class="list-rate-btn">评价等级<i class="el-icon-caret-bottom"></i></el-button>
                <el-button type="text" class="list-rate-btn">结束时间<i class="el-icon-caret-bottom"></i></el-button>
                <el-button type="text" class="list-rate-btn">开始时间<i class="el-icon-caret-bottom"></i></el-button>
            </section>
            <el-card v-for="ico in icosList" :key="ico.icoId" shadow="hover" class="list-card clearfix">
                <router-link class="card-img" to="/icodetail" tag="div">
                    <img :src="ico.smallImg" alt="">
                </router-link>
                <div class="card-info">
                    <h3><span class="card-info-rocket"></span>{{ico.icoTitle}}</h3>
                    <p>{{ico.icoDescription}}</p>
                    <el-progress :stroke-width="8" :show-text=false :percentage="70"></el-progress>
                </div>
                <div class="card-rate">
                    <img src="http://47.104.31.231/image/static/levela.png" alt="">
                </div>
                <div class="card-end">
                    {{ico.endTime}}
                </div>
                <div class="card-start">
                    {{ico.startTime}}
                </div>
            </el-card>
        </div>
        <div class="pagination">
            <el-pagination
                layout="prev, pager, next"
                :total="pageInfo.total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import Axios from 'axios';
    import {Message} from 'element-ui';
    export default {
        data() {
        return {
            checkedItems:["全部"],
            rate: 3.7,
            curStatus:null,
            selectedClarify:null,
            clarification:[
                {
                    code:'Cryptocurrency',
                    name:'电子货币'
                },{
                    code:'Dapp',
                    name:'分布式应用'
                },{
                    code:'Smart-contract',
                    name:'智能合约'
                },{
                    code:'Game',
                    name:'游戏'
                }
            ],
            options4: [],
            value9: [],
            icosList: [],
            loading: false,
            pageInfo:{},
        }
        },
        mounted() {
            this.getIcoList();
        },
        methods: {
            getIcoList(){
                Axios.get("http://gavin.frpgz1.idcfengye.com/api/getlist")
                .then(res=>res.data)
                .then(data=>{
                    if(data.code == 1){
                        if(data.datas && data.datas.icosList){
                            const icosList = data.datas.icosList;
                            console.log(icosList);
                            this.icosList = icosList;
                        }
                        if(data.datas && data.datas.pageInfo){
                            const pageInfo = data.datas.pageInfo;
                            this.pageInfo = {...pageInfo};
                        }
                    }else{
                        Message.error({
                            message: data.msg||"请求失败",
                            center: true
                        });
                    }
                    
                })
            }
        }
    }
</script>
<style scoped>
    .list{
        background-color: #fff;
        min-height: 660px;
        width: 1120px;
        min-width: 1120px;
        margin: 0 auto;
        text-align: left;
        font-size: 14px;
        position: relative;
    }
    .search-wrap{
        border-bottom: 5px solid #f2f2f2;
        padding: 18px;
    }
    .search-wrap li{
        height: 36px;
        line-height: 36px;
    }
    .search-bar{
        width: 660px;
        margin-bottom: 15px;
    }
    .search-item{
        display: inline-block;
        width: 100px;
        font-weight: 600;
        color: rgba(0,0,0,0.6);
    }
    .pagination{
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        text-align: center;
        bottom: 50px;
    }
    .list-wrap{
        padding: 18px 18px 88px;
    }
    .list-rate{
        margin-bottom: 12px;
        padding-right: 40px;
    }
    
    .list-rate h2{
        float: left;
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
    .card-info-rocket{
        display: inline-block;
        width: 18px;
        height: 18px;
        margin-right: 1em;
        background: url(http://47.104.31.231/image/static/rocket.png) no-repeat;
        background-size: cover;
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
    
</style>
