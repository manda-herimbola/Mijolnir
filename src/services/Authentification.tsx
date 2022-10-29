import React from 'react';
import Login from "../component/Users/Login";
import Create from "../component/Users/Create";
import {PathNameType} from "./AuthGuard";

const Authentification: Array<PathNameType> = [
    {
        path: '/login',
        component: <Login/>
    },{
        path: '/create-account',
        component: <Create/>
    }
]

export default Authentification;