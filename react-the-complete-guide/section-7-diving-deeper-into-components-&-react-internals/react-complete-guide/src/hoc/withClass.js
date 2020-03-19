import React from 'react';

// if we return a functional component like in this function then the filename should be WithClass.js
// generally we use this when we're maniplating JSX
// const withClass = props => (
//     <div className={props.classes}>
//         {props.children}
//     </div>
// );

// this is a regular Javascript function that returns a functional Component
// generally we use this when we're not manipulating any JSX but are applying other logic (like error handling)
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    )
}

export default withClass;