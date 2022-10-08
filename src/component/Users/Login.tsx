import React from 'react';
import { Box, Button, CardMedia, Grid, TextField } from "@mui/material";
import logo from '../../assets/logo.png';
import {useRecoilValue, useSetRecoilState} from "recoil";
import UseUrlUsers from "../../state/users/useUrlUsers";
import useValidation from "../Hooks/UseValidation";
import ErrorValidation from "../../state/users/ErrorValidation";
import useStyles from "../../styles/Style";

const Login = () => {

    const validation: any = useValidation()
    const setUrlUsers: any = useSetRecoilState(UseUrlUsers)
    const ErrValidate: Array<boolean> = useRecoilValue( ErrorValidation )
    const classes: any = useStyles()

    return (
        <Box className={ classes.Center }>
            <Grid
                component="form"
                maxWidth="400px"
                onSubmit={ validation }
                className={ classes.Users }
            >
                <CardMedia
                    component="img"
                    alt="logo"
                    image={ logo }
                />

                <TextField
                    error={ ErrValidate[0] }
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                />

                <TextField
                    error={ ErrValidate[1] }
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                />

                <Button variant="contained"
                        type="submit"
                        onClick={ () => setUrlUsers('login') }>login</Button>

                <a href="/create-account">
                    <Button variant="text">create account</Button>
                </a>

            </Grid>
        </Box>
    )
};

export default Login;