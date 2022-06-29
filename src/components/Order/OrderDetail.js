import React, { useEffect ,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { detailOrder } from '../../Redux/Action/OrderAction';
import moment from "moment";
import axios from 'axios';
function OrderDetail({match}) {
    
    const dispatch = useDispatch();
    const orderDetail = useSelector((state) => state.orderDetail);
    
    const {loading, error,order} = orderDetail;
    
    console.log(order);
    const id = match.params.id;
    

    useEffect(() => {
        dispatch(detailOrder(id));

        
    }, [id,dispatch]);
   

    const paidHandler = async () => {
      const isPaid = await axios.put(`http://localhost:5000/api/orders/${id}/pay`);
      window.location.reload();
      return isPaid;
    }




  return (
    <div>
        <section class="content-main m-auto w-75">
            <div class="content-header">
                <a class="btn btn-white text-white" href="/orders"></a>
            </div>
            <div style={{marginLeft: 16 +'rem',marginTop: 4 + 'rem'}} class="card shadow-lg">
                <header class="card-header p-3 bg-success">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6">
                            <span>
                                <i class="bi bi-calendar-event"></i>
                                <b class="text-white">{ moment(order?.createdAt).format('l') }</b>
                            </span>
                            <br/>
                            <small class="text-white mx-3 "><b>Order ID: {order?._id}</b></small>
                        </div>
                            {/* <div class="col-lg-6 col-md-6 ms-auto d-flex justify-content-end align-items-center">
                                <select class="form-select d-inline-block" style="max-width: 200px;">
                                    <option>Change status</option>
                                    <option>Awaiting payment</option>
                                    <option>Confirmed</option>
                                    <option>Shipped</option>
                                    <option>Delivered</option>
                                </select>
                                <a class="btn btn-success ms-2" href="/order">
                                    <i class="fas fa-print"></i>
                                </a>
                            </div> */}
                    </div>
                </header>
                <div  class="card-body ml-5">
                    <div class="row mb-5 order-info-wrap">
                        <div class="col-md-6 col-lg-4">
                            <article class="icontext align-items-start">
                                <span class="icon icon-sm rounded-circle alert-success">
                                    <i class="bi bi-person-circle"></i>
                                </span>
                                <div class="text">
                                    <h6 class="mb-1">Khách hàng</h6>
                                    <p class="mb-1">{order?.user.name} <br/>
                                        <a href="mailto:user@example.com">{order?.user.email}</a>
                                    </p>
                                </div>
                            </article>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <article class="icontext align-items-start">
                                <span class="icon icon-sm rounded-circle alert-success">
                                    <i class="bi bi-truck"></i>
                                </span>
                                <div class="text">
                                    <h6 class="mb-1">Thông tin đơn hàng</h6>
                                    <p class="mb-1">{order?.shippingAddress.city} <br/> Phương thức thanh toán: {order?.paymentMethod}</p>
                                </div>
                            </article>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <article class="icontext align-items-start">
                                <span class="icon icon-sm rounded-circle alert-success">
                                    <i class="bi bi-geo-alt-fill"></i>
                                </span>
                                <div class="text">
                                    <h6 class="mb-1">Địa chỉ</h6>
                                    <p class="mb-1">{order?.shippingAddress.address}</p>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-9">
                            <div class="table-responsive">
                                <table class="table border table-lg">
                                    <thead>
                                        <tr>
                                            <th style={{width: 40 +'%'}}>Sản phẩm</th>
                                            <th style={{width: 20 +'%'}}>Giá</th>
                                            <th style={{width: 20 +'%'}}>Số lượng</th>
                                            <th class="text-end" style={{width: 20 +'%'}}>Tổng cộng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <a class="itemside text-dark" href="/order">

                                                    <div class="info">
                                                        {order?.orderItems.map((item) => (<p>{item.name}</p>))}
                                                    </div>
                                                </a>
                                            </td>
                                            <td>{order?.orderItems.map((item) => (<p>{item.price.toLocaleString()}</p>))}</td>
                                            <td> {order?.orderItems.map((item) => (<p>{item.qty}</p>))} </td>
                                            <td class="text-end">{order?.orderItems.map((item) => 
                                            {
                                                let totalSale = 0;
                                                totalSale = totalSale + (item.price *item.qty);
                                                return (<p>{totalSale.toLocaleString()}</p>)
                                                // var subTotal = (item.price * item.qty);
                                                // var  total = 0;
                                                // total+= subTotal;
                                                // console.log(subTotal);
                                                
                                            }
                                           )}</td>
                                            <td>
                                                <dd>
                                                    {
                                                         order?.isPaid === true ? ( <td> <span class="badge rounded-pill alert alert-success text-success">Đã thanh toán</span></td>)
                                                         : (<td><span class="badge rounded-pill alert-danger">Chưa thanh toán</span></td>)
                                                    }
                                                   
                                                </dd>
                                            </td>
                                        </tr>
                                        {/* <tr>
                                            <td colspan="4">
                                                <article class="float-end">
                                                    <dl class="dlist">
                                                        <dt>Subtotal:</dt> 
                                                        <dd>$3,556</dd>
                                                    </dl>
                                                    <dl class="dlist">
                                                        <dt>Shipping cost:</dt> 
                                                        <dd>$56,907</dd>
                                                    </dl>
                                                    <dl class="dlist">
                                                        <dt>Grand total:</dt>
                                                        <dd><b class="h5">$2,345</b></dd>
                                                    </dl>
                                                    <dl class="dlist">
                                                        <dt class="text-muted">Status:</dt>
                                                        <dd>
                                                            <span class="badge rounded-pill alert alert-success text-success">Payment done</span>
                                                        </dd>
                                                    </dl>
                                                </article>
                                            </td>
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            {order?.isPaid === true ? (
                                 <div class="box shadow-sm bg-light">
                                     <button class="btn btn-success col-12" onClick={() => paidHandler()}>ĐÁNH DẤU ĐÃ GIAO HÀNG</button>
                                   </div>
                            ) : ( <div class="box shadow-sm bg-light">
                                    <button class="btn btn-primary col-12" onClick={() => paidHandler()}>ĐÁNH DẤU ĐÃ THANH TOÁN</button>
                                </div>)
                        }
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default withRouter(OrderDetail)