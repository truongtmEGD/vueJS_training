<template>
  <div>
    <div class="row pagination_area">
    <div class="row">
      <div class="col-lg-5 col-md-5">
          <p v-if="totalRecord <=10">
          Hiển thị <span class="numPage">1 - 9 </span>trong
          <span class="numPage"> {{ totalRecord }} </span>bản ghi
        </p>
        <p v-else>
          Hiển thị <span class="numPage">{{firstIndex}} - {{lastIndex}} </span>trong
          <span class="numPage"> {{ totalRecord  }} </span>bản ghi
        </p>
      </div>
      <div class="col-lg-1 col-md-1"></div>
      <div class="col-lg-6 col-md-6 pag-group">
        <ul class="pagination">
          <template v-if="totalPage >= 2">
            <template v-if="currentPage ==1">
                <li><a href="#" :class="'disabled'" :disabled="true"><span :class="'firstPage'">Trang đầu</span></a></li>
            </template>
            <template v-else>
              <li><a href="#" :class="''" :disabled="false" :value="1" @click="pagination('1')"><span :class="'firstPage'">Trang đầu</span></a></li>
            </template>
            <template v-if="currentPage >=2">
                <li><a href="#" :value="currentPagePre" @click="pagination(currentPagePre)"><i class='fas fa-angle-left'></i></a></li>
            </template>
            <template v-if="currentPage >=12">
                <li><a href="#" :value="jumpPrevPage" @click="pagination(jumpPrevPage)">{{jumpPrevPage}}</a></li>
            </template>
            <template v-if="preNearTwoPage >0">
                <li><a href="#" :value="preNearTwoPage" @click="pagination(preNearTwoPage)">{{preNearTwoPage}}</a></li>
            </template>
            <template v-if="preNearOnePage > 0">
                <li><a href="#" :value="preNearOnePage" @click="pagination(preNearOnePage)">{{preNearOnePage}}</a></li>
            </template>
            <template v-if="currentPage > 0">
                <li><a :class="classActive" href="#">{{currentPage}}</a></li>
            </template>
            <template v-if="nextOnePage <= totalPage">
                <li><a href="#" :value="nextOnePage" @click="pagination(nextOnePage)">{{nextOnePage}}</a></li>
            </template>
            <template v-if="nextTwoPage <= totalPage">
                <li><a href="#" :value="nextTwoPage" @click="pagination(nextTwoPage)">{{nextTwoPage}}</a></li>
            </template>
            <template v-if="totalPage - currentPage >= 4">
                <li><a href="#">...</a></li>
            </template>
            <template v-if="jumpNextPage<totalPage">
                <li><a href="#" :value="jumpNextPage" @click="pagination(jumpNextPage)">{{jumpNextPage}}</a></li>
            </template>
            <template v-if="currentPage!= totalPage">
                <li><a href="#" @click="pagination(currentPageNext)"><i class='fas fa-angle-right'></i></a></li>
            </template>
            <template v-if="currentPage == totalPage">
                <li><a href="#" :class="'disabled'" :disabled="true"><span :class="'lastPage'">Trang cuối</span></a></li>
            </template>
            <template v-else>
                <li><a href="#" :class="''" :value="totalPage" :disabled="false" @click="pagination(totalPage)"><span :class="'lastPage'">Trang cuối</span></a></li>
            </template>
          </template>
        </ul>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    currentPageP: String,
    totalPageP: String,
    totalRecordP: String
  },
  data() {
    return {
      currentPage: Number(this.currentPageP),
      totalPage: Number(this.totalPageP),
      firstPage: 1,
      currentPagePre: Number(this.currentPageP) -1,
      currentPageNext: Number(this.currentPageP) +1,
      lastPage: this.totalPage,
      jumpNextPage: Number(this.currentPageP) + 10,
      jumpPrevPage: Number(this.currentPageP) - 10,
      preNearTwoPage:Number(this.currentPageP) - 2,
      preNearOnePage: Number(this.currentPageP) - 1,
      nextTwoPage: Number(this.currentPageP) + 2,
      nextOnePage: Number(this.currentPageP) + 1,
      classActive: "active",
      totalRecord: Number(this.totalRecordP),
      firstIndex: Number(10*(this.currentPageP-1) + 1),
      lastIndex: 10*Number((this.currentPageP)),
    };
  },
  methods:{
     initPaging: function() {
       if(this.lastIndex > this.totalRecord){
          this.lastIndex=this.totalRecord;
       }
     },
     pagination (value) {
      this.$emit('clicked', value)
    }
 },
 beforeMount(){
    this.initPaging()
 }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/color.scss";
.pagination_area {
  margin: 10px -55px 0 0;
}

.pagination_area .row {
  margin-left: -20px;
}
.numPage {
  font-size: 15px;
  font-weight: bold;
}
.pag-group {
  text-align: right;
}

ul.pagination {
  display: inline-block;
  padding: 0;
  margin: 0;
}

ul.pagination li {
  display: inline;
}

ul.pagination li a {
  color: black;
  float: left;
  text-decoration: none;
  cursor: pointer;
  padding: 5px 10px;
  text-decoration: none;
  font-size: 12px;
  font-weight: bold;
}

ul.pagination li a.active {
  background-color: $paging-bg-color;
  color: $searchButton-color;
  border-bottom: 2px solid $searchButton-color;
}
ul.pagination li a.active:hover {
  cursor: auto;
}

ul.pagination li a:hover {
  background-color: $paging-bg-color;
  color: $searchButton-color;
  border-bottom: 2px solid $searchButton-color;
}

ul.pagination li a.disabled {
  pointer-events: none;
  color: $menu-background;
  font-weight: normal;
}

button span {
  font-size: 15px;
  font-weight: bold;
}
</style>

