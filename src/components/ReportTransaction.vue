<template>
  <div class="content-recharge">
    <div class="recharge-header">
      <div class="row">
        <div class="col-md-3 col-lg-3 header-left payment-header">
          <span><b>Lịch sử</b></span>
        </div>
        <div class="col-md-9 col-lg-9 header-right payment-header">
          <span
            >Tổng đài gọi ra &amp; tổng đài tự động(voice call):
            <strong>Hotline hỗ trợ đối tác: (028) 73000406</strong></span
          >
          <ul class="chat-group">
            <li><div class="chat-item"><img src="../assets/images/icon/question_mark_icon.png" alt="Question"></div></li>
            <li><div class="chat-item"><img src="../assets/images/icon/gift_icon.png" alt="Question"></div></li>
            <li><div class="chat-item"><img src="../assets/images/icon/zalo_icon.png" alt="Question"></div></li>
          </ul>
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
                  <label for="lblStatus">Trạng thái:</label>
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
              <div class="col-lg-1 col-md-1 gr-item-ma">
                <div class="form-group grItem">
                  <label for="lblChannnelTransaction">Kênh giao dịch:</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>--Tất cả--</option>
                    <option value="1">Kênh giao dịch 1</option>
                    <option value="1">Kênh giao dịch 2</option>
                    <option value="1">Kênh giao dịch 3</option>
                    <option value="1">Kênh giao dịch 4</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-2 col-md-2 gr-time">
                <label for="lblChannnelTime">Thời gian:</label>
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
              <div class="col-lg-2 col-md-2 gr-time">
                <label for="lblEmployeeName">Nhân viên:</label>
                  <input
                        type="text"
                        class="form-control"
                        id="txtEmployeeName"
                        placeholder="Tên nhân viên giao dịch..."
                  />
              </div>
              <div class="col-lg-3 col-md-3 gr-time">
                <label for="lblAccount">Tài khoản:</label>
                  <div class="row">
                    <div class="col-lg-9 col-md-9">
                      <input
                        type="text"
                        class="form-control"
                        id="txtAccountNumber"
                        placeholder="Số tài khoản..."
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
            <div class="row gr-download">
              <div class="col-lg-10 col-md-10">

              </div>
              <div class="col-lg-2 col-md-2 gr-download-btn">
                <button class="download-button btn btn-secondary" type="button">
                    <i class="fa fa-download" aria-hidden="true"></i><span>Tải Excel file</span>
                </button>
              </div>
            </div>
            
            <div class="form-group grItem gr2">
              <div class="transaction-info-detail">
                <div class="row">
                  <div class="col-lg-12 col-md-12">
                    <div class="table-responsive">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col" class="header-invoice" v-bind:style="{ width: 3 + '%' }">STT</th>
                            <th scope="col" class="header-invoice" v-bind:style="{ width: 7 + '%' }">CH</th>
                            <th scope="col" class="header-invoice" v-bind:style="{ width: 6 + '%' }">Tên NV giao dịch</th>
                            <th scope="col" class="header-invoice" v-bind:style="{ width: 6 + '%' }">Số<br>tài khoản</th>
                            <th scope="col" class="header-invoice" v-bind:style="{ width: 6 + '%' }">Ngày<br>giao dịch</th>
                            <th scope="col" class="header-invoice" v-bind:style="{ width: 5 + '%' }">Loại<br>giao<br> dịch</th>
                            <th scope="col" class="header-invoice process" v-bind:style="{ width: 10 + '%' }">Mã giao dịch</th>
                            <th scope="col" class="header-invoice" v-bind:style="{ width: 5 + '%' }">Số<br>tiền</th>
                            <th scope="col" class="header-invoice" v-bind:style="{ width: 4 + '%' }">Phí</th>
                            <th scope="col" class="header-invoice" v-bind:style="{ width: 6 + '%' }">Nhà<br>cung<br>cấp</th>
                            <th scope="col" class="header-invoice" v-bind:style="{ width: 7 + '%' }">Kênh<br>giao dịch</th>
                            <th scope="col" class="header-invoice" v-bind:style="{ width: 7 + '%' }">Trạng<br>thái</th>
                            <th scope="col" class="header-invoice" v-bind:style="{ width: 13 + '%' }">Nội dung</th>
                            <th scope="col" class="header-invoice process" v-bind:style="{ width: 12 + '%' }">Thao tác</th>
                          </tr>
                        </thead>
                        <tbody>
                          
                          <tr>
                            <td scope="row" class="noNum">1</td>
                            <td class='left-align'>PTO0307.353.Tân Thành</td>
                            <td class="right-align">Phạm Thị Bích Ngọc</td>
                            <td class='center-align'>0987469090</td>
                            <td class='right-align'>18-08-2021 19:58:43</td>
                            <td class='center-align'>Nạp tiền</td>
                            <td class="noNum">2108181957578731435</td>
                            <td><span class="monney">+500.000</span></td>
                            <td class="fee">0</td>
                            <td class="">NCC001</td>
                            <td class="">POS</td>
                            <td class=""><span class="alert alert-success status" role="alert">Thành công</span></td>
                            <td class="">1</td>
                            <td class="gr-button-cancel">
                              <button type="button" class="detail-button btn btn-primary detail-button-tab" @click="$bvModal.show('detail-transaction-modal')">
                                <i class="fas fa-eye"></i>
                                <span>Chi tiết</span>
                              </button>
                              <button type="button" class="cancel-button btn btn-primary detail-button-tab">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                                <span>Hủy</span>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td scope="row" class="noNum">2</td>
                            <td class='left-align'>PTO0307.353.Tân Thành</td>
                            <td class="right-align">Phạm Thị Bích Ngọc</td>
                            <td class='center-align'>0987469090</td>
                            <td class='right-align'>18-08-2021 19:58:43</td>
                            <td class='center-align'>Nạp tiền</td>
                            <td class="noNum">2108181957578731435</td>
                            <td><span class="monney">+500.000</span></td>
                            <td class="fee">0</td>
                            <td class="">NCC001</td>
                            <td class="">POS</td>
                            <td class=""><span class="alert alert-success status" role="alert">Thành công</span></td>
                            <td class="">1</td>
                            <td class="gr-button-cancel">
                              <button type="button" class="detail-button btn btn-primary detail-button-tab" @click="$bvModal.show('detail-transaction-modal')">
                                <i class="fas fa-eye"></i>
                                <span>Chi tiết</span>
                              </button>
                              <button type="button" class="cancel-button btn btn-primary detail-button-tab">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                                <span>Hủy</span>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td scope="row" class="noNum">3</td>
                            <td class='left-align'>PTO0307.353.Tân Thành</td>
                            <td class="right-align">Phạm Thị Bích Ngọc</td>
                            <td class='center-align'>0987469090</td>
                            <td class='right-align'>18-08-2021 19:58:43</td>
                            <td class='center-align'>Nạp tiền</td>
                            <td class="noNum">2108181957578731435</td>
                            <td><span class="sub-monney">-400.000</span></td>
                            <td class="fee">0</td>
                            <td class="">NCC001</td>
                            <td class="">POS</td>
                            <td class=""><span class="alert alert-success status" role="alert">Thành công</span></td>
                            <td class="">1</td>
                            <td class="gr-button-cancel">
                              <button type="button" class="detail-button btn btn-primary detail-button-tab" @click="$bvModal.show('detail-transaction-modal')">
                                <i class="fas fa-eye"></i>
                                <span>Chi tiết</span>
                              </button>
                              <button type="button" class="cancel-button btn btn-primary detail-button-tab">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                                <span>Hủy</span>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td scope="row" class="noNum">4</td>
                            <td class='left-align'>PTO0307.353.Tân Thành</td>
                            <td class="right-align">Phạm Thị Bích Ngọc</td>
                            <td class='center-align'>0987469090</td>
                            <td class='right-align'>18-08-2021 19:58:43</td>
                            <td class='center-align'>Nạp tiền</td>
                            <td class="noNum">2108181957578731435</td>
                            <td><span class="monney">+500.000</span></td>
                            <td class="fee">0</td>
                            <td class="">NCC001</td>
                            <td class="">POS</td>
                            <td class=""><span class="alert alert-success status" role="alert">Thành công</span></td>
                            <td class="">1</td>
                            <td class="gr-button-cancel">
                              <button type="button" class="detail-button btn btn-primary detail-button-tab" @click="$bvModal.show('detail-transaction-modal')">
                                <i class="fas fa-eye"></i>
                                <span>Chi tiết</span>
                              </button>
                              <button type="button" class="cancel-button btn btn-primary detail-button-tab">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                                <span>Hủy</span>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td scope="row" class="noNum">4</td>
                            <td class='left-align'>PTO0307.353.Tân Thành</td>
                            <td class="right-align">Phạm Thị Bích Ngọc</td>
                            <td class='center-align'>0987469090</td>
                            <td class='right-align'>18-08-2021 19:58:43</td>
                            <td class='center-align'>Nạp tiền</td>
                            <td class="noNum">2108181957578731435</td>
                            <td><span class="monney">+500.000</span></td>
                            <td class="fee">0</td>
                            <td class="">NCC001</td>
                            <td class="">POS</td>
                            <td class=""><span class="alert alert-success status" role="alert">Thành công</span></td>
                            <td class="">1</td>
                            <td class="gr-button-cancel">
                              <button type="button" class="detail-button btn btn-primary detail-button-tab" @click="$bvModal.show('detail-transaction-modal')">
                                <i class="fas fa-eye"></i>
                                <span>Chi tiết</span>
                              </button>
                              <button type="button" class="cancel-button btn btn-primary detail-button-tab">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                                <span>Hủy</span>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td scope="row" class="noNum">4</td>
                            <td class='left-align'>PTO0307.353.Tân Thành</td>
                            <td class="right-align">Phạm Thị Bích Ngọc</td>
                            <td class='center-align'>0987469090</td>
                            <td class='right-align'>18-08-2021 19:58:43</td>
                            <td class='center-align'>Nạp tiền</td>
                            <td class="noNum">2108181957578731435</td>
                            <td><span class="monney">+500.000</span></td>
                            <td class="fee">0</td>
                            <td class="">NCC001</td>
                            <td class="">POS</td>
                            <td class=""><span class="alert alert-success status" role="alert">Thành công</span></td>
                            <td class="">1</td>
                            <td class="gr-button-cancel">
                              <button type="button" class="detail-button btn btn-primary detail-button-tab" @click="$bvModal.show('detail-transaction-modal')">
                                <i class="fas fa-eye"></i>
                                <span>Chi tiết</span>
                              </button>
                              <button type="button" class="cancel-button btn btn-primary detail-button-tab">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                                <span>Hủy</span>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td scope="row" class="noNum">4</td>
                            <td class='left-align'>PTO0307.353.Tân Thành</td>
                            <td class="right-align">Phạm Thị Bích Ngọc</td>
                            <td class='center-align'>0987469090</td>
                            <td class='right-align'>18-08-2021 19:58:43</td>
                            <td class='center-align'>Nạp tiền</td>
                            <td class="noNum">2108181957578731435</td>
                            <td><span class="monney">+500.000</span></td>
                            <td class="fee">0</td>
                            <td class="">NCC001</td>
                            <td class="">POS</td>
                            <td class=""><span class="alert alert-success status" role="alert">Thành công</span></td>
                            <td class="">1</td>
                            <td class="gr-button-cancel">
                              <button type="button" class="detail-button btn btn-primary detail-button-tab" @click="$bvModal.show('detail-transaction-modal')">
                                <i class="fas fa-eye"></i>
                                <span>Chi tiết</span>
                              </button>
                              <button type="button" class="cancel-button btn btn-primary detail-button-tab">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                                <span>Hủy</span>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td scope="row" class="noNum">4</td>
                            <td class='left-align'>PTO0307.353.Tân Thành</td>
                            <td class="right-align">Phạm Thị Bích Ngọc</td>
                            <td class='center-align'>0987469090</td>
                            <td class='right-align'>18-08-2021 19:58:43</td>
                            <td class='center-align'>Nạp tiền</td>
                            <td class="noNum">2108181957578731435</td>
                            <td><span class="monney">+500.000</span></td>
                            <td class="fee">0</td>
                            <td class="">NCC001</td>
                            <td class="">POS</td>
                            <td class=""><span class="alert alert-success status" role="alert">Thành công</span></td>
                            <td class="">1</td>
                            <td class="gr-button-cancel">
                              <button type="button" class="detail-button btn btn-primary detail-button-tab" @click="$bvModal.show('detail-transaction-modal')">
                                <i class="fas fa-eye"></i>
                                <span>Chi tiết</span>
                              </button>
                              <button type="button" class="cancel-button btn btn-primary detail-button-tab">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                                <span>Hủy</span>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td scope="row" class="noNum">4</td>
                            <td class='left-align'>PTO0307.353.Tân Thành</td>
                            <td class="right-align">Phạm Thị Bích Ngọc</td>
                            <td class='center-align'>0987469090</td>
                            <td class='right-align'>18-08-2021 19:58:43</td>
                            <td class='center-align'>Nạp tiền</td>
                            <td class="noNum">2108181957578731435</td>
                            <td><span class="monney">+500.000</span></td>
                            <td class="fee">0</td>
                            <td class="">NCC001</td>
                            <td class="">POS</td>
                            <td class=""><span class="alert alert-success status" role="alert">Thành công</span></td>
                            <td class="">1</td>
                            <td class="gr-button-cancel">
                              <button type="button" class="detail-button btn btn-primary detail-button-tab" @click="$bvModal.show('detail-transaction-modal')">
                                <i class="fas fa-eye"></i>
                                <span>Chi tiết</span>
                              </button>
                              <button type="button" class="cancel-button btn btn-primary detail-button-tab">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                                <span>Hủy</span>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td scope="row" class="noNum">4</td>
                            <td class='left-align'>PTO0307.353.Tân Thành</td>
                            <td class="right-align">Phạm Thị Bích Ngọc</td>
                            <td class='center-align'>0987469090</td>
                            <td class='right-align'>18-08-2021 19:58:43</td>
                            <td class='center-align'>Nạp tiền</td>
                            <td class="noNum">2108181957578731435</td>
                            <td><span class="monney">+500.000</span></td>
                            <td class="fee">0</td>
                            <td class="">NCC001</td>
                            <td class="">POS</td>
                            <td class=""><span class="alert alert-success status" role="alert">Thành công</span></td>
                            <td class="">1</td>
                            <td class="gr-button-cancel">
                              <button type="button" class="detail-button btn btn-primary detail-button-tab" @click="$bvModal.show('detail-transaction-modal')">
                                <i class="fas fa-eye"></i>
                                <span>Chi tiết</span>
                              </button>
                              <button type="button" class="cancel-button btn btn-primary detail-button-tab">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                                <span>Hủy</span>
                              </button>
                            </td>
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
                  <b-modal id="detail-transaction-modal" hide-footer size="lg">
                    <template #modal-title>
                      Chi tiết giao dịch
                    </template>
                    
                    <div class="row gr-detail1">
                        <div class="col-lg-3 col-md-3">

                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="d-block gr-detail">
                              <div class="row">
                                <div class="col-lg-6 col-md-6" v-bind:style="{'text-align': 'right' }">
                                    <span class="left-label">Dịch vụ:</span>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                  
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-lg-6 col-md-6" v-bind:style="{'text-align': 'right' }">
                                  <span class="left-label">Loại giao dịch:</span>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                  <span class="right-label">Rút tiền</span>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-lg-6 col-md-6" v-bind:style="{'text-align': 'right' }">
                                  <span class="left-label">Số tài khoản:</span>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                  <span class="right-label">19036411327014</span>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-lg-6 col-md-6" v-bind:style="{'text-align': 'right' }">
                                  <span class="left-label">Tên tài khoản:</span>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                  <span class="right-label account-name">Tạ mạnh trường</span>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-lg-6 col-md-6" v-bind:style="{'text-align': 'right' }">
                                  <span class="left-label">Mã giao dịch:</span>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                  <span class="right-label">25656821113131131313113</span>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-lg-6 col-md-6 num1-money" v-bind:style="{'text-align': 'right' }">
                                  <span class="left-label">Số tiền:</span>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                  <span class="right-label money-num">400,000</span>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-lg-6 col-md-6" v-bind:style="{'text-align': 'right' }">
                                  <span class="left-label">Nội dung:</span>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                  <span class="right-label">momo</span>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-lg-6 col-md-6" v-bind:style="{'text-align': 'right' }">
                                  <span class="left-label" >Trạng thái:</span>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                  <span class="right-label alert alert-success status" role="alert">Thành công</span>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-lg-6 col-md-6" v-bind:style="{'text-align': 'right' }">
                                  <span class="left-label">Mã lỗi:</span>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                  <span class="right-label">0</span>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-lg-6 col-md-6" v-bind:style="{'text-align': 'right' }">
                                  <span class="left-label">Chi tiết lỗi:</span>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                  <span class="right-label">Thành công</span>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-lg-6 col-md-6">
                                </div>
                                <div class="col-lg-6 col-md-6">
                                  <button class="print-button btn btn-secondary print1-button right-label" type="submit">
                                      <i class="fa fa-print" aria-hidden="true"></i><span>In phiếu</span>
                                  </button>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-lg-6 col-md-6" v-bind:style="{'text-align': 'right' }">
                                    <span class="left-label">Hóa đơn điện tử:</span>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                  
                                </div>
                              </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3">

                        </div>

                        
                    </div>

                    <div class="row grButton">
                      <div class="col-lg-10 col-lg-10">

                      </div>
                      <div class="col-lg-2 col-md-2 button-close">
                        <b-button class="btn btn-secondary close-button" block @click="$bvModal.hide('detail-transaction-modal')">Đóng</b-button>

                        
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
  name: "ReportTransaction",
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/color.scss";
@import "../styles/transaction.scss";

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