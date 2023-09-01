import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Details = () => {
    const {id} = useParams()

    const[oneProduct , setOneProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`)
            .then(res => {
                console.log(res.data)
                setOneProduct(res.data.oneProduct)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

  return (
    <div>
        <h3>More Details</h3>
        <p>{oneProduct.Title}</p>
        <p>{oneProduct.Price}</p>
        <p>{oneProduct.Description}</p>

    </div>
  )
}

export default Details