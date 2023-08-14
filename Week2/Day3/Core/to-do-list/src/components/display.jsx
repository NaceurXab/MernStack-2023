import React  from 'react'

const Display = (props) => {
    const {list, setUpdateList} = props
    const removefromlist = (index) => {
        const newList = list.filter((item)=>{
            return item !== list[index];
        })
        setUpdateList(newList);

    }
    const mark = (index) => {
        const updatedlist = list.map((todo , i) => {
            if (index === i){
                todo.complete = !todo.complete;
            }
            return todo
        })
        setUpdateList(updatedlist);
    }
    const tabStyle = (prop) => {
        if(prop){
            return "checked" 
        }
        return "notchecked"
    }
    return (
        <div>
            {list.map((item,index) => {
                return(
                <div className={`tab ${ tabStyle(item.complete) }`} key = {index}>
                    <p>{item.text}</p>
                    <input checked = {item.complete} type='checkbox' onChange={(e) =>{mark(index)}}/>
                    <button onClick={(e) =>{ removefromlist (index) }}>delete</button>
                </div>
                )
            })}
        </div>
    )
}

export default Display