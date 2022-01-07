<template>
  <div id="app">
    <Header id="header"></Header>
    <main id="main">
      <router-view/>
    </main>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
export default {
  name: 'App',
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="less">
@import "./assets/common.less";
#app {
  text-align: center;
  color: #000;
  display: flex;
  flex-direction: column;
}
#header {
  box-sizing: border-box;
}
#footer {
  box-sizing: border-box;
  margin-top: 50px;
}
#main {
  min-height: 1000px;
  box-sizing: border-box;
}

</style>
