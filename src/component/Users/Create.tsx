import React from 'react';
import {Box, Button, CardMedia, Grid, TextField} from "@mui/material";
import Users from "../../services/Users";
import logo from "../../assets/logo.png";

const Container : object =  {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh"
}

const Create = () => {

    const PostCreate = async ( ev: any ) => {
        const response: any = await Users.PostUsers( ev, 'create' )

        console.log( await response.json() )
    }

    return (
        <Box sx={ Container }>
            <Grid
                component="form"
                maxWidth="400px"
                onSubmit={ PostCreate }
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
                    id="username"
                    name="username"
                    label="username"
                    type="text"
                />

                <TextField
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                />

                <Button variant="contained" type="submit">Create account</Button>

                <a href="/login"><Button variant="text">login</Button></a>
            </Grid>
        </Box>
    );
};

export default Create;