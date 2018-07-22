<template>
    <div class="news">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="BEST快讯" name="first">
                <section class="news-item">
                    <h3>今日 7月22日</h3>
                    <el-collapse v-model="activeNews">
                    <el-collapse-item title="FCoin公告：7月20日、21日FT存在价格异动 存在市场恶意做空行为" name="1">
                        <div>FCoin发布公告称，FT/USDT、FT/BTC、FT/ETH交易对，2018年7月20日、2018年7月21日连续二个交易日价格跌幅累计超过20%，属于交易异常波动的情况。经过调查，发现FT价格遭到刻意打压（通过以诱导市场方向为目的的连续程序化交易），FT运营团队现已将相关数据上报FCoin平台，并报请FCoin平台采取措施限制相关恶意做空行为。</div>
                    </el-collapse-item>
                    <el-collapse-item title="FOne运作规则（保荐机构）公示" name="2">
                        <div>FCoin于今日凌晨发布FOne交易区保荐机构运作规则公示，公示显示：
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
                        <div>FCoin发布公告称，FT/USDT、FT/BTC、FT/ETH交易对，2018年7月20日、2018年7月21日连续二个交易日价格跌幅累计超过20%，属于交易异常波动的情况。经过调查，发现FT价格遭到刻意打压（通过以诱导市场方向为目的的连续程序化交易），FT运营团队现已将相关数据上报FCoin平台，并报请FCoin平台采取措施限制相关恶意做空行为。</div>
                    </el-collapse-item>
                    <el-collapse-item title="FOne运作规则（保荐机构）公示" name="2">
                        <div>FCoin于今日凌晨发布FOne交易区保荐机构运作规则公示，公示显示：
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
            <el-tab-pane label="资讯热点" name="second">
                <el-card class="box-card">
                    <div>
                        内容
                    </div>
                </el-card>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import Axios from 'axios';
  export default {
    data() {
      return {
        activeName: 'first',
        activeNews: ['1','2'],
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
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
</style>
