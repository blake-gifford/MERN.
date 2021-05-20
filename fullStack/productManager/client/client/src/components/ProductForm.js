import React, { useState, useEffect } from 'react'
import axios from 'axios';

const ProductForm = props => {
    const [productTitle, setProductTitle] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productDescription, setProductDescription] = useState('')

    // const [product, setProduct ] = useState({
    //     productTitle: "",
    //     productPrice: "",
    //     productDescription: ""
    // })

    const submitHandler = e => {
        e.preventDefault();

        const product = {
            productTitle: productTitle,
            productPrice: productPrice,
            productDescription: productDescription
        }

        axios.post('http://localhost:8000/api/product', product)
        .then(res => console.log("Response: ", res))
        .catch(err => console.log(err))
    }

    // const changeHandler = e => {
    //     setProduct{

    //     }
    //     setProduct({...product})
    // }

    return (
        <form onSubmit={ submitHandler }>
            <div className="form">
                <label htmlFor="productTitle">Product Title</label>
                <input type="text" name="productTitle" onChange={ ( e ) => setProductTitle(e.target.value) }/>
            </div>
            <div className="form">
                <label htmlFor="productPrice">Product Price</label>
                <input type="number" name="productPrice" onChange={ ( e ) => setProductPrice(e.target.value) }/>
            </div>
            <div className="form">
                <label htmlFor="productDescription">Product Description</label>
                <input type="text" name="productDescription" onChange={ ( e ) => setProductDescription(e.target.value) }/>
            </div>
            <div className="form">
                <input type="submit" value="submit"/>
            </div>
        </form>
    )
}

export default ProductForm
