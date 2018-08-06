<template>
    <div class="detail">
        <div class="detail-title">
            <h2><img :src="detail.smallImg" alt="">{{detail.icoTitle}}</h2>
            <p>{{detail.icoDescription}}</p>
        </div>
        <div class="detail-summary">
            <div class="detail-summary-img">
                <img :src="detail.largeImg" alt="">
            </div>
            <div class="detail-summary-info">
                <section>
                    <h3>开始时间</h3>
                    <p>{{detail.startTime}}</p>
                </section>
                <section>
                    <h3>结束时间</h3>
                    <p>{{detail.endTime}}</p>
                </section>
                <section>
                    <h3>等级</h3>
                    <span :class="rateLevelClass"></span>
                </section>
            </div>
        </div>
        <el-tabs type="border-card">
        <el-tab-pane label="众筹细节" class="detail-description detail-content">
                <el-table
                    :data="tableData"
                    stripe
                    style="width: 50%"
                    :show-header=false>
                    <el-table-column
                    prop="name"
                    label="属性"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="value"
                    label="值">
                    </el-table-column>
                </el-table>
                <el-table
                    :data="tableData2"
                    stripe
                    style="width: 50%"
                    :show-header=false>
                    <el-table-column
                    prop="name"
                    label="属性"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="value"
                    label="值">
                    </el-table-column>
                </el-table>
        </el-tab-pane>
        <el-tab-pane label="白皮书" class="detail-content">{{this.detail.whitepaper}}</el-tab-pane>
        <el-tab-pane label="评级" class="detail-content">{{this.detail.rating}}</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import Axios from 'axios';
  export default {
    data() {
      return {
          detail:{},
          rateLevelClass:"",
        tableData: [{
          name: '众筹时间',
          value: '-'
        }, {
          name: '价格',
          value: '-'
        }, {
          name: '开发进度',
          value: '-'
        }, {
          name: '项目类型',
          value: '-'
        }, {
          name: '众筹硬顶',
          value: '-'
        }],
        tableData2: [{
          name: '销售比例',
          value: '-'
        },{
          name: '实名认证',
          value: '-'
        }, {
          name: '接收代币',
          value: '-'
        }, {
          name: '网站',
          value: '-'
        }, {
          name: '发行国家',
          value: '-'
        }]
      }
    },
    mounted() {
        let id = this.$route.params.id;
        this.getDetail(id);
    },
    methods: {
      getDetail(id) {
          let url = "http://gavin.frpgz1.idcfengye.com/api/getdetail";
          Axios.get(`${url}?id=${id}`)
                .then(res=>res.data)
                .then(data=>{
                    console.log(data);
                    if(data.code ==1&&data.datas){
                        this.detail = data.datas.detailInfo||{};
                        switch(this.detail.ratingLevel){
                            case "1":
                                this.rateLevelClass = "rateLevelA";
                                break;
                            case "2":
                                this.rateLevelClass = "rateLevelB";
                                break;  
                            case "3":
                                this.rateLevelClass = "rateLevelC";
                                break;   
                        }
                        this.tableData=[{
                            name: '众筹时间',
                            value: this.detail.publicTime||"-"
                            }, {
                            name: '价格',
                            value: this.detail.price||"-"
                            }, {
                            name: '开发进度',
                            value: this.detail.devPhase||"-"
                            }, {
                            name: '项目类型',
                            value: this.detail.classification||"-"
                            }, {
                            name: '众筹硬顶',
                            value: this.detail.hardCap||"-"
                        }];
                        this.tableData2=[{
                            name: '销售比例',
                            value: this.detail.sellRate?(this.detail.sellRate*100+"%"):'-'
                            },{
                            name: '实名认证',
                            value: this.detail.kyc?(this.detail.kyc==0?'未认证':'已认证'):'-'
                            }, {
                            name: '接收代币',
                            value: this.detail.tokenReceive||'-'
                            }, {
                            name: '网站',
                            value: this.detail.website||'-'
                            }, {
                            name: '国家',
                            value: this.detail.nationality||"-"
                        }]
                    }else{
                        console.log(data.msg)
                    }
                })
      }
    }
  }
</script>
<style scoped>
    .detail{
        background-color: #fff;
        min-height: 660px;
        width: 1120px;
        min-width: 1120px;
        margin: 0 auto;
        text-align: left;
        font-size: 14px;
        position: relative;
        padding: 50px;
    }
    .detail-title{
        margin-bottom: 36px;
    }
    .detail-title h2{
        font-size: 36px;
        height: 100px;
        line-height: 100px;
        margin-bottom: 36px;
    }
    .detail-title h2 img{
        height: 100px;
        width: 100px;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 36px;
    }
    .detail-title p{
        font-size: 18px;
        word-wrap:break-word; 
        word-break:break-all;
    }
    .detail-summary{
        display: flex;
        justify-content: space-between;
        margin-bottom: 36px;
    }
    .detail-summary>div{
        height: 400px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    }
    .detail-summary-img{
        width: 660px;
    }
    .detail-summary-img img{
        width: 100%;
        height: 100%;
    }
    .detail-summary-info{
        width: 320px;
        padding: 42px 24px;
    }
    .detail-summary-info h3{
        font-size: 20px;
        font-weight: 900;
        color: #999;
        text-align: center;
        margin-bottom: 12px;
    }
    .detail-summary-info p{
        margin-bottom: 16px;
        font-size: 18px;
        text-align: center;
    }
    .detail-summary-info span{
        margin: 0 auto;
        display: block;
        width: 100px;
        height: 100px;
        background-size: cover;
    }
    .rateLevelA{
        background: url("http://47.104.31.231/image/static/levela.png") no-repeat;
    }
    .rateLevelB{
        background: url("http://47.104.31.231/image/static/levelb.png") no-repeat;
    }
    .rateLevelC{
        background: url("http://47.104.31.231/image/static/levelc.png") no-repeat;
    }
    .detail-description{
        display: flex;
    }
    .detail-content{
        min-height: 300px;
    }
</style>
