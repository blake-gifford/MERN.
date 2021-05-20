import './App.css';
import React, { useState } from 'react';
import { Router } from '@reach/router';
import ProductData from './components/ProductData';
import ProductForm from './components/ProductForm';
import OneProduct from './components/OneProduct';
import EditProduct from './components/EditProduct';

const initialProduct = {
  productTitle: "",
  productPrice: "",
  productDescription: ""
}

function App() {
  const [product, setProduct] = useState(initialProduct)
  const [products, setProducts] = useState([])


  const addProductToProducts = dbProduct => {
    setProducts([...products, dbProduct]);
    setProduct(initialProduct);
  }


  return (
    <div className="App">
      <h2>Welcome to Product Manager!</h2>
      <Router>
      <ProductForm path="/new" addProductToProducts={addProductToProducts}  product={product} setProduct={setProduct} />
      <EditProduct path="/edit"/>
      <ProductData path="/" products={products} setProducts={setProducts}/>
        <OneProduct path="/product/:id" products={products} setProducts={setProducts}/>
      </Router>
    </div>
  );
}

export default App;
