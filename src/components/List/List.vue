<template>
    <div class="list">
        <ul class="search-bar">
            <li>
                <span class="search-item">搜索：</span>
                <el-select
                    v-model="value9"
                    multiple
                    filterable
                    remote
                    reserve-keyword
                    placeholder="请输入关键词"
                    :remote-method="remoteMethod"
                    :loading="loading">
                    <el-option
                    v-for="item in options4"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </li>
            <li>
                <span class="search-item">通证分类</span>
                <el-radio-group v-model="selectedClarify">
                    <el-radio v-for="item in clarification" :label="item.code" :key="item.code">{{item.name}}</el-radio>
                </el-radio-group>
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
                <el-button type="text" class="list-rate-btn">按评价等级排序</el-button>
                <el-button type="text" class="list-rate-btn">按结束时间排序</el-button>
                <el-button type="text" class="list-rate-btn">按开始时间排序</el-button>
            </section>
            <el-card v-for="ico in icosList" :key="ico.icoId" shadow="hover" class="list-card clearfix">
                <router-link class="card-img" to="/icodetail" tag="div">
                    <img src="https://icobench.com/images/icos/icons/snbl.jpg" alt="">
                </router-link>
                <div class="card-info">
                    <h3><i class="card-info-rocket"></i>{{ico.icoTitle}}</h3>
                    <p>{{ico.icoDescription}}</p>
                    <el-progress :stroke-width="8" :show-text=false :percentage="70"></el-progress>
                </div>
                <div class="card-rate">
                    <el-rate
                        v-model="rate"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}">
                    </el-rate>
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
            states: ["Alabama", "Alaska", "Arizona",
            "Arkansas", "California", "Colorado",
            "Connecticut", "Delaware", "Florida",
            "Georgia", "Hawaii", "Idaho", "Illinois",
            "Indiana", "Iowa", "Kansas", "Kentucky",
            "Louisiana", "Maine", "Maryland",
            "Massachusetts", "Michigan", "Minnesota",
            "Mississippi", "Missouri", "Montana",
            "Nebraska", "Nevada", "New Hampshire",
            "New Jersey", "New Mexico", "New York",
            "North Carolina", "North Dakota", "Ohio",
            "Oklahoma", "Oregon", "Pennsylvania",
            "Rhode Island", "South Carolina",
            "South Dakota", "Tennessee", "Texas",
            "Utah", "Vermont", "Virginia",
            "Washington", "West Virginia", "Wisconsin",
            "Wyoming"]
        }
        },
        mounted() {
            this.list = this.states.map(item => {
                return { value: item, label: item };
            });
            this.getIcoList();
        },
        methods: {
            remoteMethod(query) {
                if (query !== '') {
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                    this.options4 = this.list.filter(item => {
                    return item.label.toLowerCase()
                        .indexOf(query.toLowerCase()) > -1;
                    });
                }, 200);
                } else {
                this.options4 = [];
                }
            },
            getIcoList(){
                Axios.get("http://localhost:80/api/getlist.php")
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
    .search-bar{
        border-bottom: 5px solid #f2f2f2;
        padding: 18px;
    }
    .search-bar li{
        height: 36px;
        line-height: 36px;
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
    .card-info h3 i{
        display: inline-block;
        width: 18px;
        height: 18px;
        margin-right: 10px;
        /* background-image: url('rocket.png') 100% 100% no-repeat; */
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
        padding-top: 38px;
    }
    
</style>
