<template>
    <nav class="aside-nav">
        <ul class="aside-nav-list">
            <router-link to="/icolist" tag="li" active-class="active" class="aside-nav-list">
                ICOs
            </router-link>
            <router-link to="/news" tag="li" active-class="active" class="aside-nav-list">
                项目新闻
            </router-link>
            <router-link to="/profile" tag="li" active-class="active" class="aside-nav-list">
                个人中心
            </router-link>
            <li v-if="users" class="aside-nav-list">您好，{{users.username}}}</li>
            <router-link v-else to="/login" tag="li" active-class="active" class="aside-nav-list">
                登录/注册
            </router-link>
        </ul>
    </nav>
</template>

<script>
export default {
      
    data(){
        return {users:''}
    },
    mounted() {
        console.log(this.users)
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
}
</script>

<style scoped>
.aside-nav{
    height: 100%;
}
.aside-nav-list{
    display: flex;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    color: #FBFBFB;
    cursor: pointer;
    margin-left: 36px;
}
.aside-nav-list .active{
    color: #F0B90B;
}
.aside-nav-list *:hover{
    color: #F0B90B;
}
            
</style>