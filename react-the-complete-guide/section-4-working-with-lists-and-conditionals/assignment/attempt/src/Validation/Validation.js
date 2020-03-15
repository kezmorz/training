import React from 'react';

const validation = (props) => {
    let text = null;

    if (props.length < 5) {
        text = <p>Text too short</p>
    } else {
        text = <p>Text long enough</p>
    }

    return (
        <div>
            {text}
        </div>
    )
}

export default validation;