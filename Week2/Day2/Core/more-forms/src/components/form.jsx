import React, { useState } from 'react'

const Form = (props) => {
    const [firstName ,setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [firstNameError , setFirstNameError] = useState("");
    const [LastNameError , setLastNameError] = useState("");
    const [email , setEmail] =useState("");
    const [emailError , setEmailError ] = useState("");
    const [password , setPassword] = useState("");
    const [passwordError , setPasswordError] = useState("");
    const [confirmPassword , setConfirmPassword] = useState("");
    const [confirmPasswordError , setConfirmPasswordError] = useState("");

    const handleFirstName = (e) =>{
        setFirstName(e.target.value);
        if (e.target.value.length < 2){
            setFirstNameError("First Name must be at least 2 characters");
        }else{
            setFirstNameError("");
        }
    }
    const handleLastName = (e) =>{
        setLastName(e.target.value);
        if (e.target.value.length < 2){
            setLastNameError("Last Name must be at least 2 characters");
        }else{
            setLastNameError("");
        }
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value);
        if (e.target.value.length < 5){
            setEmailError("Email must be at least 5 characters");
        }else{
            setEmailError("");
        }
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value);
        if (e.target.value.length !== 8){
            setPasswordError("Password must be at least 8 characters");
        }else{
            setPasswordError("");
        }
    }

    return (
        <form>
            <div  className="mb-3">
                <label>Firstname :</label>
                <input   type="text"  onChange={handleFirstName}/>
            </div>
            {
                firstNameError?
                <p>{firstNameError}</p>:
                ""
            }
            <div>
                <label>Lastname :</label>
                <input   type="text" onChange={handleLastName}/>
            </div>
            {
                LastNameError?
                <p>{LastNameError}</p>:
                ""
            }
            <div>
                <label>Email:</label>
                <input   type="email" onChange={handleEmail}/>
            </div>
            {
                emailError?
                <p>{emailError}</p>:
                ""
            }
            <div>
                <label>Password :</label>
                <input   type="password" onChange={handlePassword}/>
            </div>
            {
                passwordError?
                <p>{passwordError}</p>:
                ""
            }
            {
                confirmPasswordError?
                <p>{confirmPasswordError}</p>:
                ""
            }
            <div>
                <label>Confirm Password ; :</label>
                <input   type="password" onChange={(e)=>{
                    const confirmedPassword = e.target.value;
                    setConfirmPassword(confirmedPassword);
                    if (confirmedPassword === password){
                        setPasswordError("");
                    }else{
                        setPasswordError("Password must match");
                    }
                }}/>
            </div>
        </form>
    )
}

export default Form