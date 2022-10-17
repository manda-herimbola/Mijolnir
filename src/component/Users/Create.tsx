import React from 'react';
import { Box, Button, CardMedia, Grid, TextField } from "@mui/material";
import logo from "../../assets/logo.png";
import useValidation from "../Hooks/UseValidation";
import {useRecoilValue, useSetRecoilState} from "recoil";
import ErrorValidation from "../../state/users/ErrorValidation";
import UsePathUsers from "../../state/users/usePathUsers";
import useStyles from "../../styles/Style";

const Create = () => {

    const validation: any = useValidation()
    const setUrlUsers: any = useSetRecoilState(UsePathUsers)
    const ErrValidate: Array<boolean> = useRecoilValue( ErrorValidation )
    const classes: any = useStyles()

    return (
        <Box className={ classes.Center }>
            <Grid
                component="form"
                maxWidth="400px"
                onSubmit={ validation }
                className={ classes.Users }>

                <CardMedia
                    component="img"
                    alt="logo"
                    image={ logo }/>

                <TextField
                    error={ ErrValidate[0] }
                    id="email"
                    name="email"
                    label="Email"
                    type="email"/>

                <TextField
                    error={ ErrValidate[1] }
                    id="username"
                    name="username"
                    label="username"
                    type="text"/>

                <TextField
                    error={ ErrValidate[2] }
                    id="password"
                    name="password"
                    label="Password"
                    type="password"/>

                <Button variant="contained"
                        type="submit"
                        onClick={ () => setUrlUsers('validation') }>Create account</Button>

                <a href="/login">
                    <Button variant="text">login</Button>
                </a>

            </Grid>
        </Box>
    );
};

export default Create;