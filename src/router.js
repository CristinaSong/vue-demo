import Vue from "vue";
import VueRouter from "vue-router";
/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
Vue.use(VueRouter);


import page1 from "./page1";
import page2 from "./page2";

const routes=[
    {path:"/page1",component:page1},
    {path:"/page2",component:page2}
]


const router=new VueRouter({
    routes
})


export default router
