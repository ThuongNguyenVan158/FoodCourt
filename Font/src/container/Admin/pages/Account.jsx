import React from 'react'

import Table from '../../../components/table/Table'

import customerList from '../../../assets/JsonData/customers-list.json'

const customerTableHead = [
    '',
    'Tên đăng nhập',
    'Tên tài khoản',
    'Loại tài khoản',
    'Giới tính',
    'Ngày sinh',
    'Địa chỉ'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.female}</td>
        <td>{item.birthday}</td>
        <td>{item.location}</td>
    </tr>
)

const Accounts = () => {
    return (
        <div>
            <h2 className="page-header">
                Quản lí tài khoản
            </h2>
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <div className="card__header1">
                            <h3>Quản lí tài khoản</h3>
                        </div>
                        <div className="card__body">                                                                                                                                           
                            <form>
                                <div className="form-group">
                                    <lable>Tên đăng nhập</lable>
                                    <input type="text" className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <lable>Tên tài khoản</lable>
                                    <input type="text" className="form-control"></input>
                                </div>   
                                <div className="form-group">
                                    <lable>Loại tài khoản</lable>
                                    <select className="form-control">
                                        <option value="1">1-Quản trị viên</option>
                                        <option value="2">2-Nhân viên</option>
                                    </select>
                                </div>   
                                <div className="form-group">
                                    <lable>Giới tính</lable>
                                    <select className="form-control">
                                        <option value="1">Nam</option>
                                        <option value="2">Nữ</option>
                                    </select>
                                </div> 
                                <div className="form-group">
                                    <lable>Ngày sinh</lable>
                                    <input type="text" className="form-control"></input>
                                </div> 
                                <div className="form-group">
                                    <lable>Địa chỉ</lable>
                                    <input type="text" className="form-control"></input>
                                </div>
                                <div className="row">
                                    <div className="col-4"> 
                                        <button type="submit" className="buttonform">Thêm</button>  
                                    </div>
                                    <div className="col-4"> 
                                        <button type="submit" className="buttonform">Sửa</button>
                                    </div>
                                    <div className="col-4"> 
                                        <button type="submit" className="buttonform">Xoá</button>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="buttonform">Đặt lại mật khẩu</button>
                                    </div>
                                </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                            </form>
                        </div>                                                                       
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card__header1">
                            <h3>Danh sách tài khoản</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                limit='5'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={customerList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accounts
