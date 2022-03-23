import React from 'react';

import FirstCarousel from './FirstCarousel';
import CartImage from './CartImage';
import BockLine from './BlockLine';
import Fooder from './Fooder';
import Navbar from './Navbar';
import Login from './Login';



function Home(props) {
    return (
        <div>
            
            <Navbar />
            <FirstCarousel />
            <CartImage />
            <BockLine />
            <Fooder />
            <div style={{}}>
            <Login/>
            
            
        
            </div>
        </div>
    );
}

export default Home;