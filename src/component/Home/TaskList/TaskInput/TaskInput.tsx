import React, {useState} from 'react';
import {Button, Grid, TextField} from "@mui/material";
import useStyles from "../../../../styles/Style";
import TaskOption from "./TaskOption";
import useSaveTask from "../../../Hooks/UseSaveTask";

const TaskInput = ({ index, service, title, description }: any) => {

    const classes: any = useStyles()
    const [ {til,num}, setTil ]: any = useState({ til: {}, num: 0 })
    const [ errorTask, setErrorTask ]: any = useState('')
    const SaveTask: any = useSaveTask( index, service, setTil, setErrorTask )

    const titleValue: Array<any> = [ title, til.title ]
    const descValue: Array<any> = [ description, til.description ]
    const titleDefaultVal: Array<string> = [ 'Title', 'undefined' ]
    const descDefaultVal: Array<string> = [ 'Description', 'undefined' ]

    return (
        <Grid component="form"
              onSubmit={ SaveTask }
              className={ classes.CardList }>

            <TaskOption />

            <p color="red">{ errorTask }</p>

            { titleValue[num] !== titleDefaultVal[num] ? <p>{ titleValue[num] }</p> :
                <TextField variant="standard"
                           name="title"
                           placeholder="Title"/>}

            { descValue[num] !== descDefaultVal[num] ? <p>{ descValue[num] }</p> :
                <TextField variant="standard"
                           name="description"
                           placeholder="Description"
                           multiline/>}

            { titleValue[num] !== titleDefaultVal[num] &&
                descValue[num] !== descDefaultVal[num] ? <></> :
                    <Button variant="contained"
                            type="submit"
                            sx={{ mt: 1 }}>save</Button> }

        </Grid>
    );
};

export default TaskInput;