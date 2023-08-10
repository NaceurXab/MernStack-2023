import React , { useState } from 'react'

const Form = (props) => {
    const [firstName ,setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [email , setEmail] =useState("");
    const [password , setPassword] = useState("");
    const [confirmPassword , setConfirmPassword] = useState("");

    return (
        <div>
        <form>
                <div  className="mb-3">
                    <label>Firstname :</label>
                    <input   type="text"  onChange={(e)=>setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label>Lastname :</label>
                    <input   type="text" onChange={(e)=>setLastName(e.target.value)}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input   type="email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password :</label>
                    <input   type="password" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div>
                    <label>Confirm Password ; :</label>
                    <input   type="password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                </div>
            </form>
            <div>
                <h1>Your Form Data</h1>
                <p>Firstname :{firstName}</p>
                <p>Lastname : {lastName}</p>
                <p>Email : {email}</p>
                <p>password : {password}</p>
                <p>Confirm password : {confirmPassword}</p>
            </div>
        </div>
        )
}

export default Form