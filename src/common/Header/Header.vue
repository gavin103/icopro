<template>
    <nav class="aside-nav">
        <ul class="aside-nav-list">
            <router-link to="/icolist" tag="li" active-class="active" class="aside-nav-list">
                ICOs
            </router-link>
            <router-link to="/information" tag="li" active-class="active" class="aside-nav-list">
                关于我们
            </router-link>
            <router-link to="/profile" tag="li" active-class="active" class="aside-nav-list">
                个人中心
            </router-link>
            <router-link to="/login" tag="li" active-class="active" class="aside-nav-list">
                登录/注册
            </router-link>
        </ul>
    </nav>
</template>

<script>
export default {
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
    color: #7f8c8d;
    cursor: pointer;
    padding: 0 20px;
}
.aside-nav-list .active{
    color: #FBFBFB;
}
.aside-nav-list *:hover{
    /* background: rgba(176, 175, 168, 0.3); */
    background-color: rgba(0,0,0,0.6);
    color: #eee;
}
            
</style>