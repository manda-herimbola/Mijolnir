import React from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import NotFound from "./component/NotFound";
import Home from "./component/Home/Home";
import Login from "./component/Users/Login";
import Create from "./component/Users/Create";
import GetAuth from "./state/GetAuth";

const AuthGuard = (props: AuthGuardProps) => {

    const auth: boolean = GetAuth()

    return (
        <Router>
            <Routes>
                <Route path='*' element={ <NotFound/> }/>
                <Route path='/' element={auth ? <Home/> : <Navigate to="/login" /> }/>
                <Route path='/login' element={!auth ?  <Login/> : <Navigate to="/" /> }/>
                <Route path='/create-account' element={!auth ?  <Create/> : <Navigate to="/" /> }/>
            </Routes>
        </Router>
    )
}

export type AuthGuardProps = {
    [k: string]: any
}

export default AuthGuard;