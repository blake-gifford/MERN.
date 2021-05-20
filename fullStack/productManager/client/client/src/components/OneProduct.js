import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton'

const OneProduct = props => {
    const { id } = props;
    const [product, setProduct] = useState({
        productTitle: "",
        productPrice: "",
        productDescription: ""
    });


    useEffect(() => {
        axios.get(`http://localhost:8000/api/getproduct/${id}`)
            .then(response => {
                setProduct(response.data.results)
            }
    )}, [id])

    const changeHandler = e => {
        const {name, value} = e.target;
    }




    return (
        <>
            <p>Product Name: {product.productTitle}</p>
            <p>Price: {product.productPrice}</p>
            <p>Description: {product.productDescription}</p>
            <DeleteButton id={id}/>
            <button><Link to={'/'}>Cancel</Link></button>
            <button><Link to={'/edit'} product={product}>Edit</Link></button>
        </>
        
    )
}

export default OneProduct
