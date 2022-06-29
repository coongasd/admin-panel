import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listOrder } from '../../Redux/Action/OrderAction';
import moment from "moment";
function Order() {

   const dispatch = useDispatch();
   const orderList = useSelector((state) => state.orderList);
   const {loading, error, orders} = orderList;

 
  
    useEffect(() => {
        dispatch(listOrder());

    }, [dispatch]);

    const deleteHandler = async (id) =>  {
     
        alert("Xóa thành công");
        const xoa = await axios.delete(`http://localhost:5000/api/orders/${id}`);
        window.location.reload();
        return xoa;
     }  
     
    
    return (
        <div className='container'>
            <section class="content-main">
                <div class="content-header ">
                    <h2 class="content-title">Orders</h2>
                </div>
                <div class="card mb-4 shadow-sm ml-5">
                    <header class="card-header bg-white">
                        <div class="row gx-3 py-3">
                            <div class="col-lg-4 col-md-6 me-auto">
                                <input type="text" placeholder="Search..." class="form-control p-2" />
                            </div>
                            <div class="col-lg-2 col-6 col-md-3">
                                <select class="form-select">
                                    <option>Status</option>
                                    <option>Active</option>
                                    <option>Disabled</option>
                                    <option>Show all</option>
                                </select>
                            </div>
                            <div class="col-lg-2 col-6 col-md-3">
                                <select class="form-select">
                                    <option>Show 20</option>
                                    <option>Show 30</option>
                                    <option>Show 40</option>
                                </select>
                            </div>
                        </div>
                    </header>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Tên sản phẩm</th>
                                        <th scope="col">Số lượng</th>
                                        <th scope="col">Tên người mua</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Tổng tiền</th>
                                        <th scope="col">Tình trạng đơn hàng</th>
                                        <th scope="col">Ngày tạo đơn hàng</th>
                                        <th>Trạng thái</th>
                                        <th scope="col" class="text-end">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        loading ? (<p className='alert-info p-5'>Loading</p>) : error ? 
                                        (<p className='alert-danger p-5'>{error}</p> ) :

                                            
                                        (
                                                <>
                                                    {
                                                     orders.map((order) => (
                                                        
                                                        <tr key={order._id}>    
                                                            <td><b>{order.orderItems.map((item) => <p>{item.name}</p> )}</b></td>
                                                            <td><b>{order.orderItems.map((item) => <p>{item.qty}</p> )}</b></td>
                                                            <td>{order.user.name}</td>
                                                            <td>{order.user.email}</td>
                                                            <td>{order.orderItems.map((item) => {
                                                             
                                                                 let totalSale = 0;
                                                                totalSale = (item.price * item.qty);
                                                              
                                                                return (<p>{totalSale.toLocaleString()} vnđ</p>)
                                                            }  
                                                            )}</td>
                                                            {
                                                                order.isPaid === true ? ( <td><span class="badge rounded-pill alert-success">Đã thanh toán lúc {moment(order?.paidAt).format('l')}</span></td>)
                                                                : (<td><span class="badge rounded-pill alert-danger">Chưa thanh toán</span></td>)
                                                            }
                                                           
                                                            
                                                            <td> {moment(order.createdAt).format('l')}</td>
                                                            {
                                                                order.isDelivered === true ? ( <td><span class="badge btn-success">Đã giao hàng</span></td>)
                                                                : ( <td><span class="badge btn-danger">Chưa giao hàng</span></td>)
                                                            }
                                                           
                                                           
                                                            <td class="d-flex justify-content-end align-item-center">
                                                                <a class="text-success" href={`/order/${order._id}`}>
                                                                <i class="bi bi-eye-fill"></i>
                                                                </a>
                                                            </td>
                                                       
                                                        </tr>
                                                     ))
                                                    }

                                                </>
                                            )
                                    }
                                   
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Order