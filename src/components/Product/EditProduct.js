import React, { useEffect ,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { listProductDetails } from '../../Redux/Action/ProductAction';
import axios from 'axios';
function EditProduct({match}) {
  const productId = match.params.id;

 const dispatch = useDispatch();
  // const productDetails = useSelector((state) => state.productDetails);
  //const {loading, error, product} = productDetails;
  const [product,setProduct] = useState({});
  const [name,setName] = useState("");
  const [price,setPrice] = useState(0);
  const [countInStock,setCountInStock] = useState(0);
  const [image, setImage] = useState("");
 
  const fetchDetail = async()  =>{
    const result =  await axios
        .get(
          `http://localhost:5000/api/products/${productId}`
        )
            .then(({data}) => setProduct((data)))
           
          .catch((err) => console.log(err));
         
           
        }
     
  useEffect(() => {
    fetchDetail();
    if(product)
    {
      setName(product?.name);
      setPrice(product?.price);
      setCountInStock(product?.countInStock);
      setImage(product?.img);
    }
      
  },[product])

 
  return (
    <div className='w-25 card p-2 m-auto container'>
      <img className='m-auto' src={product.img}></img>
      <div className='row mt-2'>
        <label className='col-3'>Tên</label>
        <input className='' type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
      </div>
      <div className='row mt-2'>
        <label className='col-3'>Giá</label>
        <input className='' type="text"  value={price} onChange={(e) => setPrice(e.target.value)}></input>
      </div>
      <div className='row mt-2'>
        <label className='col-3'>Số lượng</label>
        <input className='' type="text"  value={countInStock} onChange={(e) => setCountInStock(e.target.value)}></input>
      </div>
      <div className='row mt-2'>
        <label className='col-3'>Ảnh</label>
        <input className='' type="text"  value={image} onChange={(e) => setImage(e.target.value)}></input>
      </div>
      
      <button className='btn btn-success mt-2'>Thay đổi</button>

    </div>
  )
}

export default withRouter(EditProduct);