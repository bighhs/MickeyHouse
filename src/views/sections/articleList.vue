<template>
    <div class="maincontainer">
        <article>
            <div class="searchBox">
                <el-input placeholder="输入搜索的博文" prefix-icon="el-icon-search" v-model="searchBox" @change="handleSearch"></el-input>
            </div>
            <div class="cardBody">
                <div class="cardIndex">
                    <div class="tag"></div>
                    <el-menu default-active="all" class="el-menu-vertical-demo" @select="handleModuleSelect">
                        <el-menu-item v-for="(value, key, index) in articleGrounp" :key="index" :index="value.module">
                            <span slot="title">{{ value.name }}</span>
                        </el-menu-item>
                    </el-menu>
                </div>
                <div class="cardContainer">
                    <div class="cardStlye" shadow="hover" v-for="(value, key, index) in articleData" :key="index" @click="handleArticleSelect(value.path)">
                        <div class="clearfix title">
                            <span>{{ value.title }}</span>
                        </div>
                        <div class="overview">
                            {{ value.overview }}
                        </div>
                    </div>            
                </div>                
            </div>
            
        </article>

        <footer>
            <div class="webMsg">
            <!-- 网页底部信息 -->
            <p>powerBy&nbsp;:&nbsp;kokodayo<br/></p>
            <p>&nbsp;&nbsp;buildBy&nbsp;:&nbsp;Vue</p>
            </div>
        </footer>
    </div>
</template>
<script>
import articleData from '../../assets/article/articleList.js'

export default {
    name: 'articleList',
    data(){
        return{
            searchBox: '',
            selectMenu: 'all',
        }
    },
    methods: {
        handleSearch(){
            return;
        },
        handleModuleSelect(index){
            this.selectMenu = index;
        },
        handleArticleSelect(value){
            this.$router.push({
                path: '/articlePages',
                query: {
                    path: value
                }
            })
        }
    },
    mounted(){

    },
    computed: {
        articleData(){
            // 取得目录下文章列表
            let feedback = new Array();
            if(this.selectMenu === 'all'){
                for(let child in articleData){
                    if(child !== 'example'){

                        for(let item in articleData[child]){
                            if(item !== 'moduleName'){
                                let target = articleData[child][item];
                                let articlePath = item; 
                                feedback.push({
                                    title: target.title,
                                    overview: target.overview,
                                    path: articlePath
                                })
                            }
                        }
                    }
                }
            }
            else{

                for(let item in articleData[this.selectMenu]){
                    if(item !== 'moduleName'){
                        let target = articleData[this.selectMenu][item];
                        let articlePath = item;
                        feedback.push({
                            title: target.title,
                            overview: target.overview,
                            path: articlePath
                        })
                    }
                }
            }
            return feedback;
        },
        articleGrounp(){
            let data = articleData;
            let feedback = new Array();
            for(let child in data){
                // 删除初始化的文章归类列表与例子列表，并且加载所有创建的列表名
                if(child !== 'initmodule' && child !== 'example'){
                    feedback.push({name: articleData[child].moduleName, module: child})
                }
            }

            feedback.push({name: '全部', module: 'all'});
            // 表示文章列表中的所有文章
            return feedback;
        }
    }
}
</script>
<style lang='less' scoped>
.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both
}
.maincontainer{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    article{
        display: flex;
        flex-direction: column;
        .searchBox{
            width: 90%;
            margin: 50px auto 20px auto;
        }
        .cardBody{
            display: flex;
            justify-content: space-evenly;
            .cardIndex{
                display: flex;
                flex-direction: column;
                width: 35%;
            }
            .cardContainer{
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                .cardStlye{
                    margin-left: auto;margin-right: auto;
                    margin-bottom: 10px;
                    border-radius: 4px;
                    border: 1px solid #EBEEF5;
                    overflow: hidden;
                    color: #303133;
                    width: 90%;
                    &:hover{
                        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
                    }
                    .title{
                        padding: 18px 14px 10px 14px;
                        border-bottom: 1px solid #EBEEF5;
                        font-weight: bold;
                    }
                    .overview{
                        padding: 8px 14px 10px 14px;
                        min-height: 50px;
                        font-size: 14px;
                    }
                }                
            }            
        }

    
    }
    footer{
      width: 50%;
      height: 80px;
      margin-right: auto;
      margin-left: auto;
      padding-top: 10px;
      padding-bottom: 10px;
      border-top: 1px solid #dcdfe6;
      color: #d0d3da;
      font-size: 10px;
      .webMsg{
        width: 20%;
        margin-right: auto;
        margin-left: auto;
        line-height: 15px;
      }
    }
}
</style>