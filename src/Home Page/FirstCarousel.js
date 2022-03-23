import React from 'react';
import { Carousel } from 'antd';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const contentStyle = {
    height: '250px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

function FirstCarousel(props) {
    return (
    
        <div>
            <Carousel autoplay >
                <div>
                    <h3 style={contentStyle}><img style={{ height: "16.8rem" }} src='https://img.ticketnew.com/tn/offer_banner/radhe/1920_400.jpg' /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img style={{ height: "17rem"}} src='https://img.ticketnew.com/tn/offer_banner/james/1920_400_1.jpg' /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img style={{ height: "17rem" }} src='https://img.ticketnew.com/tn/offer_banner/ET/1920_400.jpg' /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img style={{ height: "17rem" }} src='https://img.ticketnew.com/tn/offer_banner/the-kashmir-files/1920_400.jpg?v1' /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img style={{ height: "17rem" }} src='https://img.ticketnew.com/tn/offer_banner/batman/1920_400.jpg' /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img style={{ height: "17rem" }} src='https://img.ticketnew.com/tn/offer_banner/postpaid/1920_400.jpg' /></h3>
                </div>
            </Carousel>,
            <h3 id='hi'>MOVIES</h3>
            <div className='movie'>
            <Button>NOW SHOWING</Button>
      <Button disabled>COMING SOON</Button>
      </div>
        </div>
        
        
    );
}

export default FirstCarousel;