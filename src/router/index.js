import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/Main";
import Login from "@/components/Login";
import store from "../store";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            redirect: {
                name: "login",
            },
        },
        {
            path: "/login",
            name: "login",
            component: Login,
        },
        {
            path: "/main",
            name: "main",
            component: Main,
            beforeEnter: (to, from, next) => {
                /* if (store.state.user.email) { */
                    // TODO: remove the comments.
                    next();
               /*  } */
            },
        },
    ],
});
