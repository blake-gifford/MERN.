import React, { useState, useEffect } from 'react'
import axios from 'axios';

const EditProduct = props => {
    const { id } = props;
    const [productTitle, setProductTitle] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productDescription, setProductDescription] = useState('')



    //res.data.results.productTitle
    //set it equal

    const submitHandler = e => {
        e.preventDefault();

        const product = {
            productTitle: productTitle,
            productPrice: productPrice,
            productDescription: productDescription
        }

        axios.put(`http://localhost:8000/api/product/${id}/update`, product)
        .then(res => console.log("Response: ", res))
        .catch(err => console.log(err))
    }

    return (
        <form onSubmit={ submitHandler }>
            <h4>Edit Product!</h4>
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
                <input type="submit" value="Update"/>
            </div>
        </form>
    )
}

export default EditProduct
