import React from 'react';
import './FooterClient.css';

function FooterClient() {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="footer">
                <h3 className="footer-title">Mọi thắc mắc vui lòng liên hệ</h3>
                <ul className="footer-links">
                  <li>
                    <i className="fa fa-map-marker" />
                    Hồ Chí Minh
                  </li>
                  <li>
                    <i className="fa fa-phone" />
                    0394003434
                  </li>
                  <li>
                    <i className="far fa-envelope" />
                    nhomX@hcmut.edu.vn
                  </li>
                </ul>
              </div>
            </div>
            <div className=" col-4">
              <div className="footer">
                <h3 className="footer-title">Các kiểu thức ăn</h3>
                <ul className="footer-links">
                  <li>Món khai vị</li>
                  <li>Món ăn chính</li>
                  <li>Món tráng miệng</li>
                  <li>Các loại thức uống </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 col-xs-6 col-4">
              <div className="footer">
                <h3 className="footer-title">Các loại dịch vụ</h3>
                <ul className="footer-links">
                  <li>Thanh toán online, tiết kiệm thời gian</li>
                  <li>Đặt món online, thỏa sức lựa chọn</li>
                  <li>Tri ân khách hàng thành viên</li>
                  <li>Đặt bàn trước mà không cần tới nơi</li>
                  <li>Hỗ trợ giải đáp mọi thắc mắc</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterClient;