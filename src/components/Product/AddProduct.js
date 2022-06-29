import React, { useEffect ,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { listProductDetails } from '../../Redux/Action/ProductAction';
import axios from 'axios';
function EditProduct() {
  
  const dispatch = useDispatch();
 

  const [name,setName] = useState("");
  const [price,setPrice] = useState(0);
  const [countInStock,setCountInStock] = useState(0);

  const [img, setImg] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");

  const [manHinh,setManHinh] = useState("");
  const [cameraSau,setCameraSau] = useState("");
  const [cameraSelfie,setCameraSelfie] = useState("");
  const [CPU,setCPU] = useState("");
  const [BoNhoTrong,setBoNhoTrong] = useState("");
  
  const [tinhNang1,setTinhNang1] = useState("");
  const [tinhNang2,setTinhNang2] = useState("");
  const [tinhNang3,setTinhNang3] = useState("");
  const [tinhNang4,setTinhNang4] = useState("");


const submitHandler =  async () =>  {
    if(name === "" || price === "" || img ==="" || img1 === "" || img2 === ""
     || img3 === "" || img4 === ""  || manHinh === ""|| 
     cameraSau === ""|| cameraSelfie === ""|| CPU === ""|| BoNhoTrong === "" || tinhNang1 === "" || tinhNang2 === ""
     || tinhNang3 === "" || tinhNang4 === "" ){
      alert("vui long nhap day du");
  }
  else{
      try {
        let config = {
          headers: {
            "Content-Type": "application/json",
    
            } 
          };
        await axios.post(
            'http://localhost:5000/api/products/',
            {name,img,price,tinhNang:{
              tinhNang1,tinhNang2,tinhNang3,tinhNang4
            },imgSlide :{
              img1,img2,img2,img3,img4
            },detail:{
              manHinh,cameraSau,cameraSelfie,CPU,BoNhoTrong
            },countInStock },
            config);
          
        alert("Thêm thành công");
        document.location.reload();
      } catch (err){  
        console.log(err);
      }
    
  }
}

  return (
    <div className='container p-2'>
      
      <div className='row mt-2 w-50'>
        <label className='col'>Tên</label>
        <input className='' type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
      </div>
      <div className='row mt-2 w-50'>
        <label className='col'>Giá</label>
        <input className='' type="text"  value={price} onChange={(e) => setPrice(e.target.value)}></input>
      </div>
      <div className='row mt-2 w-50'>
        <label className='col'>Số lượng</label>
        <input className='' type="text"  value={countInStock} onChange={(e) => setCountInStock(e.target.value)}></input>
      </div>
      <div className='row mt-2 w-50'>
        <label className='col'>Ảnh review</label>
        <input className='' type="text"  value={img} onChange={(e) => setImg(e.target.value)}></input>
      </div>
      <div className='row mt-2 w-50'>
        <label className='col'></label>
        <input className='' type="text" value={img1} onChange={(e) => setImg1(e.target.value)}></input>
      </div>
      <div className='row mt-2 w-50'>
        <label className='col'></label>
        <input className='' type="text"  value={img2} onChange={(e) => setImg2(e.target.value)}></input>
      </div>
      <div className='row mt-2 w-50'>
        <label className='col'></label>
        <input className='' type="text"  value={img3} onChange={(e) => setImg3(e.target.value)}></input>
      </div>
      <div className='row mt-2 w-50'>
        <label className='col'></label>
        <input className='' type="text"  value={img4} onChange={(e) => setImg4(e.target.value)}></input>
      </div>
      <div className='row mt-2 w-50'>
        <label className='col'>Chi tiết sản phẩm</label>
        <input className='' type="text" value={manHinh} onChange={(e) => setManHinh(e.target.value)}></input>
      </div>
      <div className='row mt-2 w-50'>
        <label className='col'></label>
        <input className='' type="text"  value={cameraSau} onChange={(e) => setCameraSau(e.target.value)}></input>
      </div>
      <div className='row mt-2 w-50'>
        <label className='col'></label>
        <input className='' type="text"  value={cameraSelfie} onChange={(e) => setCameraSelfie(e.target.value)}></input>
      </div>
      <div className='row mt-2 w-50'>
        <label className='col'></label>
        <input className='' type="text"  value={CPU} onChange={(e) => setCPU(e.target.value)}></input>
      </div>
      <div className='row mt-2 w-50'>
        <label className='col'></label>
        <input className='' type="text"  value={BoNhoTrong} onChange={(e) => setBoNhoTrong(e.target.value)}></input>
      </div>
      <div className='row mt-2 w-50'>
        <label className='col'>Tính năng</label>
        <input className='' type="text"  value={tinhNang1} onChange={(e) => setTinhNang1(e.target.value)}></input>
      </div>
      <div className='row mt-2 w-50'>
        <label className='col'></label>
        <input className='' type="text"  value={tinhNang2} onChange={(e) => setTinhNang2(e.target.value)}></input>
      </div>
      <div className='row mt-2 w-50'>
        <label className='col'></label>
        <input className='' type="text"  value={tinhNang3} onChange={(e) => setTinhNang3(e.target.value)}></input>
      </div>
      <div className='row mt-2 w-50'>
        <label className='col'></label>
        <input className='' type="text"  value={tinhNang4} onChange={(e) => setTinhNang4(e.target.value)}></input>
      </div>
      <button onClick={submitHandler} className='btn btn-success mt-2 '>Thêm</button>

    </div>
  )
}

export default withRouter(EditProduct);