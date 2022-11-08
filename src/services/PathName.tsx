import Home from "../component/Home/Home";
import Profile from "../component/Profile/Profile";
import MyTask from "../component/MyTask/MyTask";
import Inbox from "../component/Inbox/Inbox";
import PortFolio from "../component/Portfolio/PortFolio";
import Goals from "../component/Goals/Goals";
import React from "react";
import {PathNameType} from "./AuthGuard";
import Open from "../component/Home/TaskList/MoreIcone/Open";

const PathName: Array<PathNameType> = [
    {
        path: '/',
        component: <Home/>
    },{
        path: 'profile',
        component: <Profile/>
    },{
        path: 'My tasks',
        component: <MyTask/>
    },{
        path: 'inbox',
        component: <Inbox/>
    },{
        path: 'portfolio',
        component: <PortFolio/>
    },{
        path: 'goals',
        component: <Goals/>
    },{
        path: 'Archive',
        component: <Open/>
    },{
        path: 'Alarm',
        component: <Open/>
    },{
        path: 'job',
        component: <MyTask/>
    },{
        path: 'Finished',
        component: <Open/>
    }
]

export default PathName;