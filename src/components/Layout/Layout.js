import React from 'react';

import Navbar from '../Navbar/Navbar';
import Aux from '../../hoc/Aux';
import Burger from '../../containers/Burger/Burger';

const Layout = () => {
    return (
        <Aux>
            <Navbar />
            <Burger />
        </Aux>
    )
}

export default Layout;