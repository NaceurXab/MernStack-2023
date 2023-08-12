import React from 'react'

const Display = (props) => {
    return (
        <div>
            {props.list.map((box, index) => (
                <div
                    key={index}
                    style={{
                        backgroundColor: box.color,
                        width: box.width,
                        height: box.height,
                        display: 'inline-block',
                    }}
                ></div>
            ))}
        </div>
    );
};

export default Display;