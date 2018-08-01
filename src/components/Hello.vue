<template>
  <div class="hello">
    <section>
      <p v-for="item in users" :key="item._id" class="users-list">
        B.Best欢迎您 {{ item.username }}
        <!-- <el-button @click="del_user(index, $event)">删除</el-button> -->
      </p>
    </section>
    <section>
      <el-button type="primary" @click="logout()">登出</el-button>
    </section>
  </div>
</template>

<script>
import api from '../axios.js'
export default {
  data(){
    return {
      users: ''
    }
  },
  created(){
    api.getUser().then((response) => {
      if(response.status === 401){
        this.$router.push('/login');
        //可以把无效的token清楚掉
        this.$store.dispatch('UserLogout');
      }else{
        this.users = response.data.result;
      }
    });
  },
  methods: {
    del_user(index, event){
      let opt = {
        id: this.users[index]._id
      };
      api.delUser(opt)
        .then(response => {
          console.log(response);

          this.$message({
            type: 'success',
            message: '删除成功'
          });
          //移除节点
          this.users.splice(index, 1);
        }).catch((err) => {
          console.log(err);
        })
    },
    logout() {
            //清除token
            this.$store.dispatch('UserLogout');
            if (!this.$store.state.token) {
                this.$router.push('/login')
                this.$message({
                    type: 'success',
                    message: '登出成功'
                })
            } else {
                this.$message({
                    type: 'info',
                    message: '登出失败'
                })
            }
        },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: #42b983;
}
section{
  text-align: center;
  padding: 6px 0;
}
.users-list{
  color: #666;
  font-size: 24px;
  text-align: center;
  padding: 6px 0;
}
</style>
