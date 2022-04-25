<template>
  <div id="app">
    <transition :name="chosenClass">
      <router-view></router-view>    
    </transition>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      // 可以选择页面切换样式 fadeEffect和slideEffect
      chosenClass: 'slideEffect'
    }
  },
  watch:{
    $route(newValue, oldValue){
      if(this.chosenClass[0] === 's'){
        if(newValue.meta.pageIndex > oldValue.meta.pageIndex){
          this.chosenClass = 'slideEffectLeft';
        }else{
          this.chosenClass = 'slideEffectRight';
        }        
      }
    }
  }
}
</script>

<style scoped>
#app{
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}
.slideEffectRight-enter-active,.slideEffectRight-leave-active,
.slideEffectLeft-enter-active,.slideEffectLeft-leave-active{
  transition: all .5s;
  position: absolute;
}
.slideEffectRight-enter,
.slideEffectLeft-leave-active{
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slideEffectRight-leave-active,
.slideEffectLeft-enter{
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
</style>
