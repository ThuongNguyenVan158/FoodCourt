import React from 'react';
import './PaymentMethod.scss';

function PaymentMethod(props) {
  return (
    <div className="card payment-method">
      <div className="payment-method__header">
        <div>Phương thức thanh toán</div>
      </div>
      <div>
        <div className="card-body payment-method__body">
          <div className="payment-method__item">
            <input type="radio" name="payment-method" id="momo" />
            <label htmlFor="momo">
              <div className="d-inline-block" style={{ width: 45 }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png"
                  alt="zalo-pay-icon"
                  height="25px"
                />
              </div>
              Momo
            </label>
          </div>
          <div className="payment-method__item">
            <input type="radio" name="payment-method" id="zalopay" />
            <label htmlFor="zalopay">
              <div className="d-inline-block" style={{ width: 45 }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/vi/7/77/ZaloPay_Logo.png"
                  alt="zalo-pay-icon"
                  width="40px"
                />
              </div>
              ZaloPay
            </label>
          </div>
          <div className="payment-method__item">
            <input type="radio" name="payment-method" id="shopeepay" />
            <label htmlFor="shopeepay">
              <div className="d-inline-block" style={{ width: 45 }}>
                <img
                  src="https://seeklogo.com/images/S/shopee-pay-logo-2217CDC100-seeklogo.com.png"
                  alt="zalo-pay-icon"
                  width="40px"
                />
              </div>
              ShopeePay
            </label>
          </div>
          <div className="payment-method__item">
            <input type="radio" name="payment-method" id="cardpayment" />
            <label htmlFor="cardpayment">
              <div className="d-inline-block" style={{ width: 45 }}>
                <img
                  src="https://timo.vn/wp-content/uploads/card-1673581_1280.png"
                  alt="zalo-pay-icon"
                  height="25px"
                  width="40px"
                />
              </div>
              Thẻ ngân hàng
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

PaymentMethod.propTypes = {};

export default PaymentMethod;
