import React , {useEffect, useState} from 'react';
import { useDispatch,useSelector } from 'react-redux'
import axios from 'axios';
import { listProduct } from '../../Redux/Action/ProductAction';




function MainContent() {

    const productList = useSelector((state) => state.productList);
    const {loading, error, products} = productList;
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(listProduct());
    },[dispatch])

    const deleteHandler = async (id) =>  {
     
      alert("Xóa thành công");
      const xoa = await axios.delete(`http://localhost:5000/api/products/${id}`);
      window.location.reload();
      return xoa;
   }  
 
   
  return (
   
         <div class="row justify-content-end mr-5">
      
        {
          products.map((product) => (
            
          <div className="card p-3 shadow-lg col-md-6 col-sm-6 col-lg-3 mb-5 ml-5 ml-lg-3 mw-100" id="product-card">
            <div className="" id="product-detail">
              <img className="w-50" src={product.img}/>
              <p className="">{product.name}</p>
              <p className="">{product.price.toLocaleString() + ' vnđ'}</p>
          
              <div className="row">
                <a className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6" href={`product/edit/${product._id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                    </svg>
                </a>
                <button onClick = {() => deleteHandler(product._id)} type="button" class="btn btn-sm btn-outline-danger p-2 pb-3 col-md-6" href={product._id}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg>
                </button>
              </div>
            </div>
              
          </div>
     
            )   
                 
            )

        }
    </div>

   
  )
}

export default MainContent