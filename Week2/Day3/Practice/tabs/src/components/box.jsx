import React from 'react'

const Box = (props) => {
    const { choices , navIndex } = props;
    return (
        <div className='box'>
            {choices[navIndex].show}
        </div>
    )
}

export default Box