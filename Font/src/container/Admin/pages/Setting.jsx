import React,{useState} from 'react'

const Settings = () => {
    const [passWord,setPassword] =useState({
        password:"",
        confirmnewpassword:"",
    });
    const {password,confirmnewpassword} =passWord;
    const handleInputChange=(e)=>
    {
       e.preventDefault();
       let { name, value }=e.target;
       setPassword({...passWord,[name]: value });
       console.log(passWord.password+", " + passWord.confirmnewpassword);
    };
    const handleEdit=(e)=>{
        e.preventDefault();
        if (passWord.confirmnewpassword !== passWord.password ||passWord.confirmnewpassword===""||passWord.password==="")
        {
        alert('Mật khẩu không khớp! Vui lòng nhập lại!');
        setPassword(
           {password:"",
            confirmnewpassword:"",
            }
        );
        return;
        }

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
                                     <lable>Mật khẩu mới</lable>
                                     <input type="password" className="form-control" name="password" value={password} onChange={handleInputChange}
                                     required
                                     ></input>
                                 </div>
                                 <div className="form-group">
                                    <lable>Nhập lại mật khẩu</lable>
                                    <input type="password" className="form-control" name="confirmnewpassword" value={confirmnewpassword} onChange={handleInputChange}
                                     required
                                    ></input>
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
