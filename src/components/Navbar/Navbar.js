import React from 'react';
import classes from './Navbar.css';

const Navbar = (props) => {
    return <nav className={classes.Navbar}>{props.children}</nav>
}

export default Navbar;