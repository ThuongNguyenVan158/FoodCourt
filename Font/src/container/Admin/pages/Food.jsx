import React from 'react'
import Table from '../../../components/table/Table'

const listFoods = {
    header: [
        "Mã món",
        "Tên món",
        "Mã danh mục",
        "UrlImage",
        "Giá",
        "Mô tả"
    ],
    body: [
        {
            idfood: "1",
            foodname: "Phở",
            idcategr: "1",
            urlimage: "https:abc.jpg",
            price: "15000",
            description:"Ngon"
        },
        {
            idfood: "2",
            foodname: "Cơm chiên",
            idcategr: "2",
            urlimage: "https:abc.jpg",
            price: "15000",
            description:"Ngon"
        },
        {
            idfood: "3",
            foodname: "Trà sửa thái xanh",
            idcategr: "3",
            urlimage: "https:abc.jpg",
            price: "15000",
            description:"Ngon"
        },
        {
            idfood: "4",
            foodname: "Gà nướng",
            idcategr: "4",
            urlimage: "https:abc.jpg",
            price: "15000",
            description:"Ngon"
        },
        {
            idfood: "5",
            foodname: "Bún bò",
            idcategr: "1",
            urlimage: "https:abc.jpg",
            price: "15000",
            description:"Ngon"
        },
        {
            idfood: "6",
            foodname: "Xôi gà",
            idcategr: "2",
            urlimage: "https:abc.jpg",
            price: "15000",
            description:"Ngon"
        },
        {
            idfood: "7",
            foodname: "Coca Cola",
            idcategr: "3",
            urlimage: "https:abc.jpg",
            price: "15000",
            description:"Ngon"
        },
        ]
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.idfood}</td>
        <td>{item.foodname}</td>
        <td>{item.idcategr}</td>
        <td>{item.urlimage}</td>
        <td>{item.price}</td>
        <td>{item.description}</td>
    </tr>
)
const Foods = () => {
    return (
        <div>
            <h2 className="page-header">Quản lí món</h2>
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card__header1">
                                <h3>Quản lí món</h3>
                            </div>
                            <div className="card__body">
                                <form>
                                    <div className="form-group">
                                        <lable>Mã món</lable>
                                        <input type="text" className="form-control"></input>
                                    </div>
                                    <div className="form-group">
                                        <lable>Tên món</lable>
                                        <input type="text" className="form-control"></input>
                                    </div>   
                                    <div className="form-group">
                                        <lable>Mã danh mục</lable>
                                        <input type="text" className="form-control"></input>
                                    </div>   
                                    <div className="form-group">
                                        <lable>UrlImage</lable>
                                        <input type="text" className="form-control"></input>
                                    </div> 
                                    <div className="form-group">
                                        <lable>Giá</lable>
                                        <input type="text" className="form-control"></input>
                                    </div>
                                    <div className="form-group">
                                        <lable>Mô tả</lable>
                                        <textarea className="form-control"></textarea>
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
                                </form>                                                                                                                                </div>
                            </div>
                    </div>
                    <div className="col-8">
                        <div className="card">
                            <div className="card__header1">
                                <h3>Danh sách món</h3>
                            </div>
                            <div className="card__body">
                                <Table
                                    limit='3'
                                    headData={listFoods.header}
                                    renderHead={(item, index) => renderOrderHead(item, index)}
                                    bodyData={listFoods.body}
                                    renderBody={(item, index) => renderOrderBody(item, index)}
                                />
                            </div>                                                                                
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Foods
