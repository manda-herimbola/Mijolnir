import React from 'react';
import { Box, Button, CardMedia, Grid, TextField } from "@mui/material";
import logo from '../../assets/logo.png'
import Users from "../../services/Users";
import { useNavigate } from "react-router-dom";
import {useSetRecoilState} from "recoil";
import useInitAuthState from "../../state/useInitAuthState";

const Container : object =  {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh"
}

const Login = () => {

    const navigate = useNavigate()
    const setAuth = useSetRecoilState(useInitAuthState)

    const PostLogin = async ( ev: any ) => {
        ev.preventDefault()

        const response: any = await Users.PostUsers( ev, 'login' )
        const { token } = await response.json()

        if ( response.status === 200 ){
            localStorage.setItem('token', token)
            setAuth(true)
            navigate('/')
        } else console.error('No authorized')

    }

    return (
        <Box sx={ Container }>
            <Grid
                component="form"
                maxWidth="400px"
                onSubmit={ PostLogin }
                sx={{
                    '& .MuiTextField-root ,& .MuiButton-root':
                        { mt: 1, width: '100%', height: 60 },
                    padding: 2
                }}
            >
                <CardMedia
                    component="img"
                    alt="logo"
                    image={ logo }
                />

                <TextField
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                />

                <TextField
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                />

                <Button variant="contained" type="submit">login</Button>

                <a href="/create-account"><Button variant="text">créer un compte</Button></a>
            </Grid>
        </Box>
    )
};

export default Login;