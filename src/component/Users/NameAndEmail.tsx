import React from 'react';
import {UserType} from "../Hooks/UsePostUsers";
import {Grid, Typography} from "@mui/material";
import {useRecoilValue} from "recoil";
import UsersCreatedNoValidation from "../../state/users/UsersCreatedNoValidation";

const NameAndEmail = () => {

    const usersCreatedValidate: Array<any> = useRecoilValue(UsersCreatedNoValidation)

    return (
        <div>
            { usersCreatedValidate.map( (item: UserType, i: number) => (
                <Grid key={ i } sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" component="h2">{ item.username }</Typography>
                    <Typography variant="body1" component="p">{ item.email }</Typography>
                </Grid>
            )) }
        </div>
    );
};

export default NameAndEmail;