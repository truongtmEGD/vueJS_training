<template>
  <div class="content-recharge">
    <div class="recharge-header">
      <div class="row">
        <div class="col-md-3 col-lg-3 header-left payment-header">
          <span><b>Thanh toán hóa đơn</b></span>
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
                  <label for="lblDivision">Đơn vị cung cấp:</label>
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
                  <label for="lblCustomerId">Mã khách hàng/ Hợp đồng</label>
                  <div class="row">
                    <div class="col-lg-10 col-md-10">
                      <input
                        type="text"
                        class="form-control"
                        id="txtCustomerId"
                        placeholder="Nhập mã khách, số HĐ..."
                      />
                    </div>
                    <div class="col-lg-2 col-md-2">
                          <button class="search-button-top search-button btn btn-secondary" type="button">
                            <i class="fa fa-search"></i><span></span>
                          </button>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            <div class="form-group grItem1">
              <label for="lblAccountNum" class="label-header">Thông tin đơn hàng</label>
              <div class="invoice-info">
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <div class="menu menu-left">
                      <ul>
                        <li><p>Mã khách hàng:</p></li>
                        <li><p>Tên khách hàng:</p></li>
                        <li><p>Địa chỉ:</p></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="menu menu-right">
                      <ul>
                        <li><p>Số điện thoại:</p></li>
                        <li><p>Email:</p></li>
                        <li><p>Kỳ thanh toán:</p></li>
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
                            <th scope="col" class="header-invoice">Mã khách hàng</th>
                            <th scope="col" class="header-invoice">Mã hóa đơn</th>
                            <th scope="col" class="header-invoice">Số tiền</th>
                            <th scope="col" class="header-invoice">Kỳ hóa đơn</th>
                            <th scope="col" class="header-invoice">Kết quả</th>
                            
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
                            <td>CUS000001</td>
                            <td>INV0000001</td>
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
                            <td>CUS000001</td>
                            <td>INV0000001</td>
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
                            <td>CUS000001</td>
                            <td>INV0000001</td>
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
                            <td>CUS000001</td>
                            <td>INV0000001</td>
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
                            <td>CUS000001</td>
                            <td>INV0000001</td>
                            <td>20.000 VND</td>
                            <td>08/2021</td>
                            <td>OK</td>
                          </tr>
                          
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <Pagination currentPageP="3" totalPageP="6" totalRecordP="56"/>
              </div>
            </div>
            <div class="form-group grItem">
                <label for="lblAccountNum" class="label-header invoice-info1">Thanh toán</label>
                <p class="label-header-medium">Tổng số hóa đơn: <span class="header-invoice">0</span></p>
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
export default {
  name: "PaymentInvoice",
  components: {Pagination },
  props: {
    msg: String,
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/color.scss";
@import "../styles/invoice.scss";
</style>
