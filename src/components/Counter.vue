<template>
  <div class="hello">
    <span>Clicked: {{$store.state.count}} times, count is {{getStatus}}</span><br/>
    <button class="left-button" @click="incrementAdd(payload)">+</button>
    <button @click="incrementSub(payload)">-</button>
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
  data(){
      return{
          payload:{
              name:"truongtm"
              ,age: 18
              ,type: ""
          }
      }
  },
  methods: {
    ...mapActions([
      'increment'
    ]),
    incrementAdd () {
      this.payload.type=types.INCREMENT;
      this.increment(this.payload);
    },
    incrementSub () {
      this.payload.type=types.DECREMENT;
      this.increment(this.payload);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left-button{
  margin: 0 10px 0 0;
}
</style>
