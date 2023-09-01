import axios from 'axios'
import React, { useState } from 'react'




const Form = (props) => {
    const [Title , setTitle] = useState("");
    const [Price , setPrice] = useState(0);
    const [ Description , setDescription ] = useState("");
    
    const {refresh} = props

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const newObj = {
            Title ,
            Price ,
            Description 
        }
        axios.post("http://localhost:5000/api/products", newObj)
            .then(res => {
                console.log("your product has been added successfully  ✅✅✅✅")
                refresh()
                setTitle("")
                setDescription("")
                setPrice(0)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
    <div>
        <h1>Product Manager</h1>
        <form onSubmit={ onSubmitHandler} >
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
                <input type="Submit" value="Create"/>
            </div>
        </form>
    </div>
  )
}

export default Form