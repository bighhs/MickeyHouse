import Vue from "vue";
import Vuex from "vuex";
import mainData from "./module/mainData";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{},
    actions:{},
    mutations:{},
    modules:{
        mainData,
    },
})