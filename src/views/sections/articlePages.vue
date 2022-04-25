<template>
    <div class="main_container">
        <!-- 这个样式名是github库渲染指定名字，不能修改 -->
        <div class="markdown-body">
            <component v-bind:is="moveComponent"></component>
        </div>
    </div>
</template>
<script>
import { getCom } from '../../service/uselessFunction.js';
import 'github-markdown-css';
import 'highlight.js/styles/github.css'

export default {
    name: 'articlePages',
    data() {
        return{
        }
    },
    components: getCom,
    mounted(){
        if(!this.moveComponent){
            this.$router.push({
                path: '/'
            })
        }
    },
    computed: {
        moveComponent: function(){
            return this.$route.query.path;
        }
    },
}
</script>
<style lang="less" scoped>
.main_container{
    .markdown-body{
        margin-top: 50px;
    }    
}

</style>