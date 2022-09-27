import React, {useEffect} from 'react';
import Users from "../../services/Users";
import {useNavigate} from "react-router-dom";

const Home = () => {

    const token: string = localStorage.getItem('token')!
    const navigate = useNavigate()
    const data: any = Users.GetUsers(token)

    const dataAsync = async () => {
        const response = await data
    }

    useEffect(() => {
        dataAsync().then(r => r)
    },[])

    return (
        <div>
            <button onClick={ () => navigate('/login') }>login</button>
            <button onClick={ () => navigate('/create-account') }>create</button>
        </div>
    );
};

interface user {
    email: string
    username: string
}

export default Home;