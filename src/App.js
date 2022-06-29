import './App.css';
import NavSidebar from './components/NavSidebar';
import MainContent from './components/Product/MainContent';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EditProduct from './components/Product/EditProduct';
import AddProduct from './components/Product/AddProduct';
import Dashboard from './components/Dashboard/Dashboard';
import User from './components/User/User';
import Order from './components/Order/Order';
import OrderDetail from './components/Order/OrderDetail';


function App() {
  return (
    <div className="App">
      <Router>
        <NavSidebar/>
        <Switch>
            <Route path="/products">
                <MainContent/>
            </Route>
            <Route path="/product/edit/:id">
                <EditProduct/>
            </Route>
            
            <Route path="/product/add">
                <AddProduct/>
            </Route>
            <Route path="/users">
                <User/>
            </Route>
            <Route path="/order/:id">
                <OrderDetail/>
            </Route>
            <Route path="/orders">
                <Order/>
            </Route>
            <Route path="/">
                <Dashboard/>
            </Route>
        </Switch>
      </Router>
        
          
    </div>
  );
}

export default App;
