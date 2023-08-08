import React, { useState } from 'react'



const Person = (props) => {
  const [age , setage] = useState(props.age)
  return (
    <div>
      <h1>
        {props.lastName} , {props.firstName}
      </h1>
      <p>
        Age: {age}
      </p>
      <p>
        Hair color: {props.hairColor}
      </p>
      <button onClick = { (event) => setage(age+1)}>birthday button for {props.firstName} {props.lastName}</button>
    </div>
  )
}

export default Person