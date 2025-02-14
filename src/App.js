import './App.css'
import React, { useState, useEffect } from 'react'
import Home from './component/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CrudProduct from './component/crud/CrudProduct'
import AddProduct from './component/crud/AddProduct'
import UpdateProduct from './component/crud/UpdateProduct'
import ViewProduct from './component/crud/ViewProduct'
import Contact from './component/Contact'
import ProductService from './component/js/ProductService'
import ProductDetail from './component/product/productDetail/ProductDetail'

function App() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   ProductService.getProducts()
  //     .then(response => {
  //       setProducts(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);

  const products = [
    {
      id: '1',
      name: 'weft hair',
      image:
        '//product.hstatic.net/200000490033/product/z4159702250021_537e0b8bd61c7568fcd773bdc4dd4259_b699273fd1b6483a8f48d8e38a8429a0_large.jpg',
      brand: 'halihair',
      material: '100% tóc việt Nam',
      length: "8''->32''",
      makeStyle:
        'straight, body wave, deep wave, loose wave, ocean wave, spanish curl , water wave, deep wave, natural wave,..nếu có kiểu khác khách hàng có thể gửi hình cho chúng tôi làm',
      color: 'màu sắc làm theo yêu cầu của khách hàng',
      expiry: 'từ 1 năm trở lên , với chăm sóc tốt',
    },
    {
      id: '2',
      name: 'bulk hair',
      image:
        '//product.hstatic.net/200000490033/product/z4159702250021_537e0b8bd61c7568fcd773bdc4dd4259_b699273fd1b6483a8f48d8e38a8429a0_large.jpg',
      brand: 'halihair',
      material: '100% tóc việt Nam',
      length: "8''->32''",
      color: 'màu sắc làm theo yêu cầu của khách hàng',
      expiry: 'từ 1 năm trở lên , với chăm sóc tốt',
    },
    {
      id: '3',
      name: 'tape hair',
      image:
        '//product.hstatic.net/200000490033/product/z4158274225490_4c9969638bd326ae4eb1de8dab39c855_3d66638bc1ed45829de948dbdd1748ce_large.jpg',
      brand: 'halihair',
      material: '100% tóc việt Nam',
      length: "8''->32''",
      makeStyle:
        'straight, body wave, deep wave, loose wave, ocean wave, spanish curl , water wave, deep wave, natural wave,..nếu có kiểu khác khách hàng có thể gửi hình cho chúng tôi làm',
      color: 'màu sắc làm theo yêu cầu của khách hàng',
      expiry: 'từ 1 năm trở lên , với chăm sóc tốt',
    },
    {
      id: '4',
      name: 'Y Tip hair',
      image:
        '//product.hstatic.net/200000490033/product/z4158302549003_bb9849ae29fd57275d4c746d41074e3b_ca14c1785ffe4afc9de5fd14c6d6ed7c_large.jpg',
      brand: 'halihair',
      material: '100% tóc việt Nam',
      length: "8''->32''",
      makeStyle:
        'straight, body wave, deep wave, loose wave, ocean wave, spanish curl , water wave, deep wave, natural wave,..nếu có kiểu khác khách hàng có thể gửi hình cho chúng tôi làm',
      color: 'màu sắc làm theo yêu cầu của khách hàng',
      expiry: 'từ 1 năm trở lên , với chăm sóc tốt',
    },
    {
      id: '5',
      name: 'u tip hair',
      image:
        '//product.hstatic.net/200000490033/product/z4158274257811_5d7ace22c88ff79cbb78154c521f6f19_acd8a39d82a94884935f5f15b1a7d1cd_large.jpg',
      brand: 'halihair',
      material: '100% tóc việt Nam',
      length: "8''->32''",
      makeStyle:
        'straight, body wave, deep wave, loose wave, ocean wave, spanish curl , water wave, deep wave, natural wave,..nếu có kiểu khác khách hàng có thể gửi hình cho chúng tôi làm',
      color: 'màu sắc làm theo yêu cầu của khách hàng',
      expiry: 'từ 1 năm trở lên , với chăm sóc tốt',
    },
    {
      id: '6',
      name: 'I Tip hair',
      image:
        '//product.hstatic.net/200000490033/product/z4158274195930_0d8293ccb8a35f7a01f355f2e45af438_3de6e9c6c53d49a3ace5801ca0af7e48_large.jpg',
      brand: 'halihair',
      material: '100% tóc việt Nam',
      length: "8''->32''",
      makeStyle:
        'straight, body wave, deep wave, loose wave, ocean wave, spanish curl , water wave, deep wave, natural wave,..nếu có kiểu khác khách hàng có thể gửi hình cho chúng tôi làm',
      color: 'màu sắc làm theo yêu cầu của khách hàng',
      expiry: 'từ 1 năm trở lên , với chăm sóc tốt',
    },
  ]

  return (
    <div>
      <Router>
        <div className="container">
          <Switch>
            {/* <Route exact path="/">
              <Home />
            </Route> */}
           <Route exact path="/" component={Home}></Route>
            <Route path="/edit" component={CrudProduct}></Route>
            <Route path="/add-product/:id" component={AddProduct}></Route>
            <Route path="/update-product" component={UpdateProduct}></Route>
            <Route path="/view-product/:id" component={ViewProduct}></Route>
            <Route path="/products/:id">
              <ProductDetail products={products} />
            </Route>
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
