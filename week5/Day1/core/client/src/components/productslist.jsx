import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Productslist = (props) => {
    const [allProducts , setAllProducts] = useState([])
    const {refreshState } = props

    useEffect(() =>{
        axios.get('http://localhost:5000/api/products')
            .then(res =>{
                console.log(res.data.allProducts);
                setAllProducts(res.data.allProducts)
            })
            .catch(err =>{
                console.log(err);
            })
    },[refreshState])
    
    const removeFromDom = (productid) =>{
        setAllProducts(allProducts.filter(product => product._id !== productid));
    }

    const deleteProduct = (productid) =>{
        axios.delete('http://localhost:5000/api/products/' + productid)
            .then(res => {
                removeFromDom(productid)
            })
            .catch(err => console.log(err))
    }

  return (
    <fieldset>
        <legend>Products</legend>
        <hr />
        {allProducts.map((oneProduct) => {
            return <div key={oneProduct._id}>
                <Link to={"/Details/" + oneProduct._id}>{oneProduct.Title}</Link >
                <Link to={"/edit/" + oneProduct._id}>update {oneProduct.Title}</Link >
                <button onClick={(e) => {deleteProduct(oneProduct._id)}}>delete</button>
            </div>
        })}

    </fieldset>
  )
}

export default Productslist