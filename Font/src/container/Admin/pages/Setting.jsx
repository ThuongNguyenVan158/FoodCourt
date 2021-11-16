import React from 'react'

const Settings = () => {
    return (
        <div>
            <h2 className="page-header">
                Cài đặt tài khoản
            </h2>
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <div className="card__header1">
                            <h3>Thay đổi mật khẩu</h3>
                        </div>
                        <div className="card__body">
                            <form>
                                 <div className="form-group">
                                     <lable>Mật khẩu hiện tại</lable>
                                     <input type="text" className="form-control"></input>
                                 </div>
                                 <div className="form-group">
                                     <lable>Mật khẩu mới</lable>
                                     <input type="text" className="form-control"></input>
                                 </div>
                                 <div className="form-group">
                                    <lable>Nhập lại mật khẩu mới</lable>
                                    <input type="text" className="form-control"></input>
                                </div>
                                 <div className="row">
                                     <div className="col-12"> 
                                         <button type="submit" className="buttonform">Thay đổi mật khẩu</button>  
                                     </div>
                                </div>                                                                  
                            </form>                           
                        </div>                                                                        
                    </div>
                </div>
                <div className="col-6">
                    <div className="card">
                        <div className="card__header1">
                            <h3>Thông tin tài khoản</h3>
                        </div>
                        <div className="card__body">
                            <form>
                                <div className="form-group">
                                    <lable>Tên đăng nhập</lable>
                                    <input type="text" className="form-control" readOnly></input>
                                </div>
                                <div className="form-group">
                                    <lable>Tên tài khoản</lable>
                                    <input type="text" className="form-control" readOnly value="1"></input>
                                </div>   
                                <div className="form-group">
                                    <lable>Loại tài khoản</lable>
                                    <select className="form-control" readOnly>
                                        <option value="1">1-Quản trị viên</option>
                                        <option value="2">2-Nhân viên</option>
                                    </select>
                                </div>   
                                <div className="form-group">
                                    <lable>Giới tính</lable>
                                    <select className="form-control" readOnly>
                                        <option value="1">Nam</option>
                                        <option value="2">Nữ</option>
                                    </select>
                                </div> 
                                <div className="form-group">
                                    <lable>Ngày sinh</lable>
                                    <input type="date" className="form-control"></input>
                                </div> 
                                <div className="form-group">
                                    <lable>Địa chỉ</lable>
                                    <input type="text" className="form-control" readOnly></input>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <button type="submit" className="buttonform">Thay đổi thông tin</button>
                                    </div>
                                </div>                                                                        
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings
