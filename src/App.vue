<template>
  <div id="app">
    <header>
        <div class="head-wrap clearfix">
          <h1 class="head-title">
            <router-link to="/" tag="span">
            <span class="head-logoB"></span>
            <span class="head-logobest"></span>
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

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
}
header{
    background-color: #303035;
    height: 72px;
}
.head-wrap{
  color: white;
  width: 1120px;
  margin: 0 auto;
  overflow: hidden;

}
.head-wrap .head-title{
  float: left;
  height: 100%;
  line-height: 72px;
  cursor: pointer;
}
.head-wrap .head-title .head-logoB{
  display: inline-block;
  height: 42px;
  width: 34px;
  background-image: url(../static/img/logoB.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  vertical-align: middle;
}
.head-wrap .head-title .head-logobest{
  margin-left: 32px;
  display: inline-block;
  height: 18px;
  width: 86px;
  background-image: url(../static/img/logobest.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  vertical-align: middle;
}
.head-wrap .head-nav{
  float: right;
  height: 100%;
  padding-top: 11px;
  
}
</style>
