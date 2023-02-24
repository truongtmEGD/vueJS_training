<template>
  <div class="content-recharge">
    <div class="recharge-header">
      <div class="row">
        <div class="col-md-3 col-lg-3 header-left payment-header">
          <span><b>Momo nạp thẻ</b></span>
          <p>Số dư ví:<span class="vnd">+ VND</span></p>
        </div>
        <div class="col-md-9 col-lg-9 header-right payment-header">
          <span>Tổng đài gọi ra &amp; tổng đài tự động(voice call):
            <strong>Hotline hỗ trợ đối tác: (028) 73000406</strong></span>
        </div>
      </div>
    </div>
    <div class="recharge-content">
      <div class="row">
        <div class="col-lg-2 col-md-2"></div>
        <div class="col-lg-8 col-md-8">
          <form class="content">
            <div class="row">
              <div class="col-lg-3 col-md-3">
                <div class="form-group grItem">
                  <label for="lblChoiceService">Chọn nhà mạng:</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Lựa chọn...</option>
                    <option value="1">Mobiphone</option>
                    <option value="1">Viettel</option>
                    <option value="1">Vinaphone</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="form-group grItem">
                  <label for="lblDivision">Số thuê bao:</label>
                  <input type="text" class="form-control" id="txtNumberPhone" placeholder="Nhập số điện thoại..." />
                </div>
              </div>
              <div class="col-lg-5 col-md-5">
                <div class="form-group grItem">
                  <label for="lblCustomerId">Mệnh giá:</label>
                  <div class="row">
                    <div class="col-lg-10 col-md-10">
                      <!-- <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Lựa chọn...</option>
                    <option value="1">20.000 VND</option>
                    <option value="1">50.000 VND</option>
                    <option value="1">100.000 VND</option>
                  </select> -->
                      <div>
                        <select2 v-model="valMoney" :options="myOptions"
                          :settings="{ settingOption: value, settingOption: value }" @change="myChangeEvent($event)"
                          @select="mySelectEvent($event)" />
                        <h4>Value: {{ valMoney }}</h4>
                      </div>


                    </div>
                    <div class="col-lg-2 col-md-2">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group grItem1">
              <label for="lblAccountNum" class="label-header">Thông tin đơn hàng</label>
              <div class="invoice-info">
                <div class="row">
                  <div class="col-lg-12 col-md-12">
                    <div class="menu menu-left">
                      <ul>
                        <li>
                          <p>Nhà mạng:</p>
                        </li>
                        <li>
                          <p>Mệnh giá:</p>
                        </li>
                        <li>
                          <p>Chiết khấu: <label>0</label></p>
                        </li>
                        <li>
                          <p>Số thuê bao: <label>0983744175</label></p>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div class="form-group grItem">
              <label for="lblAccountNum" class="label-header invoice-info1">Thông tin hóa đơn</label>
              <div class="invoice-info-detail">
                <div class="row">
                  <div class="col-lg-12 col-md-12">
                    <div class="table-responsive">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">
                              <input type="checkbox" class="form-check-input chkAll" id="exampleCheck1" />
                            </th>
                            <th scope="col" class="header-invoice">Số thuê bao</th>
                            <th scope="col" class="header-invoice">Thời gian</th>
                            <th scope="col" class="header-invoice">Mệnh giá</th>
                            <th scope="col" class="header-invoice">Kết quả</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td scope="row">
                              <input type="checkbox" class="form-check-input chkItem" id="exampleCheck1" />
                            </td>
                            <td>0983744175</td>
                            <td>22/08/2021</td>
                            <td>20.000 VND</td>
                            <td>OK</td>
                          </tr>
                          <tr>
                            <td scope="row">
                              <input type="checkbox" class="form-check-input chkItem" id="exampleCheck1" />
                            </td>
                            <td>0983744175</td>
                            <td>22/08/2021</td>
                            <td>20.000 VND</td>
                            <td>OK</td>
                          </tr>
                          <tr>
                            <td scope="row">
                              <input type="checkbox" class="form-check-input chkItem" id="exampleCheck1" />
                            </td>
                            <td>0983744175</td>
                            <td>22/08/2021</td>
                            <td>20.000 VND</td>
                            <td>OK</td>
                          </tr>
                          <tr>
                            <td scope="row">
                              <input type="checkbox" class="form-check-input chkItem" id="exampleCheck1" />
                            </td>
                            <td>0983744175</td>
                            <td>22/08/2021</td>
                            <td>20.000 VND</td>
                            <td>OK</td>
                          </tr>
                          <tr>
                            <td scope="row">
                              <input type="checkbox" class="form-check-input chkItem" id="exampleCheck1" />
                            </td>
                            <td>0983744175</td>
                            <td>22/08/2021</td>
                            <td>20.000 VND</td>
                            <td>OK</td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <Pagination currentPageP="6" totalPageP="6" totalRecordP="56" @clicked="onClickPaging" />
                <div v-if="isLoading === true">
                  <Loading />
                </div>
              </div>
            </div>
            <div class="form-group grItem">
              <label for="lblAccountNum" class="label-header invoice-info1">Thanh toán</label>
              <p class="label-header-medium">Tổng số tiền cần thanh toán: <span class="header-invoice">0</span></p>
            </div>
          </form>
          <div class="row gr-button">
            <div class="col-lg-2 col-md-2"></div>
            <div class="col-lg-8 col-md-8 grButton">
              <button type="button" class="recharge-button btn btn-primary">
                <i class="far fa-credit-card"></i><span>Thanh Toán</span>
              </button>
              <button class="print-button search-button btn btn-secondary" type="submit">
                <i class="fa fa-print" aria-hidden="true"></i><span>In phiếu</span>
              </button>
            </div>
            <div class="col-lg-2 col-md-2"></div>
          </div>
        </div>
        <div class="col-lg-2 col-md-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from './Pagination.vue'
import Loading from './Loading.vue'
export default {
  name: "MomoChargePhoneCard",
  components: { Pagination, Loading },
  props: {
    msg: String,
  },
  data() {
    return {
      isLoading: false,
      valMoney: '',
      myOptions: [{ id: "1", text: "abc" }, { id: "2", text: "def" }, { id: "3", text: "def1" }, { id: "4", text: "def2" }]
    };
  },
  methods: {
    onClickPaging(value) {
      this.isLoading = true;
      document.body.classList.add('body-css')
      console.log(value) // someValue
    },
    myChangeEvent(val) {
      console.log(val);
    },
    mySelectEvent({ id, text }) {
      console.log({ id, text })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/color.scss";
@import "../styles/invoice.scss";

.menu-left ul li {
  margin-right: 20px;
}
</style>
