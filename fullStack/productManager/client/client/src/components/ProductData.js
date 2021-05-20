import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';


const ProductData = props => {
    const { products, setProducts } = props;
    // const [ allProducts, setAllProducts ] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/getproduct')
            .then(response => {
                setProducts(response.data.data)
            })
            .catch(err => console.log(err));
    }, [products])


    return (
        <>    
            
                <h1>All Products</h1>
                {
                    products.map((product, i) =>
                    <div key={i}>
                            <p><Link to={ `/product/${product._id}`}>{product.productTitle} </Link> </p>
                        </div>
                    )
                }

        </>
    )
}

export default ProductData

