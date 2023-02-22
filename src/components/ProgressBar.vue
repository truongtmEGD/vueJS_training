<template>
  <ul id="progressbar">
          <li class="active">
            {{textFirst}}<i class="far fa-credit-card icon-process-w" :class="classObject"></i>
          </li>
          <li class="">Xác nhận<i class="fas fa-flag icon-process"></i></li>
          <li class="">
            Hoàn tất<i class="fas fa-check icon-process-vee"></i>
          </li>
    </ul>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    textFirst: String
  },
  data(){
    return{
      
    }
  },
  computed: {
  classObject() {
    let text =this.textFirst;
    return {
      'icon-process-w-left': text==="Nạp ví"
    }
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#progressbar {
  margin-bottom: 30px;
  overflow: hidden;
  width: 100%;
}
#progressbar li.active {
  color: #3cb371;
}
#progressbar li.active .icon-process,
#progressbar li.active .icon-process-vee,
#progressbar li.active .icon-process-w {
  color: white;
  opacity: 1;
}
#progressbar li.active::before,
#progressbar li.active::after {
  background: #3cb371;
  color: white;
}
#progressbar li {
  list-style-type: none;
  color: #99a2a8;
  font-size: 9px;
  width: calc(100% / 3);
  float: left;
  position: relative;
  font: 500 13px/1 "Roboto", sans-serif;
}
#progressbar li:nth-child(2)::before {
  content: "";
}
#progressbar li:nth-child(3)::before {
  content: "";
}
.icon-process {
  top: 0;
  position: absolute;
  margin: 18px 0 0 -35px;
  width: 15px;
  height: 15px;
  transform: scale(1);
  opacity: 0.3;
}
.icon-process-w {
  top: 0;
  position: absolute;
  margin: 16px 0 0 -32px;
  width: 18px;
  height: 18px;
  transform: scale(1);
  opacity: 0.3;
}
.icon-process-w-left{
  margin-left: -28px !important;
}


.icon-process-vee {
  top: 0;
  position: absolute;
  margin: 15px 0 0px -32px;
  width: 20px;
  height: 20px;
  transform: scale(1);
  opacity: 0.3;
}
#progressbar li::before {
  content: "";
  font: normal normal normal 30px/50px Ionicons;
  width: 50px;
  height: 50px;
  line-height: 50px;
  display: block;
  background: #eaf0f4;
  border-radius: 50%;
  margin: 0 auto 10px auto;
}
#progressbar li::after {
  content: "";
  width: 100%;
  height: 10px;
  background: #eaf0f4;
  position: absolute;
  left: -50%;
  top: 21px;
  z-index: -1;
}
#progressbar li:last-child::after {
  width: 150%;
}
</style>
