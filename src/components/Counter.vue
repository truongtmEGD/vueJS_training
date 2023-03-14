<template>
  <div class="hello">
    <span>Clicked: {{ $store.state.count }} times, count is {{ getStatus }}</span><br />
    <button class="left-button" @click="incrementAdd(payload)">+</button>

    <button @click="incrementSub(payload)">-</button>
    <p ref="usernameInput" id="someName">{{ dataTest }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import types from "../store/types";
export default {
  name: 'Counter',
  props: {
    msg: String
  },
  computed: mapGetters(['getStatus']),
  data() {
    return {
      payload: {
        name: "truongtm"
        , age: 18
        , type: ""
      },
      dataTest: 0
    }
  },
  methods: {
    ...mapActions([
      'increment'
    ]),
    incrementAdd() {
      this.payload.type = types.INCREMENT;
      this.increment(this.payload);
    },
    incrementSub() {
      this.payload.type = types.DECREMENT;
      this.increment(this.payload);
    },

  },
  beforeCreate() {
    // duoc goi khi commpent truoc khi duoc tao ra
    console.log('before create');
    console.log("gia tri property" + this.payload.name);
    console.log("gia tri DOM" + document.getElementById("someName").innerHTML);
  },
  created() {
    // duoc goi khi commpent da tao ra xong data va method
    console.log('created');
    console.log("gia tri property" + this.payload.name);
    console.log("gia tri DOM" + document.getElementById("someName").innerHTML);
  },
  beforeMount() {
    // duoc goi truoc khi component gan template vao DOM that
    console.log('before mount')
    console.log("gia tri property" + this.payload.name);
    console.log("gia tri DOM" + document.getElementById("someName").innerHTML);
  },
  mounted() {
    // duoc goi khi component da gan template vao DOM that
    console.log('mounted')
    console.log("gia tri property" + this.payload.name);
    console.log("gia tri DOM" + document.getElementById("someName").innerHTML);

    setInterval(() => {
      this.dataTest++
    }, 10000);

    
  },
  beforeUpdate() {
    // duoc goi khi doi tuong da gan vao DOM, truoc khi du lieu duoc thay doi
    console.log("Data updated: " + this.dataTest)
    console.log("gia tri DOM" + document.getElementById("someName").innerHTML);
  },
  updated() {
    // duoc goi khi doi tuong da gan vao DOM, sau khi du lieu duoc thay doi
    // gia tri dataTest o phase beforeUpdate va updated la giong nhau
    console.log("Data beforeUpdate: " + this.dataTest)
    console.log("gia tri DOM" + document.getElementById("someName").innerHTML);
  },
  beforeDestroy() {
    // duoc goi truoc khi bien hoac component bi xoa
    console.log('beforeDestroy123')
    //  this.dataTest = null
    //  delete this.dataTest
  },
  destroyed() {
    // duoc goi sau khi bien hoac component bi xoa
    console.log('destroyed123')
    console.log('destroyed && content = ' + this.dataTest)

    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left-button {
  margin: 0 10px 0 0;
}
</style>
