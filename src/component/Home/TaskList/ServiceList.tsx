import React, {useEffect} from 'react';
import {Grid} from "@mui/material";
import TaskList from "./TaskList";
import TaskBar from "./TaskBar";
import useFetchTask from "../../Hooks/UseFetchTask";
import {useRecoilValue} from "recoil";
import ProfileName from "../../../state/Name/ProfileName";

const ServiceList = () => {

    const taskProject: Array<string> = ['Archive', 'Alarm', 'Job', 'Finished']!
    const profile: any = useRecoilValue(ProfileName)
    const dataBase: any = useFetchTask('http://localhost:5000/tasks/', profile.id)

    useEffect(() => { dataBase() })

    return (
        <Grid container
              spacing={3}
              columns={{ xs: 1, md: 2, lg: 4 }}>

            {
                taskProject.map((service,number ) =>

                <Grid key={ number } item xs={1} md={1} lg={1}>
                    <TaskBar number={ number } service={service}/>
                    <TaskList index={ number } service={service}/>
                </Grid>)
            }

        </Grid>
    );
};

export default ServiceList;