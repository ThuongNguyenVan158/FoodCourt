import React,{useState,useEffect} from "react";
import axios from "axios";

import Table from "../../../components/table/Table";

import customerList from "../../../assets/JsonData/customers-list.json";

const customerTableHead = [
  "Tên đăng nhập",
  "Tên tài khoản",
  "Loại tài khoản",
  "email",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;
const renderBody = (item, index) => (
  <tr key={index} >
    <td>{item.username}</td>
    <td>{item.name}</td>
    <td>{item.type}</td>
    <td>{item.email}</td>
  </tr>
)

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
  const handleRemove=(e)=>{
    e.preventDefault();
  };
 useEffect(()=>{
   async function fetchListAccount()
   {
       try {
           const res = await axios.get(
               `http://localhost:5000/api/v1/security/admin/getAllEmployee`
             );
           setlistAccount(res.data);
           console.log(res.data);
       } catch (error) {
           console.log('fail to get listCategory', error.message)
       }
   }
   fetchListAccount();
 },[]);
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
                  <lable>Giới tính</lable>
                  <select className="form-control" name="gender" onChange={handleInputChange}>
                    <option value="1">Nam</option>
                    <option value="2">Nữ</option>
                  </select>
                </div>
                <div className="form-group">
                  <lable>Ngày sinh</lable>
                  <input type="date" className="form-control" name="birthdate" onChange={handleInputChange}></input>
                </div>
                <div className="form-group">
                  <lable>Địa chỉ</lable>
                  <input type="text" className="form-control" name="address" onChange={handleInputChange}></input>
                </div>
                <div className="row">
                  <div className="col-6">
                    <button type="submit" className="buttonform" onClick={handleAdd}>
                      Thêm
                    </button>
                  </div>
                  <div className="col-6">
                    <button type="submit" className="buttonform" onClick={handleRemove}>
                      Xoá
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
            <div className="card__body">
              <Table
                limit="10"
                headData={customerTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={listAccount}
                renderBody={(item, index) => renderBody(item,index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
