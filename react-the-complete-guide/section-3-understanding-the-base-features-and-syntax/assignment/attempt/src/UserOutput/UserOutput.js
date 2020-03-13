import React from 'react';

const useroutput = (props) => {

    const style = {
        width: '50%',
        backgroundColor: 'grey',
        font: 'inherit',
        border: '1px solid red',
        padding: '8px',
        margin: '10px auto'
      };

    return (
        <div style={style}>
            <p>Hello there paragraph one</p>
            <p>Hello person with username {props.username}</p>
        </div>
    );
}

export default useroutput;