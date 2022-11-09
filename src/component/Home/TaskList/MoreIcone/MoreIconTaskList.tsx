import React from 'react';
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {useNavigate} from "react-router-dom";
import {useSetRecoilState} from "recoil";
import OpenTheTools from "../../../../state/TaskList/OpenTheTools";

const MoreIconTaskList = ({ number, job }: any) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate: any = useNavigate()
    const setTheTools: any = useSetRecoilState(OpenTheTools)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const OpenTheTool = () => {
        setTheTools( job )
        navigate(`/${ job }`)
    }

    return (
        <div>
            <IconButton size="small"
                        aria-label="show 4 new mails"
                        color="inherit"
                        onClick={handleClick}>

                <MoreHorizTwoToneIcon />
            </IconButton>

            <Menu id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{'aria-labelledby': 'basic-button'}}>

                <MenuItem onClick={ OpenTheTool }>Open</MenuItem>
                <MenuItem >Delete All</MenuItem>
                <MenuItem >Collaborate</MenuItem>
            </Menu>
        </div>
    );
};

export default MoreIconTaskList;