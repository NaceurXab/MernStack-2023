import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const Update = () => {
    const {id} = useParams()

    const [Title , setTitle] = useState("");
    const [Price , setPrice] = useState(0);
    const [ Description , setDescription ] = useState("");

    const navigate = useNavigate()

    useEffect(() =>{
        axios.get(`http://localhost:5000/api/products/${id}`)
            .then(res =>{
                const {Title , Price , Description } = res.data.oneProduct
                setTitle(Title)
                setPrice(Price)
                setDescription(Description)
            })
            .catch(err => (console.log(err)))
    },[id])

    const onUpdateHandler = (e) =>{
        e.preventDefault()
        const newObj ={
            Title,
            Price,
            Description
        }
        axios.put(`http://localhost:5000/api/products/${id}`, newObj)
            .then(res => {
                console.log("your Product has been added successfully  ✅✅✅✅")
                navigate("/")
            })
            .catch(err => {console.log(err)})
    }
  return (
    <div>
        <h1>Edit</h1>
        <form onSubmit={ onUpdateHandler} >
            <div>
                <label htmlFor="Title">Title</label>
                <input type="text" onChange={(e) => {setTitle(e.target.value)}} value={Title}/>
            </div>
            <div>
                <label htmlFor="Price">Price</label>
                <input type="Number" onChange={(e) => {setPrice(e.target.value)}} value={Price} />
            </div>
            <div>
                <label htmlFor="Description">Description</label>
                <input type="text" onChange={(e) => {setDescription(e.target.value)}} value={Description} />
            </div>
            <div>
                <input type="Submit" value="Update"/>
            </div>
        </form>
    </div>
  )
}

export default Update