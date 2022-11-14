import React, {useState} from 'react';
import {Button, Grid, TextField} from "@mui/material";
import useStyles from "../../../../styles/Style";
import TaskOption from "./TaskOption";
import {useRecoilValue} from "recoil";
import ProfileName from "../../../../state/Name/ProfileName";

const SaveTaskInput = ({ index, service, title, description }: any) => {

    const classes: any = useStyles()
    const profile: any = useRecoilValue(ProfileName)

    const [ til, setTil ]: any = useState({})
    const [ num, setNum ]: any = useState(0)

    const titleValue: Array<any> = [ title, til.title ]
    const descValue: Array<any> = [ description, til.description ]
    const titleDefaultVal: Array<string> = [ 'Title', 'undefined' ]
    const descDefaultVal: Array<string> = [ 'Description', 'undefined' ]

    const taskUrl: string = 'http://localhost:5000/tasks/'
    const [ errorTask, setErrorTask ]: any = useState('')

    const SaveTask: any = async (ev: SubmitEvent) => {
        ev.preventDefault()

        const form = ev.target as HTMLFormElement
        const formData = new FormData( form )
        const data: any = Object.fromEntries( formData.entries() )

        const task: Object = { nb: index, work: service, ...profile, ...data }

        if( data.title !== '' && data.description !== '' ){

            try {

                const response: any = await fetch( taskUrl,{
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(task)
                })

                setTil( (await response.json()).newDataBase )
                setNum( 1 )

            }catch (err){ console.log(err) }

        }else { setErrorTask('Task is empty') }

    }

    return (
        <Grid component="form"
              onSubmit={ SaveTask }
              className={ classes.CardList }>

            <TaskOption />

            <p color="red">{ errorTask }</p>

            { titleValue[num] !== titleDefaultVal[num] ? <p>{ titleValue[num] }</p> :
                    <TextField variant="standard"
                               name="title"
                               placeholder="Title"/> }

            { descValue[num] !== descDefaultVal[num] ? <p>{ descValue[num] }</p> :
                    <TextField variant="standard"
                               name="description"
                               placeholder="Description"
                               multiline/> }

            { titleValue[num] !== titleDefaultVal[num] &&
                descValue[num] !== descDefaultVal[num] ? <></> :
                    <Button variant="contained"
                            type="submit"
                            sx={{ mt: 1 }}>save</Button> }

        </Grid>
    );
};

export default SaveTaskInput;