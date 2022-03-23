import React, { useEffect, useState } from 'react';
import { Button, Card } from 'antd';
import { Link } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import db from '../firebase-config';




const { Meta } = Card;
function CartImage(props) {

    const [data, setData] = useState([])


    useEffect(() => {
        const getdata = async () => {
            const querySnapshot = await getDocs(collection(db, "allMovie"));

            let totaldata = [];
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                totaldata.push(doc.data());
            });
            setData(totaldata)
        };
        getdata();
    }, [])



    const image = {
        "Etharkkum Thunindhavan (U/A) - Tamil": "https://img.ticketnew.com/tn/movie/24390/7.jpg?9122021&x-oss-process=image/resize,m_mfit,w_330,h_400/quality,q_80",
        "Radhe Shyam (U/A) - Telugu": "https://img.ticketnew.com/tn/movie/22487/7.jpg?397618&x-oss-process=image/resize,m_mfit,w_330,h_400/quality,q_80",
        "Ambulance -English": "https://img.ticketnew.com/tn/movie/24472/7.jpg?v63687047312303&x-oss-process=image/resize,m_mfit,w_330,h_400/quality,q_80",
        "RRR (U/A) - Telugu": "https://img.ticketnew.com/tn/movie/24115/7.jpg?6385616&x-oss-process=image/resize,m_mfit,w_330,h_400/quality,q_80",
        "The Kashmir Files (A) - Hindi": "https://img.ticketnew.com/tn/movie/24402/7.jpg?5329672&x-oss-process=image/resize,m_mfit,w_330,h_400/quality,q_80"
    }
    return (

        <div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                {data.map((j) => (
                    <Link to={'/Et/'}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img src={image[j.name]} />}                   >
                            <Meta title={j.name} description={j.language} />
                            <div className='button1'>
                                <Button type="primary" danger>
                                    Book Now
                                </Button> 
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
            <a href='#' style={{ display: "flex", justifyContent: "space-around" }}>VIEW MORE</a>
        </div>
    );
}

export default CartImage;