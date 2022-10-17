import React from 'react';
import {Box, Button, CardMedia, Grid, TextField} from "@mui/material";
import logo from "../../assets/logo.png";
import {useRecoilValue, useSetRecoilState} from "recoil";
import UsePathUsers from "../../state/users/usePathUsers";
import useValidation from "../Hooks/UseValidation";
import ErrorValidation from "../../state/users/ErrorValidation";
import useStyles from "../../styles/Style";
import NameAndEmail from "./NameAndEmail";

const Confirmation = () => {

    const validation: any = useValidation()
    const setPathUsers: any = useSetRecoilState(UsePathUsers)
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

                <NameAndEmail />

                <TextField
                    error={ ErrValidate[0] }
                    id="confirmation"
                    name="confirmation"
                    label="confirmation"
                    type="password"/>

                <Button variant="contained"
                        type="submit"
                        onClick={ () => setPathUsers('create') }>Validate</Button>

            </Grid>
        </Box>
    );
};

export default Confirmation;