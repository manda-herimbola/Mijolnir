import React from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import NotFound from "../component/NotFound";
import Home from "../component/Home/Home";
import Login from "../component/Users/Login";
import Create from "../component/Users/Create";
import GetAuth from "../state/users/GetAuth";
import Validation from "../component/Users/Validation";
import CreateUsers from "../state/users/CreateUsers";
import {useRecoilValue} from "recoil";

const AuthGuard = (props: AuthGuardProps) => {

    const auth: boolean = GetAuth()
    const validate: boolean = useRecoilValue(CreateUsers)

    return (
        <Router>
            <Routes>
                <Route path='*' element={ <NotFound/> }/>
                <Route path='/' element={auth ? <Home/> : <Navigate to="/login" /> }/>
                <Route path='/login' element={!auth ?  <Login/> : <Navigate to="/" /> }/>
                <Route path='/create-account' element={!auth ?  <Create/> : <Navigate to="/" /> }/>
                <Route path='/validation' element={ validate ? <Validation/> : <Navigate to="/create-account" /> }/>
            </Routes>
        </Router>
    )
}

export type AuthGuardProps = {
    [k: string]: any
}

export default AuthGuard;