<template>
    <div class="detail">
        <div class="detail-summary">
            <div class="detail-summary-title">
                <h2>title</h2>
                <p>一句话描述一句话描述一句话描述一句话描述一句话描述一句话描述一句话描述一句话描述</p>
            </div>

            <el-card shadow="hover" class="detail-summary-card clearfix">
                <div class="detail-summary-img">
                    <img src="https://img.alicdn.com/imgextra/i3/2203660023/TB2ZvI4kXXXXXX3XpXXXXXXXXXX_!!2203660023.jpg" alt="">
                </div>
                <div class="detail-summary-card-info">
                    <div class="detail-summary-times">
                        <p><b>开始日期：</b>2月3日</p>
                        <p><b>结束日期：</b>3月3日</p>
                    </div>
                    <div class="detail-summary-process">
                        <div>
                        <p><b>时间进度：</b></p>
                        <el-progress type="circle" :percentage="25"></el-progress>
                        </div>
                    </div>
                </div>
            </el-card>
        </div>
        <div class="detail-description">
              <el-table
                :data="tableData"
                stripe
                style="width: 50%"
                :show-header=false>
                <el-table-column
                prop="name"
                label="姓名"
                width="180">
                </el-table-column>
                <el-table-column
                prop="address"
                label="地址">
                </el-table-column>
            </el-table>
            <el-table
                :data="tableData2"
                stripe
                style="width: 50%"
                :show-header=false>
                <el-table-column
                prop="name"
                label="姓名"
                width="180">
                </el-table-column>
                <el-table-column
                prop="address"
                label="地址">
                </el-table-column>
            </el-table>
        </div>
        <div class="detail-memo">

        </div>
    </div>
</template>

<script>
import Axios from 'axios';
  export default {
    data() {
      return {
        tableData: [{
          name: '众筹时间',
          address: '-'
        }, {
          name: '价格',
          address: ' 1517 弄'
        }, {
          name: '开发进度',
          address: ' 1519 弄'
        }, {
          name: '项目类型',
          address: ' 1516 弄'
        }, {
          name: '众筹硬顶',
          address: ' 1516 弄'
        }, {
          name: '国家',
          address: ' 1516 弄'
        }],
        tableData2: [{
          name: '销售比例',
          address: ' 1516 弄'
        },{
          name: '实名认证',
          address: '-'
        }, {
          name: '接收代币',
          address: ' 1517 弄'
        }, {
          name: '网站',
          address: ' 1519 弄'
        }, {
          name: '白皮书',
          address: ' 1516 弄'
        }, {
          name: '评级',
          address: ' 1516 弄'
        }]
      }
    },
    mounted() {
        let id = this.$route.params.id;
        this.getDetail(id);
    },
    methods: {
      getDetail(id) {
          Axios.get(`http://localhost:8888/api/getdetail?id=${id}`)
                .then(res=>res.data)
                .then(data=>{
                    console.log(data);
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
    .detail-summary-title{
        margin-bottom: 12px;
    }
    .detail-summary-title h2{
        font-size: 36px;
    }
    .detail-summary-title p{
        font-size: 16px;
    }
    .detail-summary-card{
        display: flex;
    }
    .detail-summary-img{
        float: left;
        width: 660px;
    }
    .detail-summary-img img{
        width: 100%
    }
    .detail-summary-card-info{
        float: right;
        width: 200px;
    }
</style>
