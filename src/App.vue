<template>
  <div id="app">
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#"><a @click="redirectToPage('/')">Home page</a></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#"><a @click="redirectToPage('momoChargePhoneCard')">momoChargePhoneCard</a></b-nav-item>
        <b-nav-item href="#"><a @click="redirectToPage('paymentInvoice')">paymentInvoice</a></b-nav-item>
        <b-nav-item href="#"><a @click="redirectToPage('recharge')">recharge</a></b-nav-item>
        <b-nav-item href="#"><a @click="redirectToPage('reportTransaction')">reportTransaction</a></b-nav-item>
        <b-nav-item href="#"><a @click="redirectToPage('withDrawMoney')">withDrawMoney</a></b-nav-item>
        <b-nav-item href="#"><a @click="redirectToPage('payooTransaction')">payooTransaction</a></b-nav-item>
        <b-nav-item href="#"><a @click="redirectToPage('counter')">counter</a></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    // Recharge,WithDrawMoney
  },
  methods: {
    redirectToPage(link) {
      switch (link) {
        case "momoChargePhoneCard":
          this.$router.push("/momoChargePhoneCard",()=>{});
          break;
        case "paymentInvoice":
          this.$router.push("/paymentInvoice",()=>{});
          break;
        case "recharge":
          this.$router.push("/recharge",()=>{});
          break;
        case "reportTransaction":
          this.$router.push("/reportTransaction",()=>{});
          break;
        case "withDrawMoney":
          this.$router.push("/withDrawMoney",()=>{});
          break;
        case "payooTransaction":
          this.$router.push("/payooTransaction",()=>{});
          break;
        case "counter":
          this.$router.push("/counter",()=>{});
          break;

        default:
          this.$router.push("/",()=>{});
          break;
      }
    },
  },
};
</script>

<style lang="scss">
@import "./styles/color.scss";
@import "../src/styles/common.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 20px 20px 0 20px;
  background-color: $reset-border-color;
  display: block;
  overflow: hidden;
}
</style>
