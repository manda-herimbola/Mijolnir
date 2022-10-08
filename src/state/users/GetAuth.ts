import { useEffect } from 'react';
import { useRecoilState } from "recoil";
import useInitAuthState from "./useInitAuthState";

const GetAuth = () => {

    const [ auth, setAuth ] = useRecoilState(useInitAuthState)

    useEffect(() => {
        const token = localStorage.getItem('token')

        setAuth(token !== null)
    },[auth])

    return auth;

};

export default GetAuth;