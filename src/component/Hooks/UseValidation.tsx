import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import ErrorValidation from "../../state/users/ErrorValidation";
import CreateUsers from "../../state/users/CreateUsers";
import { useNavigate } from 'react-router-dom';
import UsersCreatedNoValidation from "../../state/users/UsersCreatedNoValidation";
import UsePathUsers from "../../state/users/usePathUsers";
import usePostUsers from "./UsePostUsers";

const useValidation = () => {

    const [ UserCreatedValidate, setUserCreatedValidate ]: any = useRecoilState(UsersCreatedNoValidation)
    const setErrValidate: any = useSetRecoilState(ErrorValidation)
    const setUserCreated: any = useSetRecoilState(CreateUsers)
    const pathName: string = useRecoilValue(UsePathUsers)
    const PostUsers = usePostUsers()
    const navigate: any = useNavigate()

    const Validation: any = (ev: SubmitEvent) => {
        ev.preventDefault()

        const form = ev.target as HTMLFormElement
        const formData = new FormData( form )
        const users: any = Object.fromEntries( formData.entries() )

        const keyUsers: Array<string> = Object.keys( users )
        const validate = keyUsers.map((item) => users[item] === '')

        const err: boolean = validate.find(err => err)!

        if( err ) {
            setUserCreated( false )
            console.log('Users is not valid')
            setErrValidate( validate )
        } else {

            if( pathName === 'validation' ){

                setUserCreated( true )
                setUserCreatedValidate( [ users ] )
                navigate( '/validation' )

            }else if( pathName === 'login' ){

                PostUsers( users )

            }else if( pathName === 'create' ){

               if( UserCreatedValidate[0].password === users.confirmation ) {
                   PostUsers( ...UserCreatedValidate )
                   navigate('/login')
               }else setErrValidate( [ true ] )

            }

            form.reset()
        }

    }
    return Validation;

};

export default useValidation;