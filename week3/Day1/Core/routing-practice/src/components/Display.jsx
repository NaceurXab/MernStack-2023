import React from 'react';
import { useParams } from 'react-router-dom';

const Display = () => {
    const { val, color , bgcolor } = useParams();
    console.log(val,color,bgcolor);
    if (isNaN(val)) {
        if (color === "" && bgcolor === "") {
            return (
                <h1>the word is : {val}</h1>
            );
        } else {
            return (
                <h1 style={{ color: color, backgroundColor: bgcolor }}>the word is : {val}</h1>
            );
        }
    } else {
        return (
            <h1>the number is : {val}</h1>
        );
    }
};

export default Display;
