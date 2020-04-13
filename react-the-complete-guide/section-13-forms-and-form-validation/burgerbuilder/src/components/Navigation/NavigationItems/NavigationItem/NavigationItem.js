import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <NavLink 
            to={props.link}
            activeClassName={classes.active}
            // if we pass in an exact prop we can control which NavLinks are exact a little bit easier
            exact={props.exact}>{props.children}</NavLink>
    </li>
)

export default navigationItem;