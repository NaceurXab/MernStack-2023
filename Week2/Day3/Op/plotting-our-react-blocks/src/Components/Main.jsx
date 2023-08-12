
import React from 'react'

const Main = (props) => {
    return (
        <div style = {{flex:'2',backgroundColor:'#e06666',minHeight:'550px',marginTop:'20px',gap:"20px"}}>
            {props.children}
        </div>
    )
}

export default Main