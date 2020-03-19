import React, { useEffect, useRef, useContext } from 'react';
import AuthContext from '../../context/auth-context';

import classes from './Cockpit.css';

const cockpit = (props) => {
    const toggleButtonRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    // can be specified multiple times with different parameters
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        setTimeout(() => {
            alert('Saved data to the cloud');
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, [props.personsLength]);        // second parameter specifies when the effect should run (i.e. when props.persons is modified)

    // this will behave similary to componentDidMount
    useEffect(() => {
        setTimeout(() => {
            alert('Created new data in the cloud');
        }, 1000);
        toggleButtonRef.current.click();
    }, []);     // this effect has no dependencies so will run for the first time and never again

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
              ref={toggleButtonRef}
              className={btnClass}
              onClick={props.clicked}>Toggle Persons</button>
            {/* <AuthContext.Consumer>
              {(context) => <button onClick={context.login}>Log In</button>}
            </AuthContext.Consumer> */}
            <button onClick={authContext.login}>Log In</button>
        </div>
    );
}

// good idea to wrap functional components in memo if they don't change with every update (optimisation)
export default React.memo(cockpit);