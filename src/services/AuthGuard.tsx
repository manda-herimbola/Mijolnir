import React, {ReactComponentElement} from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import NotFound from "../component/NotFound";
import GetAuth from "../state/users/GetAuth";
import CreateUsers from "../state/users/CreateUsers";
import {useRecoilValue} from "recoil";
import PathName from "./PathName";
import Confirmation from "../component/Users/Confirmation";
import Authentification from "./Authentification";

const AuthGuard = (props: AuthGuardProps) => {

    const auth: boolean = GetAuth()
    const validate: boolean = useRecoilValue(CreateUsers)

    return (
        <Router>
            <Routes>

                {
                    PathName?.map(({path, component},index) => (
                        <Route key={index}
                               path={path}
                               element={auth ? component : <Navigate to="/login" /> }/>
                    ))
                }
                {
                    Authentification?.map(({path, component},index) => (
                        <Route key={index}
                               path={path}
                               element={!auth ? component : <Navigate to="/" /> }/>
                    ))
                }
                <Route path='*' element={ <NotFound/> }/>
                <Route path='/home' element={<Navigate to="/" /> }/>
                <Route path='/validation' element={ validate ? <Confirmation/> : <Navigate to="/create-account" /> }/>

            </Routes>
        </Router>
    )
}

export type PathNameType = {
    path: string,
    component: ReactComponentElement<any>
}

export type AuthGuardProps = {
    [k: string]: any
}

export default AuthGuard;