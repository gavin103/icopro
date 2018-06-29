<template>
    <div class="crm">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="项目名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="项目描述">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="等级">
          <el-radio-group v-model="form.resource">
            <el-radio label="A"></el-radio>
            <el-radio label="B"></el-radio>
            <el-radio label="C"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="所在国家">
          <el-input v-model="form.nation"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="通证分类">
            <el-option label="证券" value="shanghai"></el-option>
            <el-option label="金融" value="beijing"></el-option>
            <el-option label="教育" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">新增</el-button>
          <el-button type="primary">修改</el-button>
          <el-button type="primary">删除</el-button>
          <el-button type="primary">重置</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          nation: '',
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
<style scoped>
    .crm{
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
    
</style>
