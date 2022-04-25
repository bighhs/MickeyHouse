<template>
    <div class="main_container" @mousemove="backgroundFollow">
        <header ref="header">
            <div class="bland">author</div>
            <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" 
            :background-color="color.background" :text-color="color.text" default-active="1" :active-text-color="color.active">
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">BLOG</el-menu-item>
                <el-menu-item index="3">关于</el-menu-item>
            </el-menu>
            <div class="searchBar">
                <el-input placeholder="输入搜索的博文" prefix-icon="el-icon-search" v-model="searchBox" @change="handleSearch"></el-input>
            </div>
        </header>
        <div class="title" @mousemove="backgroundFollow">WELCOME</div>
    </div>
</template>
<script>
export default {
    name: 'welcome',
    data() {
        return{
            color: {
                background: '#ffffff',
                text: '#303133',
                active: '#409EFF'
            },
            searchBox: ''
        }
    },
    mounted() {
        this.$refs.header.style.backgroundColor = this.color.background;
    },
    methods: {
        backgroundFollow(e){
            // 背景跟随鼠标移动
            let maxScrollY = window.innerWidth - window.innerHeight;
            let maxScrollX = - maxScrollY;
            if(maxScrollY<0) maxScrollY = 0;
            let offsetY = (e.pageY/2)>maxScrollY ? maxScrollY : (e.pageY/2);
            if(maxScrollX<0) maxScrollX = 0;
            let offsetX = (e.pageX/2)>maxScrollX ? maxScrollX : (e.pageX/2);
                // 指向主容器(防止事件冒泡失效导致的背景跳动)
            if(e.path[0]._prevClass === 'main_container'){
                e.path[0].style.backgroundPositionX = `-${offsetX}px`;
                e.path[0].style.backgroundPositionY = `-${offsetY}px`;                
            }else{
                e.path[1].style.backgroundPositionX = `-${offsetX}px`;
                e.path[1].style.backgroundPositionY = `-${offsetY}px`;                   
            }
        },
        handleSelect(key){
            if(key === '1')
            this.$router.push({path: '/welcome'});
            if(key === '2')
            this.$router.push({path: '/blog'});
            if(key === '3')
            this.$router.push({path: '/about'});
        },
        handleSearch(){
            this.$router.push({
                path: '/blog',
                query: {
                    searchText: this.searchBox
                }
            });
        }
    }
}
</script>
<style lang="less" scoped>
.main_container{
    height: 100%;
    width: 100%;
    background-image: url(../assets/pic/cywl-welcome.jpg);
    //  background-image: linear-gradient(to bottom right, rgba(255, 0, 0, 0.7), rgba(255, 122, 0, 0.7), rgba(255, 255, 0, 0.7), rgba(0, 255, 0, 0.7), rgba(0, 255, 255), rgba(0, 0, 255, 0.7), rgba(255, 0, 255, 0.7));
    background-repeat: no-repeat;
    background-size: cover;
    .title{
        width: 300px;
        height: 60px;
        position: absolute;
        top: 0;bottom: 0;left: 0;right: 0;
        margin: auto auto;
        text-align: center;
        font-size: 40px;
        font-weight: bold;
        color: rgba(4, 177, 134, 0.8);
    }
    header{
        display: flex;
        justify-content: space-evenly;
        line-height: 60px;
        .bland{
            width: 30%;
            padding-bottom: 1px;
            text-align: center;
        }
        .searchBar{
            width: 30%;
            padding-bottom: 1px;
        }
    } 
}
</style>
