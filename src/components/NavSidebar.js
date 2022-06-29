import React from 'react'
import { NavLink } from 'react-router-dom';

function NavSidebar() {
  function myFunction(e) {
    var elems = document.querySelector(".active");
    if(elems !==null){
     elems.classList.remove("active");
    }
   e.target.className += " active";
  }

  return (  

      <div className='d-none position-fixed bg-dark text-light h-100 w-sm-70 d-sm-block col-2 p-2'>
        <h3>Admin</h3>
        <p>NhatQuang</p>
        <nav>
           <ul className="list-group">
           <li  className="">
                <NavLink
                    activeClassName="active"
                    className="list-group-item bg-dark d-flex"
                    to="/"
                    exact={true}
                  >
                    {/* icon */}
                    <i className="bi bi-house-door-fill text-light"></i>
                  {/*icon */}
                    <span className="text-light"> Trang chủ</span>
                </NavLink>
              </li>
              <li  className="">
                <NavLink
                    activeClassName="active"
                    className="list-group-item bg-dark d-flex"
                    to="/products"
                    exact={true}
                  >
                    {/* icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-light bi bi-bag-fill" viewBox="0 0 16 16">
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                  </svg>
                  {/*icon */}
                    <span className="text-light"> Sản phẩm</span>
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  activeClassName="active"
                  className="list-group-item bg-dark d-flex"
                  to="/product/add"
                >
                  {/* icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-plus text-light" viewBox="0 0 16 16">
                     <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                    </svg>
                  {/*icon */}
                  <span className="text-light"> Thêm</span>
                </NavLink>
              </li>
              <li class="">
                  <NavLink
                  activeClassName="active"
                  className="list-group-item bg-dark d-flex"
                  to="/orders"
                >
                  {/* icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket3 text-light" viewBox="0 0 16 16">
                      <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
                    </svg>
                   
                  {/*icon */}
                  <span className="text-light"> Đơn hàng</span>
                </NavLink>
              </li>
              <li className="">

                 <NavLink
                  activeClassName="active"
                  className="list-group-item bg-dark d-flex"
                  to="/users"
                >
                  {/* icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill text-light" viewBox="0 0 16 16">
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
                   
                  {/*icon */}
                  <span className="text-light"> Người dùng</span>
                </NavLink>
              </li>
              
          </ul>
                      
            </nav>
        
    </div>
  
  )
}

export default NavSidebar