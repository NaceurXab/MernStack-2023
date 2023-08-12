import React , { useState } from 'react'

const Form = (props) => {
    const [color , setColor] = useState("");
    const [height , setHeight] = useState(100);
    const [width , setWidth] = useState(100);


    const dobox = (e) =>{
        e.preventDefault();
        const newbox = ({color: color ,width: width+"px",height:height+"px"});
        props.onNewBox(newbox);
        setColor("");
        setHeight(100);
        setWidth(100);
    }
    return (
        <form onSubmit={ dobox }>
            <div>
                <div>
                    <label htmlFor="color"> color</label>
                    <input type="text" value = {color} onChange = {(e) => setColor(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="height"> height</label>
                    <input type="text" value = {height} onChange = {(e) => setHeight(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="width"> width </label>
                    <input type="text" value = {width} onChange = { (e) => setWidth(e.target.value)}/>
                </div>
            </div>
            <div>
                <input type="submit" value ="add" />
            </div>
        </form>
    )
}

export default Form