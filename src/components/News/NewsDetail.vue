<template>
    <div class="news-detail" v-html="news">
    </div>
</template>

<script>
import Axios from 'axios';
import marked from 'marked';
  export default {
    data() {
      return {
          md:'',
          news:''
      }
    },
    mounted() {
        let id = this.$route.params.id;
        this.getDetail(id);
    },
    methods: {
      getDetail(id) {
          let url = "/api/getmdnews";
          Axios.get(`${url}?id=${id}`)
                .then(res=>res.data)
                .then(data=>{
                    if(data.code ==1&&data.datas){
                        this.md = data.datas.mdNewsList[0];
                        this.news = marked(data.datas.mdNewsList[0].mdNews, { sanitize: true })
                    }else{
                        console.log(data.msg)
                    }
                })
      }
    }
  }
</script>
<style scoped>
    .news-detail{
        width: 1120px;
        margin: 0  auto;
        min-height: 800px;
        background: #fff;
        padding: 50px;
    }
</style>
