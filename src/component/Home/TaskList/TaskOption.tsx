import React from 'react';
import {Avatar, Grid} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from '@mui/icons-material/AddBox';
import photo from '../../../assets/manda.jpg'

const TaskOption = () => {
    return (
        <Grid container sx={{ justifyContent: "space-between", alignItems: "center" }}>
            <Avatar alt="Remy Sharp"
                    src={ photo }
                    sx={{ width: 25, height: 25 }}/>

            <Grid>
                <IconButton size="small"
                            aria-label="show 4 new mails"
                            color="inherit">

                    <AddBoxIcon />
                </IconButton>

                <IconButton size="small"
                            aria-label="show 4 new mails"
                            color="inherit">

                    <DeleteIcon />
                </IconButton>
            </Grid>
        </Grid>
    );
};

export default TaskOption;