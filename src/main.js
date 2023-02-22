import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import VueRouter from "vue-router";
import MomoBuyPhoneCard from "./components/MomoBuyPhoneCard.vue";
import MomoChargePhoneCard from "./components/MomoChargePhoneCard.vue";
import PaymentInvoice from "./components/PaymentInvoice.vue";
import Recharge from "./components/Recharge.vue";
import ReportTransaction from "./components/ReportTransaction.vue";
import WithDrawMoney from "./components/WithDrawMoney.vue";
import PayooTransaction from "./components/PayooTransaction.vue";
import Counter from "./components/Counter.vue";
import store from "./store/store";


// Define router:
const routes = [{
        path: "/",
        component: MomoBuyPhoneCard
    },
    {
        path: "/momoChargePhoneCard",
        component: MomoChargePhoneCard
    },
    {
        path: "/paymentInvoice",
        component: PaymentInvoice
    },
    {
        path: "/recharge",
        component: Recharge
    },
    {
        path: "/reportTransaction",
        component: ReportTransaction
    },
    {
        path: "/withDrawMoney",
        component: WithDrawMoney
    },
    {
        path: "/payooTransaction",
        component: PayooTransaction
    },
    {
        path: "/counter",
        component: Counter
    }
];
const router = new VueRouter({ routes, mode: "history" });
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
}).$mount("#app");