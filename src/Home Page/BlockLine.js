import React from 'react';

function BockLine(props) {
    return (
        <div className='BockLine'>
            <div>
                <img id='img1' src='https://cdn11.ticketnew.com/images/customer-care.svg'></img>
                <h3><a href='#'  style={{color:"#757575"}}>Customer Care</a></h3></div>
            <div>
                <img id='img1' src='https://cdn11.ticketnew.com/images/faq.svg'></img>
                <h3><a href='#'style={{color:"#757575"}}>Customer Care</a></h3></div>
            <div>
                <img id='img1' src='https://cdn11.ticketnew.com/images/about-us.svg'></img>
                <h3><a href='#'style={{color:"#757575"}}>Customer Care</a></h3></div>
            <div>
                <img id='img1' src='https://cdn11.ticketnew.com/images/feedback.svg'></img>
                <h3><a href='#'style={{color:"#757575"}}>Customer Care</a></h3></div>
            <div>
                <img id='img1' src='https://cdn11.ticketnew.com/images/boxoffice.svg'></img>
                <h3><a href='#'style={{color:"#757575"}}>Customer Care</a></h3> </div>
        </div>
    );
}

export default BockLine;