import React,{useState,useEffect} from "react";
import axios from "axios";

import Table from "../../../components/table/Table";
import { Link } from 'react-router-dom';

const customerTableHead = [
  "Tên đăng nhập",
  "Tên tài khoản",
  "Loại tài khoản",
  "email",
  "Xoá",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const Accounts = () => {
  const [listAccount,setlistAccount]=useState([]);
  const [account,setAccount] = useState({
    username:"",
    password:"1",
    name:"",
    type:"",
    gender:"",
    birthdate:"",
    address:"",
  });
  const handleInputChange=(e)=>
  {
     e.preventDefault();
     let { name, value }=e.target;
     setAccount({...account,[name]: value });
     console.log(account.username + "," + account.name+", " + account.type +", "+account.gender +", "+account.birthdate +", " + account.address);
  };
  const handleAdd=(e)=>{
    e.preventDefault();
  };
  const fetchListAccount= async()=>{
    try {
      const res = await axios.get(
          `http://localhost:5000/api/v1/security/admin/getAllEmployee`
        );
      setlistAccount(res.data);
      console.log(res.data);
  } catch (error) {
      console.log('fail to get listCategory', error.message)
  }
  };

 useEffect(()=>{
   fetchListAccount();
 },[]);

 const deleteRecord = (AccId) =>
 {
   axios.delete(`http://localhost:5000/api/v1/employee/${AccId}`)
   .then((result)=>{
    fetchListAccount();
   })
   .catch(()=>{
     alert('Error in the Code');
   });
 };
  return (
    <div>
      <h2 className="page-header">Quản lí tài khoản</h2>
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
                  <input type="text" className="form-control" name="username" onChange={handleInputChange}></input>
                </div>
                <div className="form-group">
                  <lable>Tên tài khoản</lable>
                  <input type="text" className="form-control" name="name" onChange={handleInputChange}></input>
                </div>
                <div className="form-group">
                  <lable>Loại tài khoản</lable>
                  <select className="form-control" name="type" onChange={handleInputChange}>
                    <option value="1">1-Quản trị viên</option>
                    <option value="2">2-Nhân viên</option>
                  </select>
                </div>
                <div className="form-group">
                  <lable>Email</lable>
                  <input type="email" className="form-control" name="name" onChange={handleInputChange}></input>
                </div>
                <div className="row">
                  <div className="col-12">
                    <button type="submit" className="buttonform" onClick={handleAdd}>
                      Thêm
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="card">
            <div className="card__header1">
              <h3>Danh sách tài khoản nhân viên</h3>
            </div>
            <div className="input-group mb-4 mt-3">
               <div className="form-outline">
                   <input type="text" id="form1" className="form-control" placeholder="Tìm kiếm" style={{backgroundColor:"#ececec"}}/>
               </div>
               <button type="button"  className="btn btn-success">
                   <i className="fa fa-search" aria-hidden="true"></i>
               </button>
            </div>  
            <div className="card__body">
              <Table
                limit="10"
                headData={customerTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={listAccount}
                renderBody={(item, index) => 
                  <tr key={index}>
                    <td>{item.username}</td>
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td>{item.email}</td>
                    <td>
                        <Link onClick={() => {
                            const confirmBox = window.confirm(
                              "Bạn chắc chắn muốn xoá "+ item.name
                            )
                            if (confirmBox === true) {
                              deleteRecord(item.id)
                            }
                          }}> <i className="far fa-trash-alt" style={{fontSize:"18px",marginRight:"5px"}}></i> </Link>
                    </td>
                  </tr>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
