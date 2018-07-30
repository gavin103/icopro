<template>
    <div class="list">
        <ul class="search-wrap">
            <li class="search-bar">
                <el-input placeholder="请输入内容" v-model="key" class="input-with-select">
                    <el-button type="primary" slot="append" icon="el-icon-search" @click="handleSearch">搜索</el-button>
                </el-input>
            </li>
            <li class="search-time">
                <span class="search-item">当前状态:</span>
                <el-radio-group v-model="curStatus" @change="changeTimeStatus">
                    <el-radio :label="0">全部</el-radio>
                    <el-radio :label="1">即将开始</el-radio>
                    <el-radio :label="2">进行中</el-radio>
                    <el-radio :label="3">已经结束</el-radio>
                </el-radio-group>
            </li>
            <li class="search-class">
                <span class="search-item">通证分类:</span>
                <el-checkbox-group class="search-checkbox" v-model="checkedClarify" @change="handleCheckedClarify">
                    <el-checkbox v-for="item in clarification" :label="item.code" :key="item.code">{{item.name}}</el-checkbox>
                </el-checkbox-group>
            </li>
        </ul>
        <div class="list-wrap">
            <section class="list-rate clearfix">
                <h2>币种列表</h2>
                <el-button type="text" class="list-rate-btn" @click="rangeByLevel">评价等级<i :class="rangeByLevelClass"></i></el-button>
                <el-button type="text" class="list-rate-btn" @click="rangeByEnd">结束时间<i :class="rangeByEndClass"></i></el-button>
                <el-button type="text" class="list-rate-btn" @click="rangeByStart">开始时间<i :class="rangeByStartClass"></i></el-button>
            </section>
            <el-card v-for="ico in icosList" :key="ico.icoId" shadow="hover" class="list-card clearfix">
                <router-link  class="card-link" :to="{name:'Detail',params:{id:ico.icoId}}" tag="div">
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
    const clarification=[
                    {
                        code:'c01',
                        name:'电子货币'
                    },{
                        code:'c02',
                        name:'分布式应用'
                    },{
                        code:'c03',
                        name:'智能合约'
                    },{
                        code:'c04',
                        name:'游戏'
                    },{
                        code:'c05',
                        name:'人工智能'
                    },{
                        code:'c06',
                        name:'物联网'
                    },{
                        code:'c07',
                        name:'存储'
                    },{
                        code:'c08',
                        name:'平台币'
                    },{
                        code:'c09',
                        name:'物联网'
                    },{
                        code:'c10',
                        name:'云概念币'
                    },{
                        code:'c11',
                        name:'公链'
                    },{
                        code:'c12',
                        name:'银行'
                    },{
                        code:'c13',
                        name:'社交'
                    },{
                        code:'c14',
                        name:'虚拟现实'
                    },{
                        code:'c15',
                        name:'侧链'
                    },{
                        code:'c16',
                        name:'协议'
                    },{
                        code:'c17',
                        name:'软件'
                    }
                ];
    export default {
        data() {
            return {
                curStatus:0, //当前状态 0：全部 1：即将开始 2：进行中 3：已经结束
                allIcosList:[], // 存储全部条目
                icosList: [], // 当前显示条目
                loading: false,
                pageInfo:{},
                clarification, //通证分类
                checkedClarify:[],
                key:"", //搜索关键字
                // 排序code +1/0/-1
                rangeByLevelCode:0,
                rangeByLevelClass:"el-icon-d-caret",
                rangeByStartCode:0,
                rangeByStartClass:"el-icon-d-caret",
                rangeByEndCode:0,
                rangeByEndClass:"el-icon-d-caret",
            }
        },
        mounted() {
            this.getIcoList();
        },
        methods: {
            getIcoList(opt={}){
                this.loading = true;
                //let url = "http://127.0.0.1:8888/api/getlist"; //本地测试
                let url = "http://gavin.frpgz1.idcfengye.com/api/getlist"; //线上环境
                let queryStr = this.formatQry(opt);
                Axios.get(url+queryStr)
                .then(res=>res.data)
                .then(data=>{
                    this.loading = false;
                    if(data.code == 1){
                        if(data.datas && data.datas.icosList){
                            const icosList = data.datas.icosList;
                            icosList.forEach(item=>{
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
                            this.icosList = [...icosList];
                            this.allIcosList = [...icosList];
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
            },
            formatQry(opt={}){
                if(Object.keys(opt).length>0){
                    let queryStr = "?";
                    for(let [key,value] of Object.entries(opt)){
                        if(value){
                            queryStr += `${key}=${value}&`;
                        }
                    }
                    return queryStr.slice(0,-1);
                }else{
                    return ""
                }
            },
            //搜索框事件
            handleSearch(){
                this.getIcoList({key:this.key});
                this.rangeByLevelCode = 0;
                this.rangeByLevelClass = "el-icon-d-caret";
                this.rangeByStartCode = 0;
                this.rangeByStartClass = "el-icon-d-caret";
                this.rangeByEndCode = 0;
                this.rangeByEndClass = "el-icon-d-caret";
            },
            rangeList(key,code,list){
                //code为1表示正序，code=-1 表示逆序；
                if(list.length>0){
                    if(key =="ratingLevel"){
                        list = list.sort((x,y)=>{
                            return (x[key]*1-y[key]*1)*code;
                        });
                    }else{
                        list = list.sort((x,y)=>{
                            let a = Date.parse(new Date(x[key]));
                            let b = Date.parse(new Date(y[key]));
                            return (a-b)*code;
                        });
                    }
                } 
            },
            //按评价等级排序
            rangeByLevel(){
                this.rangeByLevelCode == 0? this.rangeByLevelCode = 1:this.rangeByLevelCode*=(-1);
                this.rangeByLevelCode == 1 && (this.rangeByLevelClass="el-icon-caret-bottom");
                this.rangeByLevelCode == -1 && (this.rangeByLevelClass="el-icon-caret-top");
                this.rangeList("ratingLevel",this.rangeByLevelCode,this.icosList);
                this.rangeByStartClass = "el-icon-d-caret";
                this.rangeByEndClass = "el-icon-d-caret";
            },
            //按开始时间排序
            rangeByStart(){
                this.rangeByStartCode == 0? this.rangeByStartCode = 1:this.rangeByStartCode*=(-1);
                this.rangeByStartCode == 1 && (this.rangeByStartClass="el-icon-caret-bottom");
                this.rangeByStartCode == -1 && (this.rangeByStartClass="el-icon-caret-top");
                this.rangeList("startTime",this.rangeByStartCode,this.icosList);
                this.rangeByLevelClass = "el-icon-d-caret";
                this.rangeByEndClass = "el-icon-d-caret";
            },
            //按结束时间排序
            rangeByEnd(){
                this.rangeByEndCode == 0? this.rangeByEndCode = 1:this.rangeByEndCode*=(-1);
                this.rangeByEndCode == 1 && (this.rangeByEndClass="el-icon-caret-bottom");
                this.rangeByEndCode == -1 && (this.rangeByEndClass="el-icon-caret-top");
                this.rangeList("endTime",this.rangeByEndCode,this.icosList);
                this.rangeByLevelClass = "el-icon-d-caret";
                this.rangeByStartClass = "el-icon-d-caret";
            },
            //筛选当前状态
            changeTimeStatus(e){
                const curTime = Date.parse(new Date());
                switch(e){
                    case 0:
                        this.icosList = [...this.allIcosList];
                        break;
                    case 1: //即将开始 curtTime < startTime
                        this.icosList = this.allIcosList.filter(ico=>{
                            let startTime = Date.parse(new Date(ico.startTime))
                            return curTime<startTime;
                        });
                        break;
                    case 2:
                        this.icosList = this.allIcosList.filter(ico=>{
                            let startTime = Date.parse(new Date(ico.startTime))
                            let endTime = Date.parse(new Date(ico.endTime))
                            return (curTime>startTime)&&(curTime<endTime);
                        });
                        break;
                    case 3:
                        this.icosList = this.allIcosList.filter(ico=>{
                            let endTime = Date.parse(new Date(ico.endTime))
                            return (curTime>endTime);
                        });
                        break;                      
                }

            },
            handleCheckedClarify(e){
                const checked = [...e];
                console.log("e",checked);
                if(checked.length>0){
                    this.icosList=[];
                    this.allIcosList.forEach(ico=>{
                        if(checked.includes(ico.classificationCode)){
                            this.icosList.push(ico);
                        }
                    })
                }else{
                    this.icosList = [...this.allIcosList];
                }
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
        overflow: hidden;
    }
    .search-wrap{
        border-bottom: 5px solid #f2f2f2;
        padding: 18px;
    }
    .search-bar{
        width: 660px;
        margin-bottom: 15px;
    }
    .search-time{
        margin-bottom: 12px;
    }
    .search-item{
        display: inline-block;
        width: 100px;
        font-weight: 900;
        color: rgba(0,0,0,0.6);
    }
    .search-class .search-item{
        vertical-align: top;
    }
    .search-checkbox{
        display: inline-block;
        width: 960px;
        overflow: hidden;
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
        width: 1088px;
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
        cursor: pointer;
    }
    .list-card:hover{
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
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
    .card-link{
        cursor: pointer;
        display: block;
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
