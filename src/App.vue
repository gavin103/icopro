<template>
  <div id="app">
    <header>
        <div class="head-wrap clearfix">
          <h1 class="head-title">
            <router-link to="/" tag="span">
            币拾
            </router-link>
          </h1>
          <section class="head-nav">
            <v-head />
          </section>
        </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './common/Header/Header';
export default {
  name: 'app',
    components: {
        'v-head': Header
    },
  data() {
    return {
      activeName: 'second'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
}
header{
    background-color: #303035;
    height: 50px;
}
.head-wrap{
  color: white;
  width: 1120px;
  margin: 0 auto;
}
.head-wrap .head-title{
  float: left;
  height: 100%;
  line-height: 50px;
  font-size: 23px;
  color: white;
  cursor: pointer;
}
.head-wrap .head-nav{
  float: right;
  height: 100%;
}
</style>
