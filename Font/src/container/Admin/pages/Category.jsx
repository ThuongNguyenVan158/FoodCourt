import React from 'react'
import Table from '../../../components/table/Table'

const latestOrders = {
    header: [
        "Mã danh mục",
        "Tên danh mục",
            ],
    body: [
        {
            id: "1",
            name: "Món nước",
        },
        {
            id: "2",
            name: "Móng nướng",
        },
        {
            id: "3",
            name: "Đồ uống",
        },
        {
            id: "4",
            name: "Món hấp xào",
        },
        {
            id: "5",
            name: "Món tráng miệng",
        },
        {
            id: "6",
            name: "Bánh mì, chả",
        },
        ]
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
    </tr>
)
const Categorys = () => {
    return (
        <div>
            <h2 className="page-header">Quản lí doanh mục</h2>
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card__header1">
                                <h3>Quản lí doanh mục</h3>
                            </div>
                            <div className="card__body">
                            <form>
                                <div className="form-group">
                                    <lable>Mã danh mục</lable>
                                    <input type="text" className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <lable>Tên danh mục</lable>
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
                                </div>                                                                          
                            </form>   
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="card">
                            <div className="card__header1">
                                <h3>Danh sách danh mục</h3>
                            </div>
                            <div className="card__body">
                                <Table
                                    limit='3'
                                    headData={latestOrders.header}
                                    renderHead={(item, index) => renderOrderHead(item, index)}
                                    bodyData={latestOrders.body}
                                    renderBody={(item, index) => renderOrderBody(item, index)}
                                />
                            </div>                                                
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Categorys
