<template>
<div :id="'divLoading'">
    <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
    <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
      <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>
  </path>
</svg>
</div>

</template>

<script>
export default {
  name: "Loading",
  props: {},
  data() {
    return {};
  },
  methods: {},
  beforeMount() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
svg{
    width: 100px;
    height: 100px;
    display: inline-block;
    margin-top: 20%;
}
#divLoading {
      display: block;
    position: fixed;
    z-index: 100;
    background-color: #666;
    opacity: 0.8;
    background-repeat: no-repeat;
    background-position: center;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    text-align: center;
}
</style>

