import React, { useState, useEffect } from 'react'
import axios from 'axios';

const ProductForm = () => {
    const [productTitle, setProductTitle] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productDescription, setProductDescription] = useState('')

    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            productTitle,
            productPrice,
            productDescription
        })
        .then(res => console.log("Response: ", res))
        .catch(err => console.log("Error: ", err))
    }

    

    return (
        <form onSubmit={ submitHandler }>
            <div className="form">
                <label>Product Title</label>
                <input type="text" name="productTitle" onChange={ e => setProductTitle(e.target.value) }/>
            </div>
            <div className="form">
                <label>Product Price</label>
                <input type="text" name="productPrice" onChange={ e => setProductPrice(e.target.value) }/>
            </div>
            <div className="form">
                <label>Product Description</label>
                <input type="text" name="productDescription" onChange={ e => setProductDescription(e.target.value) }/>
            </div>
            <div className="form">
                <input type="submit" value="submit"/>
            </div>
        </form>
    )
}

export default ProductForm
