import Vue from "vue";
import VueRouter from "vue-router";
import pages from "./pages";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if(onResolve || onReject) { return originalPush.call(this, location, onResolve, onReject); }
    return originalPush.call(this, location).catch(err=>err);
}

const router = new VueRouter({
    routes: [],
});

router.addRoutes(pages);
export default router;