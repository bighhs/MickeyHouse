<template>
  <div id="app">
    <header>
      <div class="nav">
        <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" 
        :background-color="color.background" :text-color="color.text" default-active="2" :active-text-color="color.active">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">BLOG</el-menu-item>
            <el-menu-item index="3">关于</el-menu-item>
        </el-menu>
      </div>
      <div class="downline"></div>
    </header>
    <article>
      <!-- 此处为内容渲染处 -->
      <section><router-view></router-view></section>     
    </article>
  </div>
</template>

<script>
export default {
  name: 'mainStructure',
  data(){
    return{
      color: {
        background: '#ffffff',
        text: '#303133',
        active: '#409EFF'
      },
    }
  },
  methods:{
    handleSelect(key){
      if(key === '1')
      this.$router.push({path: '/welcome'});
      if(key === '2')
      this.$router.push({path: '/blog'});
      if(key === '3')
      this.$router.push({path: '/about'});
    },
  }
}
</script>

<style lang="less" scoped>
#app{
  height: 110vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  header{
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;
    margin-bottom: 2px;
    .nav{
      display: flex;
      justify-content: space-evenly;
      flex-grow: 1;
      width: 100%;
    }
    .downline{
      width: 70%;
      padding-top: 1px;
      height: 1px;
      background-color: #dcdfe6;
      margin-right: auto;
      margin-left: auto;
    }
  }
  article{
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    section{
      width: 80%;
      min-height: 90vh;
      flex-grow: 1;
      margin-right: auto;
      margin-left: auto;
    }
  }
}
</style>
