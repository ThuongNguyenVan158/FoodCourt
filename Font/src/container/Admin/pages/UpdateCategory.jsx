import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditCategory =()=>{
    let history = useHistory(); //The useHistory hook gives you access to the history instance that you may use to navigate.
    const { id } = useParams();

    const [newCate,setnewCate]=useState(
        {  id: "",
           name: "",
           img_url: "",
       });
       const {name,img_url} =newCate;
      const handelupdateCategory = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/api/v1/employee/${id}`, newCate);
        history.push("/categorys");
      };
     
      const loadnewCate =  () => {
        fetch(`http://localhost:5000/api/v1/employee/${id}`,{
                method: "GET",
              })
                .then((response) => response.json())
                .then((result) => {
                    console.log(result);
                setnewCate({
                        id: id,
                        update: true,
                        name: result.response[0].name,    
                    });
                })
                .catch((error) => console.log("error", error));
      };
      useEffect(() => {
        loadnewCate();
      }, []);
      const handleInputChange=(e)=>
        {
           e.preventDefault();
           let { name, value }=e.target;
           setnewCate({...newCate,[name]: value });
           console.log(newCate.id + "," + newCate.name+", " + newCate.img_url);
        };
      return(
        <div className="row">
            <div className="col-4">
                <div className="card">
                    <div className="card__header1">
                        <h3>Update danh mục</h3>
                    </div>
                    <div className="card__body">
                    <form action="" autoComplete="off"> 
                        <div className="form-group">
                            <lable>Mã danh mục</lable>
                            <input type="number" className="form-control" name="id" value={id} onChange={handleInputChange}></input>
                        </div>
                        <div className="form-group">
                            <lable>Tên danh mục</lable>
                            <input type="text" className="form-control" name="name" value={name} onChange={handleInputChange}></input>
                        </div>
                        <div className="form-group">
                            <lable>UrlImage</lable>
                            <input type="text" className="form-control" name="img_url" value={img_url} onChange={handleInputChange} />
                        </div>
                        <div className="row">
                            <div className="col-12"> 
                                <button type="submit" className="buttonform" onClick={handelupdateCategory} >Cập nhật</button>  
                            </div>
                        </div>                                                                          
                    </form>   
                    </div>
                </div>
            </div>
        </div>
      );
}
export default EditCategory;