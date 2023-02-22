<template>
  <div class="content-recharge">
    <div class="recharge-header">
      <div class="row">
        <div class="col-md-3 col-lg-3 header-left payment-header">
          <span><b>Danh sách giao dịch Payoo</b></span>
        </div>
        <div class="col-md-9 col-lg-9 header-right payment-header">
          <div class="gr-button-tran">
              <button class="search-button-check btn btn-secondary" type="button" @click="$bvModal.show('check-transaction-modal')">
              <i class="fa fa-search"></i><span>Kiểm tra giao dịch</span>
            </button>
            <div class="arr-gr">
              <img src="../assets/images/icon/arrow_zoom_icon.png" alt="Arrow zoom icon"/>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <div class="recharge-content">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <form class="content">
            <div class="row gr-transaction">
              <div class="col-lg-2 col-md-2 gr-item-ma">
                <div class="form-group">
                  <label for="lblTransactionType">Loại giao dịch:</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>--Tất cả--</option>
                    <option value="1">Giao dịch 1</option>
                    <option value="1">Giao dịch 2</option>
                    <option value="1">Giao dịch 3</option>
                    <option value="1">Giao dịch 4</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-2 col-md-2 gr-item-ma">
                <div class="form-group grItem">
                  <label for="lblStatus">Trạng thái giao dịch:</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>--Tất cả--</option>
                    <option value="1">Trạng thái 1</option>
                    <option value="1">Trạng thái 2</option>
                    <option value="1">Trạng thái 3</option>
                    <option value="1">Trạng thái 4</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-2 col-md-2 gr-item-ma">
                <div class="form-group grItem">
                  <label for="lblChannnelTransaction">Trạng thái xác nhận:</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>--Tất cả--</option>
                    <option value="1">Trạng thái 1</option>
                    <option value="1">Trạng thái 2</option>
                    <option value="1">Trạng thái 3</option>
                    <option value="1">Trạng thái 4</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-2 col-md-2 gr-time">
                <label for="lblChannnelTime">Ngày tạo giao dịch:</label>
                <div class="row">
                    <div class="col-lg-5 col-md-5">
                        <date-picker ref="txtStartDate" v-model="startDateNow" :class="'data-input'" :editable="false" format="DD/MM/YYYY"></date-picker>
                    </div>
                    <div class="col-lg-1 col-md-1">
                      <i class='fas fa-angle-right arrow-date'></i>
                    </div>
                    <div class="col-lg-5 col-md-5">
                        <date-picker ref="txtEndDate" v-model="endDateNow" :class="'data-input'" :editable="false" format="DD/MM/YYYY"></date-picker>
                    </div>
                  </div>
              </div>
              <div class="col-lg-4 col-md-4 gr-time">
                <label for="lblAccount">Từ khóa:</label>
                  <div class="row">
                    <div class="col-lg-9 col-md-9">
                      <input
                        type="text"
                        class="form-control"
                        id="txtKeyword"
                        placeholder="Mã giao dịch, Mã dv, Nhà cung cấp..."
                      />
                    </div>
                    <div class="col-lg-3 col-md-3">
                          <button class="search-button-top search-button btn btn-secondary" type="button">
                            <i class="fa fa-search"></i><span></span>
                          </button>
                    </div>
                  </div>
              </div>
            </div>
            <div class="form-group grItem gr2">
              <div class="transaction-info-detail">
                <div class="row">
                  <div class="col-lg-12 col-md-12">
                    <div class="table-responsive">
                      <table class="table table-striped">
                        <thead>
                          <tr class="row-header">
                            <th scope="col" class="header-invoice" v-bind:style="{ width: 3 + '%' }">STT</th>
                            <th scope="col" class="header-invoice" v-bind:style="{ width: 10 + '%' }">Phòng giao dịch</th>
                            <th scope="col" class="header-invoice" v-bind:style="{ width: 8 + '%' }">Mã giao dịch</th>
                            <th scope="col" class="header-invoice" v-bind:style="{ width: 8 + '%' }">Loại giao dịch</th>
                            <th scope="col" class="header-invoice" v-bind:style="{ width: 8 + '%' }">Số tiền</th>
                            <th scope="col" class="header-invoice" v-bind:style="{ width: 8 + '%' }">Mã dịch vụ</th>
                            <th scope="col" class="header-invoice process" v-bind:style="{ width: 8 + '%' }">Nhà cung cấp</th>
                            <th scope="col" class="header-invoice" v-bind:style="{ width: 8 + '%' }">Trạng thái GD</th>
                            <th scope="col" class="header-invoice" v-bind:style="{ width: 8 + '%' }">Thời gian GD</th>
                            <th scope="col" class="header-invoice" v-bind:style="{ width: 8 + '%' }">Trạng thái XN</th>
                            <th scope="col" class="header-invoice" v-bind:style="{ width: 8 + '%' }">Thời gian XN</th>
                            <th scope="col" class="header-invoice" v-bind:style="{ width: 7 + '%' }">Người XN</th>
                            <th scope="col" class="header-invoice process" v-bind:style="{ width: 8 + '%' }">Thao tác</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td scope="row" class="center-align">1</td>
                            <td class='left-align'>F88-59 Ngô Gia Tự</td>
                            <td class="left-align">2N187347000187</td>
                            <td class='center-align'>Thanh toán hóa đơn</td>
                            <td class='left-align money-td'>209.000</td>
                            <td class='left-align'>NET</td>
                            <td class="left-align vendor">VNPT</td>
                            <td class="center-align align-td"><span class="monney">Thành công</span></td>
                            <td class="fee">15/08/2021 14:15</td>
                            <td class="right-align td-access"><span class="alert alert-success status" role="alert">Đã xác nhận</span></td>
                            <td class="left-align align-td">15/08/2021 22:15</td>
                            <td class="left-align align-td">15/08/2021 22:15</td>
                            <td class="left-align"></td>
                          </tr>
                         <tr>
                            <td scope="row" class="center-align">1</td>
                            <td class='left-align'>F88-59 Ngô Gia Tự</td>
                            <td class="left-align">2N187347000187</td>
                            <td class='center-align'>Thanh toán hóa đơn</td>
                            <td class='left-align money-td'>209.000</td>
                            <td class='left-align'>NET</td>
                            <td class="left-align vendor">VNPT</td>
                            <td class="center-align align-td"><span class="monney">Thành công</span></td>
                            <td class="fee">15/08/2021 14:15</td>
                            <td class="right-align td-access"><span class="alert alert-success status" role="alert">Đã xác nhận</span></td>
                            <td class="left-align align-td">15/08/2021 22:15</td>
                            <td class="left-align align-td">15/08/2021 22:15</td>
                            <td class="left-align"></td>
                          </tr>
                          <tr>
                            <td scope="row" class="center-align">1</td>
                            <td class='left-align'>F88-59 Ngô Gia Tự</td>
                            <td class="left-align">2N187347000187</td>
                            <td class='center-align'>Thanh toán hóa đơn</td>
                            <td class='left-align money-td'>209.000</td>
                            <td class='left-align'>NET</td>
                            <td class="left-align vendor">VNPT</td>
                            <td class="center-align align-td"><span class="monney">Thành công</span></td>
                            <td class="fee">15/08/2021 14:15</td>
                            <td class="right-align td-access"><span class="alert alert-success status" role="alert">Đã xác nhận</span></td>
                            <td class="left-align align-td">15/08/2021 22:15</td>
                            <td class="left-align align-td">15/08/2021 22:15</td>
                            <td class="left-align"></td>
                          </tr>
                         <tr>
                            <td scope="row" class="center-align">1</td>
                            <td class='left-align'>F88-59 Ngô Gia Tự</td>
                            <td class="left-align">2N187347000187</td>
                            <td class='center-align'>Thanh toán hóa đơn</td>
                            <td class='left-align money-td'>209.000</td>
                            <td class='left-align'>NET</td>
                            <td class="left-align vendor">VNPT</td>
                            <td class="center-align align-td"><span class="monney">Thành công</span></td>
                            <td class="fee">15/08/2021 14:15</td>
                            <td class="right-align td-access"><span class="alert alert-success status" role="alert">Đã xác nhận</span></td>
                            <td class="left-align align-td">15/08/2021 22:15</td>
                            <td class="left-align align-td">15/08/2021 22:15</td>
                            <td class="left-align"></td>
                          </tr>
                          <tr>
                            <td scope="row" class="center-align">1</td>
                            <td class='left-align'>F88-59 Ngô Gia Tự</td>
                            <td class="left-align">2N187347000187</td>
                            <td class='center-align'>Thanh toán hóa đơn</td>
                            <td class='left-align money-td'>209.000</td>
                            <td class='left-align'>NET</td>
                            <td class="left-align vendor">VNPT</td>
                            <td class="center-align align-td"><span class="monney">Thành công</span></td>
                            <td class="fee">15/08/2021 14:15</td>
                            <td class="right-align td-access"><span class="alert alert-success status" role="alert">Đã xác nhận</span></td>
                            <td class="left-align align-td">15/08/2021 22:15</td>
                            <td class="left-align align-td">15/08/2021 22:15</td>
                            <td class="left-align"></td>
                          </tr>
                         <tr>
                            <td scope="row" class="center-align">1</td>
                            <td class='left-align'>F88-59 Ngô Gia Tự</td>
                            <td class="left-align">2N187347000187</td>
                            <td class='center-align'>Thanh toán hóa đơn</td>
                            <td class='left-align money-td'>209.000</td>
                            <td class='left-align'>NET</td>
                            <td class="left-align vendor">VNPT</td>
                            <td class="center-align align-td"><span class="monney">Thành công</span></td>
                            <td class="fee">15/08/2021 14:15</td>
                            <td class="right-align td-access"><span class="alert alert-success status" role="alert">Đã xác nhận</span></td>
                            <td class="left-align align-td">15/08/2021 22:15</td>
                            <td class="left-align align-td">15/08/2021 22:15</td>
                            <td class="left-align"></td>
                          </tr>
                          <tr>
                            <td scope="row" class="center-align">1</td>
                            <td class='left-align'>F88-59 Ngô Gia Tự</td>
                            <td class="left-align">2N187347000187</td>
                            <td class='center-align'>Thanh toán hóa đơn</td>
                            <td class='left-align money-td'>209.000</td>
                            <td class='left-align'>NET</td>
                            <td class="left-align vendor">VNPT</td>
                            <td class="center-align align-td"><span class="monney">Thành công</span></td>
                            <td class="fee">15/08/2021 14:15</td>
                            <td class="right-align td-access"><span class="alert alert-success status" role="alert">Đã xác nhận</span></td>
                            <td class="left-align align-td">15/08/2021 22:15</td>
                            <td class="left-align align-td">15/08/2021 22:15</td>
                            <td class="left-align"></td>
                          </tr>
                         <tr>
                            <td scope="row" class="center-align">1</td>
                            <td class='left-align'>F88-59 Ngô Gia Tự</td>
                            <td class="left-align">2N187347000187</td>
                            <td class='center-align'>Thanh toán hóa đơn</td>
                            <td class='left-align money-td'>209.000</td>
                            <td class='left-align'>NET</td>
                            <td class="left-align vendor">VNPT</td>
                            <td class="center-align align-td"><span class="monney">Thành công</span></td>
                            <td class="fee">15/08/2021 14:15</td>
                            <td class="right-align td-access"><span class="alert alert-success status" role="alert">Đã xác nhận</span></td>
                            <td class="left-align align-td">15/08/2021 22:15</td>
                            <td class="left-align align-td">15/08/2021 22:15</td>
                            <td class="left-align"></td>
                          </tr>
                          <tr>
                            <td scope="row" class="center-align">1</td>
                            <td class='left-align'>F88-59 Ngô Gia Tự</td>
                            <td class="left-align">2N187347000187</td>
                            <td class='center-align'>Thanh toán hóa đơn</td>
                            <td class='left-align money-td'>209.000</td>
                            <td class='left-align'>NET</td>
                            <td class="left-align vendor">VNPT</td>
                            <td class="center-align align-td"><span class="monney">Thành công</span></td>
                            <td class="fee">15/08/2021 14:15</td>
                            <td class="right-align td-access"><span class="alert alert-success status" role="alert">Đã xác nhận</span></td>
                            <td class="left-align align-td">15/08/2021 22:15</td>
                            <td class="left-align align-td">15/08/2021 22:15</td>
                            <td class="left-align"></td>
                          </tr>
                          <tr>
                            <td scope="row" class="center-align">1</td>
                            <td class='left-align'>F88-59 Ngô Gia Tự</td>
                            <td class="left-align">2N187347000187</td>
                            <td class='center-align'>Thanh toán hóa đơn</td>
                            <td class='left-align money-td'>209.000</td>
                            <td class='left-align'>NET</td>
                            <td class="left-align vendor">VNPT</td>
                            <td class="center-align align-td"><span class="monney">Thành công</span></td>
                            <td class="fee">15/08/2021 14:15</td>
                            <td class="right-align td-access"><span class="alert alert-success status" role="alert">Đã xác nhận</span></td>
                            <td class="left-align align-td">15/08/2021 22:15</td>
                            <td class="left-align align-td">15/08/2021 22:15</td>
                            <td class="left-align"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <Pagination currentPageP="6" totalPageP="6" totalRecordP="56" @clicked="onClickPaging"/>
                <div v-if="isLoading===true">
                  <Loading />
                </div>
                
                <div>
                  <!-- Modal -->
                  <b-modal id="check-transaction-modal" hide-footer size="lg">
                    <template #modal-title>
                      Kiểm tra giao dịch điện nước
                    </template>
                    
                    <div class="row gr-detail1">
                        <ul class="chat-group-modal chat-group">
                          <li><div class="chat-item"><img src="../assets/images/icon/question_mark_icon.png" alt="Question"></div></li>
                          <li><div class="chat-item"><img src="../assets/images/icon/gift_icon.png" alt="Question"></div></li>
                          <li><div class="chat-item"><img src="../assets/images/icon/zalo_icon.png" alt="Question"></div></li>
                        </ul>
                        <div class="col-lg-12 col-md-12">
                            <div class="d-block gr-detail">
                              <div class="row row-modal-detail">
                                <div class="col-lg-3 col-md-3">
                                  <label for="lblDistrict">Chọn tỉnh thành:</label>
                                </div>
                                <div class="col-lg-9 col-md-9">
                                  <select class="form-select" aria-label="Default select example">
                                    <option selected>--Tất cả--</option>
                                    <option value="1">Hà Nội</option>
                                    <option value="1">Hải Phòng</option>
                                    <option value="1">Nam Định</option>
                                    <option value="1">Hưng Yên</option>
                                  </select>
                                </div>
                              </div>
                              <div class="row row-modal-detail">
                                <div class="col-lg-3 col-md-3">
                                  <label for="lblTimeTransaction">Thời gian giao dịch:</label>
                                </div>
                                <div class="col-lg-9 col-md-9">
                                  <div class="row">
                                    <div class="col-lg-5 col-md-5" v-bind:style="{ padding: '0 30px 0 0 !important' }">
                                        <date-picker ref="txtStartDateTransaction" v-model="startDateNow" :class="'data-input'" :editable="false" format="DD/MM/YYYY"></date-picker>
                                    </div>
                                    <div class="col-lg-1 col-md-1" v-bind:style="{ padding: '0 0 0 30px !important' }">
                                      <i class='fas fa-angle-right arrow-date'></i>
                                    </div>
                                    <div class="col-lg-5 col-md-5" v-bind:style="{ padding: '0 0 0 30px !important' }">
                                        <date-picker ref="txtEndDateTransaction" v-model="endDateNow" :class="'data-input'" :editable="false" format="DD/MM/YYYY"></date-picker>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-modal-detail">
                                <div class="col-lg-3 col-md-3">
                                  <label for="lblCustomerId">Mã khách hàng:</label><span class="required">*</span>
                                </div>
                                <div class="col-lg-9 col-md-9">
                                  <input type="text" class="form-control" id="txtCustomerId" />
                                </div>
                              </div>
                              <div class="row row-modal-detail">
                                <div class="col-lg-3 col-md-3">
                                </div>
                                <div class="col-lg-9 col-md-9">
                                  <button class="search-button-check btn btn-secondary" type="button">
                                    <i class="fa fa-search"></i><span>Tìm kiếm</span>
                                  </button>
                                </div>
                              </div>
                              <div class="row row-modal-detail row-list-tran" v-bind:style="{ margin: '40px 10px 20px 10px !important' }">
                                <div class="col-lg-4 col-md-4">
                                    <span><b>Danh sách giao dịch</b></span>
                                </div>
                                <div class="col-lg-8 col-md-8">
                                    <div class="arr-gr-bellow arr-gr">
                                      <img src="../assets/images/icon/arrow_zoom_icon.png" alt="Arrow zoom icon"/>
                                    </div>
                                </div>
                              </div>
                              <div class="form-group grItem gr2">
                                <div class="transaction-list-detail">
                                  <div class="row">
                                    <div class="col-lg-12 col-md-12">
                                      <div class="table-responsive">
                                        <table class="table table-striped">
                                          <thead>
                                            <tr>
                                              <th scope="col" class="header-invoice-modal" v-bind:style="{ width: 33 + '%' }">Thời gian GD</th>
                                              <th scope="col" class="header-invoice-modal" v-bind:style="{ width: 33 + '%' }">Mã Giao dịch</th>
                                              <th scope="col" class="header-invoice-modal" v-bind:style="{ width: 34 + '%' }">Tên PGD</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td class='left-align'>18/08/2021 19:58:43</td>
                                              <td class="left-align">2108181957578731435</td>
                                              <td class='left-align'>Tạ Mạnh Trường</td>
                                            </tr>
                                            <tr>
                                              <td class='left-align'>18/08/2021 19:58:43</td>
                                              <td class="left-align">2108181957578731435</td>
                                              <td class='left-align'>Tạ Mạnh Trường</td>
                                            </tr>
                                            <tr>
                                              <td class='left-align'>18/08/2021 19:58:43</td>
                                              <td class="left-align">2108181957578731435</td>
                                              <td class='left-align'>Tạ Mạnh Trường</td>
                                            </tr>
                                            <tr>
                                              <td class='left-align'>18/08/2021 19:58:43</td>
                                              <td class="left-align">2108181957578731435</td>
                                              <td class='left-align'>Tạ Mạnh Trường</td>
                                            </tr>
                                            <tr>
                                              <td class='left-align'>18/08/2021 19:58:43</td>
                                              <td class="left-align">2108181957578731435</td>
                                              <td class='left-align'>Tạ Mạnh Trường</td>
                                            </tr>
                                            <tr>
                                              <td class='left-align'>18/08/2021 19:58:43</td>
                                              <td class="left-align">2108181957578731435</td>
                                              <td class='left-align'>Tạ Mạnh Trường</td>
                                            </tr>
                                            <tr>
                                              <td class='left-align'>18/08/2021 19:58:43</td>
                                              <td class="left-align">2108181957578731435</td>
                                              <td class='left-align'>Tạ Mạnh Trường</td>
                                            </tr>
                                            <tr>
                                              <td class='left-align'>18/08/2021 19:58:43</td>
                                              <td class="left-align">2108181957578731435</td>
                                              <td class='left-align'>Tạ Mạnh Trường</td>
                                            </tr>
                                            <tr>
                                              <td class='left-align'>18/08/2021 19:58:43</td>
                                              <td class="left-align">2108181957578731435</td>
                                              <td class='left-align'>Tạ Mạnh Trường</td>
                                            </tr>
                                            <tr>
                                              <td class='left-align'>18/08/2021 19:58:43</td>
                                              <td class="left-align">2108181957578731435</td>
                                              <td class='left-align'>Tạ Mạnh Trường</td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                  <Pagination currentPageP="6" totalPageP="6" totalRecordP="56" @clicked="onClickPagingModal"/>
                                  <div v-if="isLoading===true">
                                    <Loading />
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                        

                        
                    </div>

                    <div class="row grButton">
                      <div class="col-lg-10 col-lg-10">

                      </div>
                      <div class="col-lg-2 col-md-2 button-close">
                        <b-button class="btn btn-secondary close-button" block @click="$bvModal.hide('check-transaction-modal')">Đóng</b-button>

                        
                      </div>
                    </div>
                    
                  </b-modal>
                </div>
              </div>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  </div>
  

</template>


<script>
import Pagination from './Pagination.vue'
import Loading from './Loading.vue'
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  name: "PayooTransaction",
  components: {DatePicker,Pagination,Loading },
  props: {
    msg: String,
  },
  data() {
    return {
        startDateNow: new Date(),
        endDateNow: new Date(),
        isLoading:false
    };
  },
  methods: {
    onClickPaging (value) {
      this.isLoading=true;
      document.body.classList.add('body-css')
      console.log(value) // someValue
    },
    onClickPagingModal (value) {
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
@import "../styles/payooTransaction.scss";

.menu-left ul li {
    margin-right: 20px;
}


</style>
<style>
.mx-datepicker .mx-input {
    height: 38px;
    text-align: center;
}

 /* For modal */
 .required{
   color: red;
   font-size: 12px;
   font-weight: bold;
   margin-left: 5px !important;
 }
 .gr-detail-u{
   list-style: none;
 }
 .button-close{
   text-align: right;
 }
button.close{
  background-color: transparent;
    border: 0;
    float: right;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .5;
}
.modal-footer {
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    align-items: center;
    justify-content: flex-end;
    padding: 0.75rem;
    border-top: 1px solid #dee2e6;
    border-bottom-right-radius: calc(0.3rem - 1px);
    border-bottom-left-radius: calc(0.3rem - 1px);
}
.modal-header {
    background-color: #dee2e6 !important;
}

.modal-title {
    text-transform: uppercase;
    font-size: 15px;
    font-weight: bold;
}
.left-label{
  font-size: 15px;
    font-weight: normal;
}
.gr-detail .row{
  margin: 0 0 10px 0 !important;
}
.right-label{
  font-size: 15px;
  font-weight: bold;
  margin-left: 20px;
}
.account-name{
  text-transform: uppercase;
}
.money-num{
  font-size: 25px;
    font-weight: bold;
    color: #cc3300;
}


.print1-button,
.print1-button:hover,
.print1-button:active,
.print1-button:focus {
    background-color: #00cc99 !important;
}

.print1-button span{
  margin-left: 5px;
}
.serivce{
  margin: 0 0 10px 10px !important;
}
.num1-money{
  padding-top: 10px;
}
.gr-detail1{
      margin-top: 30px;
}
.gr-detail{
      margin-top: 10px !important;
}
.serivce{
      position: absolute;
    top: 10px;
}
.invoice{
  margin: 10px 0 0 -40px;
}
.gr-invoice{
  padding-top: 40px;
}
.grButton{
    border-top: 1px solid #dee2e6;
    padding-top: 20px;
}
.close-button{
      color: black !important;
    font-size: 15px !important;
    font-weight: bold !important;
    margin-right: 0 !important;
    background-color: #f5f5f5 !important;
    color: #333333 !important;
}
</style>