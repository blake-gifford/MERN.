import './App.css';
import ProductData from './components/ProductData';
import ProductForm from './components/ProductForm';
import React, { useState } from 'react';

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
      <ProductForm addProductToProducts={addProductToProducts}  product={product} setProduct={setProduct} />
      <hr/>
      <ProductData products={products} setProducts={setProducts}/>
    </div>
  );
}

export default App;
