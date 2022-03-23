import React, { useEffect, useState } from 'react';
import { Spin, Tabs } from 'antd';
import { collection, getDocs } from "firebase/firestore";
import db from '../firebase-config';
import { display } from '@mui/system';
import Fooder from './Fooder';
import { Link } from 'react-router-dom';

const { TabPane } = Tabs;


function callback(key) {
  console.log(key);
}

function Et(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const querySnapshot = await getDocs(collection(db, "nextPage"));

      let totaldata = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        totaldata.push(doc.data());
      });
      setData(totaldata)
    };
    getdata();
  }, [])


  return (
    <div>

     <img style={{ height: "30rem", width: "80rem" }} src='https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/etharkkum-thunindhavan-et00313071-27-12-2021-08-02-06.jpg'></img>
      <img id='EtPage' style={{ height: "20rem" }} src='https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/etharkkum-thunindhavan-et00313071-27-12-2021-08-02-06.jpg'></img>
      <div className='class'>
        <h1 style={{color: "#fff"}}>Etharkkum Thunindhavan (U/A) - Tamil</h1>
        <br></br>
        <h3 style={{color: "#fff"}}>Tamil | U/A</h3>
        <h4 style={{color: "#fff"}}>Action | Drama | 3/10/2022 | 2 hrs 31 mins</h4>
        <br></br>
        <h4 style={{color: "#fff"}}>Actors: Suriya Sivakumar | Akash Premkumar | MS Bhaskar | Redin Kingsley | Priyanka Arul Mohan | Priyanka Arul Mohan | Soori</h4>
        <h4 style={{color: "#fff"}}>Director: Pandiraj</h4>
        <h4 style={{color: "#fff"}}>Music Director: D Imman</h4>
        <br></br>
        <h3 style={{color: "#fff"}}>SYNOPSIS</h3>
        <h4 style={{color: "#fff"}}>An action drama film written and directed by Pandiraj, starring Suriya, Vinay Rai and Priyanka Arul Mohan in the lead roles.</h4>
      </div>
      <p style={{ display: "flex", justifyContent: "center" }} >Movie Tickets → Bangalore → Movies → Etharkkum Thunindhavan (U/A) - Tamil</p>
      

      {data.length ?(data.map(e => (


        <Tabs style={{ marginLeft: "7rem", width: "60rem" }} defaultActiveKey="1" onChange={callback}>


          <TabPane tab="Today" key="1">
            <h4 style={{marginLeft:"-46rem"}} >{e.TheaterName}</h4>
            <div style={{ display: "flex" }}>
              <p >{e.Detailes}</p>
              <Link to ="/Book/"><p style={{ marginLeft: "5rem", color: "green", marginTop: "-3rem" }}>
                {e.ShowTime}</p></Link>
            </div>
          </TabPane>

          <TabPane tab="Saturday" key="2">
            <h4 style={{marginLeft:"-46rem"}}>{e.TheaterName}</h4>
            <div style={{ display: "flex" }}>
              <p>{e.Detailes}</p>
              <a href='#'><p style={{ marginLeft: "5rem", color: "green", marginTop: "-3rem" }}>{e.ShowTime}</p></a>
            </div>
          </TabPane>

          <TabPane tab="Sunday" key="3">
            <h4 style={{marginLeft:"-46rem"}}>{e.TheaterName}</h4>
            <div style={{ display: "flex" }}>
              <p>{e.Detailes}</p>
              <a href='#'><p style={{ marginLeft: "5rem", color: "green", marginTop: "-3rem" }}>{e.ShowTime}</p></a>
            </div>
          </TabPane>

        </Tabs>
      ))):< Spin/>}
      <hr></hr>
      {data.map((e)=>(
        <>
        <p style={{marginLeft: "7rem"}}>{[e.emt]}</p>
        <p style={{marginLeft: "7rem"}}>{[e.seen]}</p>
        
        </> 
        
      ))}
    
      <Fooder/>

    </div>
  
  );
}

export default Et;