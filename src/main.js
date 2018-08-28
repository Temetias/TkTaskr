import Vue from "vue";
import VueResource from "vue-resource";
import store from "@/store";
import App from "./App";
import router from "./router";
import firebase from "firebase";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faCheck, faExclamation, faWalking, faCog, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config } from "@/firebaseConfig";

library.add(faPlus, faCheck, faExclamation, faWalking, faCog, faCaretUp);

Vue.use(VueResource);
Vue.config.productionTip = false;

firebase.initializeApp(config);

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
    el: "#app",
    store,
    router,
    template: "<App/>",
    components: { App },
});
