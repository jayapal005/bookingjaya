import React, { useState } from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from 'antd';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import { auth  } from "../firebase-config"

function Login(props) {
  
      const[registerEmail, setRegisterEmail]=useState("");
      const[registerPassword, setRegisterPassword]=useState("");
     

const login =async()=>{
    try{
    const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
    );
    console.log(user)
    }catch(error){
        console.log(error.message);

    }

}


    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    // if (modal) {
    //     document.body.classList.add('active-modal')
    // } else {
    //     document.body.classList.remove('active-modal')
    // }

    return (
        <div>


            <Button type="primary" danger onClick={toggleModal}>
                Login
            </Button>
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>
                                <h1 style={{ display: "flex", justifyContent: "center" }}>Login</h1>
                                <TextField style={{width:"20rem"}} onChange={(event)=>{
                                    setRegisterEmail(event.target.value)
                                }}
                                    required
                                    id="outlined-required"
                                    label="E-Mail ID"
                                    defaultValue=""
                                />
                            </div>

                            <div>
                                <TextField style={{width:"20rem"}} onChange={(event)=>{
                                    setRegisterPassword(event.target.value)
                                }}
                                    required
                                    id="outlined-require"
                                    label="Password"
                                    type="password"
                                    defaultValue=""
                                />
                            </div>
                            <a href='#'><h5>Forget Password?</h5></a>
                            <a href='#'><h5>Sing Up</h5></a>
                            <div>
                                <Button onClick={login} style={{ display: "flex", justifyContent: "center" }} type="primary" danger >
                                    Login
                                </Button>
                                
                            </div>
                        </Box>

                        <CloseCircleOutlined className="close-modal" onClick={toggleModal} />

                    </div>
                </div>


            )}

        </div>
    );
}

export default Login;