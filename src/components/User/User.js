import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listUser } from '../../Redux/Action/UserAction';

function User() {
    const userList = useSelector((state) => state.userList);
  
  
    const {loading, error, users} = userList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listUser());

        
    }, [dispatch]);

  return (
    <div className='container'>
        <section class="content-main ml-5"><div class="content-header"><h2 class="content-title">Customers</h2><div><a class="btn btn-primary" href="/users">
            <i class="material-icons md-plus"></i> Create new</a></div></div>
            <div class="container">
                <header class="card-header ml-5">
                    <div class="row gx-3"><div class="col-lg-4 col-md-6 me-auto">
                        <input type="text" placeholder="Search..." class="form-control"/></div>
                    </div>
                 </header>
                    <div class="card-body">
                        {
                            loading ? (<p className='alert-info p-5'>Loading</p>) : error ? (
                                <p className='alert-danger p-5'>{error}</p> 
                            ) : (
                                <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 ml-5">
                                {
                                    
                                  users.map((user) => (
                                    <>
                                        <div class="col" key={user._id}>
                                            <div class="card card-user shadow-lg col-12">
                                                <div class="card-header"><img class="img-md img-avatar" width={40} height={40} src={user.isAdmin === false ? ("/images/customer.png") : ("/images/admin.png")}   alt="User pic"/></div>
                                                <div class="card-body">
                                                    <h5 class="card-title mt-5">{user.name}</h5>
                                                    <div class="card-text text-muted">
                                                        <p class="m-0">
                                                            {user.isAdmin === true  ? (<p className='m-0'>Admin</p>) : (<p className='m-0'>Customer</p>)}
                                                        </p>
                                                        <p>
                                                            <a href={`mailto:${user.email}`}>{user.email}</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                
                                    </>
                                   
                    
                                  )
                                  
                                      
                                    )
                                }
                                 </div>
                            )
                   
                            }
                        
                                                <nav class="float-end mt-4" aria-label="Page navigation">
                                                    <ul class="pagination">
                                                        <li class="page-item disabled">
                                                            <a class="page-link" href="/users">Previous</a>
                                                        </li>
                                                        <li class="page-item active">
                                                                <a class="page-link" href="/users">1</a>
                                                        </li>
                                                        <li class="page-item">
                                                            <a class="page-link" href="/users">Next</a>
                                                        </li>
                                                    </ul>
                                                </nav>
                        </div>
                </div>
        </section>
    </div>
  )
}

export default User