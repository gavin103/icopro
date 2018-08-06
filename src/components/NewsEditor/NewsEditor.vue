<template>
    <div class="editor" label-width="80px" >
        <section class="summary">
            <p><span>标题：</span><el-input v-model="form.title"></el-input></p>
            <p><span>摘要：</span><el-input type="textarea" v-model="form.desc"></el-input></p>
            <p class="btn-group">
                <el-button type="primary" @click="onSubmit">创建</el-button>
                <el-button>取消</el-button>
            </p>
        </section>
        <section class="text">
            <textarea :value="mdNews" @input="update"></textarea>
            <div v-html="compiledMarkdown"></div>
        </section>
    </div>
</template>

<script>
import Axios from 'axios';
import marked from 'marked';
import _ from 'lodash';
  export default {
    data() {
      return {
        form:{
            title:'',
            desc:'',
        },
        mdNews: '',
      };
    },

    mounted() {

    },
    computed: {
        compiledMarkdown: function () {
            return marked(this.mdNews, { sanitize: true })
        }
    },
    methods: {
        update: _.debounce(function (e) {
            this.mdNews = e.target.value
        }, 300),
        onSubmit:function(){
            const t = new Date();
            Axios.post('/api/addmdnews',{
                // Axios.post('http://localhost:8888/api/addmdnews',{
                title: this.form.title,
                summary: this.form.desc,
                mdNews: this.mdNews,
                createTime: Date.parse(t),
            }).then(res=>res.data)
            .then(data=>{
                if(data.code ==1){
                    window.location.href= (window.location.origin+'/news');
                }
            })
        }
    }
  };
</script>
<style scoped>
.editor {
  margin: 0 auto;
  padding: 18px 36px;
  width: 1120px;
  min-height: 800px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
  background-color: #fff;
}
.summary p{
    padding-top: 12px;
}
.text{
    border: 1px solid #eee;
    margin-top: 12px;
    min-height: 600px;
}
.text textarea,
.text div {
  display: inline-block;
  width: 49%;
  min-height: 600px;
  vertical-align: top;
  box-sizing: border-box;
  padding: 20px;
}

.text textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
}
.text code {
  color: #f66;
}
</style>
