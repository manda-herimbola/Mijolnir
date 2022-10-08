import React, {useEffect, useState} from 'react';
import {Box, CircularProgress, Grid} from "@mui/material";
import useStyles from "../../styles/Style";
import MenuBoard from "./MenuBoard";

const Home = () => {

    const token: string = localStorage.getItem('token')!
    const [ users, setUsers ]: any = useState({})
    const [ response, setResponse ]: any = useState( false )
    const classes: any = useStyles()

    useEffect(() => {
        fetch('http://localhost:5000/users',{
            method: "GET",
            headers: { 'authorization' : 'bearer '+ token}
        })
            .then((res) => res.json())
            .then((response) => {
                setResponse(true)
                setUsers(response)
            })
    },[])

    return !response
        ? ( <Box className={ classes.Center }><CircularProgress /></Box> )
        : ( <MenuBoard users={users}/> )
};

interface user {
    email: string
    username: string
}

export default Home;