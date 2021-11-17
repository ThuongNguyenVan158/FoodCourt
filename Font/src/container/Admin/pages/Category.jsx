import React,{useState,  useEffect} from 'react'
import axios from "axios";
import Table from '../../../components/table/Table'
import {toast} from "react-toastify"

const latestOrders = {
    header: [
        "Mã danh mục",
        "Tên danh mục",
        "Url image"
            ],
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)
const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.img_url}</td>
    </tr>                
)
const Categorys = () => {
     const [listcate,setCategory]=useState([]);
     const [newCate,setnewCate]=useState(
         {  id: "",
            name: "",
            img_url: "",
        });
    const[obj,setNewObj] =useState({
        id: "",
        name:"",
        img_url:"",
    });
    const changeObj=(e)=>{
        setNewObj(e);
    };
     const handleInputChange=(e)=>
     {
        e.preventDefault();
        let { name, value }=e.target;
        setnewCate({...newCate,[name]: value });
        console.log(newCate.id + "," + newCate.name+", " + newCate.img_url);
        console.log(newCate.type);
     };
     const handleAdd=(e)=>{
        e.preventDefault();
     };
     const handleEdit=(e)=>{
        e.preventDefault();
     };
     const handleRemove=(e)=>{
        e.preventDefault();
     };
      useEffect(()=>{
        async function fetchListCategory()
        {
            try {
                const res = await axios.get(
                    `http://localhost:5000/api/v1/category/getListCategory`
                  );
                setCategory(res.data);
                console.log(res.data);
            } catch (error) {
                console.log('fail to get listCategory', error.message)
            }
        }
        fetchListCategory();
      },[]);
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
                            <form action="" autoComplete="off"> 
                                <div className="form-group">
                                    <lable>Mã danh mục</lable>
                                    <input type="number" className="form-control" name="id" value={obj.id} onChange={handleInputChange}></input>
                                </div>
                                <div className="form-group">
                                    <lable>Tên danh mục</lable>
                                    <input type="text" className="form-control" name="name" value={obj.name} onChange={handleInputChange}></input>
                                </div>
                                <div className="form-group">
                                    <lable>UrlImage</lable>
                                    <input type="text" className="form-control" name="img_url" value={obj.img_url} onChange={handleInputChange} />
                                </div>
                                <div className="row">
                                    <div className="col-4"> 
                                        <button type="submit" className="buttonform" onClick={handleAdd} >Thêm</button>  
                                    </div>
                                    <div className="col-4"> 
                                        <button type="submit" className="buttonform" onClick={handleEdit} >Sửa</button>
                                    </div>
                                    <div className="col-4"> 
                                        <button type="submit" className="buttonform" onClick={handleRemove} >Xoá</button>
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
                                    limit='10'
                                    headData={latestOrders.header}
                                    renderHead={(item, index) => renderOrderHead(item, index)}
                                    bodyData={listcate}
                                    renderBody={(item, index) => renderBody(item,index)}
                                />
                            </div>                                                              
                        </div>
                    </div>
                </div>
        </div>
    );
}
export default Categorys
