import React , { useState } from 'react'

const Form = (props) => {
    const [todo , setMoreToDo] = useState("");
    const {list,setUpdateList} = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        const newjob = {
            text : todo,
            checked : false
        }
        setUpdateList([...list , newjob]);
        setMoreToDo("");
    }
    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <input type="text" value = {todo} onChange={(e) => {setMoreToDo(e.target.value)}} />
            </div>
            <div>
                <input type ='submit' value ="add"/>
            </div>
        </form>
    )
}

export default Form