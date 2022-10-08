import React from 'react';
import {Box, Button, CardMedia, Grid, TextField, Typography} from "@mui/material";
import logo from "../../assets/logo.png";
import {useRecoilValue, useSetRecoilState} from "recoil";
import UseUrlUsers from "../../state/users/useUrlUsers";
import UsersCreatedNoValidation from "../../state/users/UsersCreatedNoValidation";
import {UserType} from "../Hooks/UsePostUsers";
import useValidation from "../Hooks/UseValidation";
import ErrorValidation from "../../state/users/ErrorValidation";

const Container : object =  {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh"
}

const Validation = () => {

    const validation: any = useValidation()
    const setUrlUsers: any = useSetRecoilState(UseUrlUsers)
    const usersCreatedValidate: any = useRecoilValue(UsersCreatedNoValidation)
    const ErrValidate: Array<boolean> = useRecoilValue( ErrorValidation )

    return (
        <Box sx={ Container }>
            <Grid
                component="form"
                maxWidth="400px"
                onSubmit={ validation }
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

                {
                    usersCreatedValidate.map( (item: UserType, i: number) => (
                        <Grid key={ i } sx={{ textAlign: 'center' }}>
                            <Typography variant="h4" component="h2">{ item.username }</Typography>
                            <Typography variant="body1" component="p">{ item.email }</Typography>
                        </Grid>
                    ))
                }

                <TextField
                    error={ ErrValidate[0] }
                    id="confirmation"
                    name="confirmation"
                    label="confirmation"
                    type="password"
                />

                <Button variant="contained"
                        type="submit"
                        onClick={ () => setUrlUsers('create') }>Validate</Button>

            </Grid>
        </Box>
    );
};

export default Validation;