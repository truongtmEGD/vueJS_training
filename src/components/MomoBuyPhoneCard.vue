<template>
  <div class="content-recharge">
    <div class="recharge-header">
      <div class="row">
        <div class="col-md-3 col-lg-3 header-left payment-header">
          <span><b>Momo mua mã thẻ</b></span>
          <p>Số dư ví:<span class="vnd">+ VND</span></p>
        </div>
        <div class="col-md-9 col-lg-9 header-right payment-header">
          <span
            >Tổng đài gọi ra &amp; tổng đài tự động(voice call):
            <strong>Hotline hỗ trợ đối tác: (028) 73000406</strong></span
          >
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
                  <label for="lblChoiceService">Chọn dịch vụ:</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Lựa chọn...</option>
                    <option value="1">Dịch vụ 1</option>
                    <option value="1">Dịch vụ 2</option>
                    <option value="1">Dịch vụ 3</option>
                    <option value="1">Dịch vụ 4</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="form-group grItem">
                  <label for="lblDivision">Mệnh giá:</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Lựa chọn...</option>
                    <option value="1">Đơn vị 1</option>
                    <option value="1">Đơn vị 2</option>
                    <option value="1">Đơn vị 3</option>
                    <option value="1">Đơn vị 4</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-5 col-md-5">
                <div class="form-group grItem">
                  <label for="lblCustomerId">Số lượng</label>
                  <div class="row">
                    <div class="col-lg-10 col-md-10">
                      <input
                        type="text"
                        class="form-control"
                        id="txtCustomerId"
                        placeholder="0"
                      />
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
                        <li><p>Nhà mạng:</p></li>
                        <li><p>Mệnh giá:</p></li>
                        <li><p>Số lượng: <label>0</label></p></li>
                        <li><p>Chiết khấu: <label>0</label></p></li>
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
                              <input
                                type="checkbox"
                                class="form-check-input chkAll"
                                id="exampleCheck1"
                              />
                            </th>
                            <th scope="col" class="header-invoice">Mã thẻ</th>
                            <th scope="col" class="header-invoice">Serial thẻ</th>
                            <th scope="col" class="header-invoice">Mệnh giá</th>
                            <th scope="col" class="header-invoice">Ngày hết hạn</th>
                            <th scope="col" class="header-invoice">Trạng thái</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td scope="row">
                              <input
                                type="checkbox"
                                class="form-check-input chkItem"
                                id="exampleCheck1"
                              />
                            </td>
                            <td>313124434455</td>
                            <td>0005435435454</td>
                            <td>20.000 VND</td>
                            <td>08/2021</td>
                            <td>OK</td>
                          </tr>
                          <tr>
                            <td scope="row">
                              <input
                                type="checkbox"
                                class="form-check-input chkItem"
                                id="exampleCheck1"
                              />
                            </td>
                            <td>313124434455</td>
                            <td>0005435435454</td>
                            <td>20.000 VND</td>
                            <td>08/2021</td>
                            <td>OK</td>
                          </tr>
                          <tr>
                            <td scope="row">
                              <input
                                type="checkbox"
                                class="form-check-input chkItem"
                                id="exampleCheck1"
                              />
                            </td>
                            <td>313124434455</td>
                            <td>0005435435454</td>
                            <td>20.000 VND</td>
                            <td>08/2021</td>
                            <td>OK</td>
                          </tr>
                          <tr>
                            <td scope="row">
                              <input
                                type="checkbox"
                                class="form-check-input chkItem"
                                id="exampleCheck1"
                              />
                            </td>
                            <td>313124434455</td>
                            <td>0005435435454</td>
                            <td>20.000 VND</td>
                            <td>08/2021</td>
                            <td>OK</td>
                          </tr>
                          <tr>
                            <td scope="row">
                              <input
                                type="checkbox"
                                class="form-check-input chkItem"
                                id="exampleCheck1"
                              />
                            </td>
                            <td>313124434455</td>
                            <td>0005435435454</td>
                            <td>20.000 VND</td>
                            <td>08/2021</td>
                            <td>OK</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <Pagination currentPageP="8" totalPageP="10" totalRecordP="100" @clicked="onClickPaging"/>
                <div v-if="isLoading===true">
                  <Loading />
                </div>
              </div>
            </div>
            <div class="form-group grItem">
                <label for="lblAccountNum" class="label-header invoice-info1">Thanh toán</label>
                <p class="label-header-medium">Tổng số thẻ: <span class="header-invoice">0</span></p>
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
  name: "MomoBuyPhoneCard",
  components: {Pagination,Loading },
  props: {
    msg: String,
  },
  data() {
    return {
      isLoading:false
    }
  },
  methods: {
    onClickPaging (value) {
      this.isLoading=true;
      document.body.classList.add('body-css')
      console.log(value) // someValue
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
