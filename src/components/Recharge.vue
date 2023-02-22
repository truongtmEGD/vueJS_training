<template>
  <div class="content-recharge">
    <div class="recharge-header">
      <div class="row">
        <div class="col-md-3 col-lg-3 header-left payment-header">
          <span><b>Nạp tiền tại quầy</b></span>
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
        <div class="col-lg-4 col-md-3">

        </div>
        <div class="col-lg-4 col-md-6">
          <div id="content">
            <!-- progressbar -->
            <ProgressBar textFirst="Nạp ví" />
            <form class="formRecharge">
              <div class="form-group grItem">
                <label for="lblChoiceService">Chọn dịch vụ:</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected></option>
                  <option value="1">Ví MoMo</option>
                  <option value="1">Ví MoMo</option>
                  <option value="1">Ví MoMo</option>
                  <option value="1">Ví MoMo</option>
                  <option value="1">Ví MoMo</option>
                </select>
              </div>
              <div class="form-group grItem">
                <label for="lblAccountNum">Số tài khoản:</label>
                <input
                  type="text"
                  class="form-control"
                  id="txtAccount"
                  placeholder="Nhập số tài khoản..."
                />
              </div>
              <div class="form-group grItem seachr-button-gr">
                <button class="search-button btn btn-secondary" type="button">
                  <i class="fa fa-search"></i><span>Tìm kiếm</span>
                </button>
              </div>
              <div class="form-group grItem">
                <div class="row gr-momo">
                  <div class="col-lg-3 col-md-3">
                    <div class="image_list">
                      <img
                        src="../assets/images/momo_bng.png"
                        class="img-momo"
                        alt="Momo"
                      />
                    </div>
                  </div>
                  <div class="col-lg-9 col-md-9 menu-left">
                    <div class="menu">
                      <ul>
                        <li>
                          <p>
                            Tên tài khoản:<span class="history"
                              ><i class="fas fa-history"></i
                              ><span><a href="">Lịch sử</a></span></span
                            >
                          </p>
                        </li>
                        <li><p>Số tài khoản:</p></li>
                        <li><p>Số điện thoại:</p></li>
                        <li><p>Email:</p></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group grItemMoney">
                <label for="lblRechargeMoney">Số tiền nạp:</label>
              </div>
              <div class="input-group grItem formMoneyRecharge">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Số tiền nạp"
                  placeholder="0..."
                />
                <div class="input-group-append">
                  <span class="input-group-text money-payment">VNĐ</span>
                </div>
              </div>
              <div class="form-group grItem">
                <label for="lblRechargeContent">Nội dung nạp tiền:</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
              </div>
              <div class="form-group comment-group">
                <label for="lblRechargeContent"
                  ><span class="comment">Còn lại 160 ký tự</span></label
                >
              </div>
            </form>
            <div class="row gr-button">
              <div class="col-lg-2 col-md-2"></div>
              <div class="col-lg-8 col-md-8">
                <button type="button" class="reset btn btn-primary">
                  Nhập lại
                </button>
                <button class="recharge-button btn btn-secondary" type="submit">
                  <i class="fas fa-arrow-right"></i><span>Nạp tiền</span>
                </button>
              </div>
              <div class="col-lg-2 col-md-2"></div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-3">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar.vue";
export default {
  name: "Recharge",
  components: {
    ProgressBar,
  },
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
@import "../styles/recharge.scss";
</style>
