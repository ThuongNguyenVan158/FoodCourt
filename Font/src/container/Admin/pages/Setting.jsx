import React,{useState} from 'react'

const Settings = () => {
    const [passWord,setPassword] =useState({
        password:"",
        newpassword:"",
        confirmnewpassword:"",
    });
    const handleInputChange=(e)=>
    {
       e.preventDefault();
       let { name, value }=e.target;
       setPassword({...passWord,[name]: value });
       console.log(passWord.password + "," + passWord.newpassword+", " + passWord.confirmnewpassword);
    };
    const handleEdit=(e)=>{
        e.preventDefault();
     };
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
                                     <input type="text" className="form-control" name="password" onChange={handleInputChange}></input>
                                 </div>
                                 <div className="form-group">
                                     <lable>Mật khẩu mới</lable>
                                     <input type="text" className="form-control" name="newpassword" onChange={handleInputChange}></input>
                                 </div>
                                 <div className="form-group">
                                    <lable>Nhập lại mật khẩu mới</lable>
                                    <input type="text" className="form-control" name="confirmnewpassword" onChange={handleInputChange}></input>
                                </div>
                                 <div className="row">
                                     <div className="col-12"> 
                                         <button type="submit" className="buttonform" onClick={handleEdit}>Thay đổi mật khẩu</button>  
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
