import React from 'react'

const InfoAdmin = () => {
    return (
        <div>
            <h2 className="page-header">
                Thông tin tài khoản
            </h2>
            <div className="row">
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
                                    <lable>Loại tài khoản</lable>
                                    <input type="text" className="form-control" readOnly></input>
                                </div>   
                                <div className="form-group">
                                    <lable>Tên tài khoản</lable>
                                    <input type="text" className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <lable>Email</lable>
                                    <input type="email" className="form-control"></input>
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

export default InfoAdmin
