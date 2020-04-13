import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';

// for boolean props we don't need to specify true/false (just including the prop is enough i.e active in this function)
const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem
            link="/"
            exact>
            Burger Builder
        </NavigationItem>
        <NavigationItem
            link="/orders">
            Orders
        </NavigationItem>
    </ul>
)

export default navigationItems;