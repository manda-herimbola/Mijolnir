import React from 'react';
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const MoreIconTaskList = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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

                <MenuItem >Open</MenuItem>
                <MenuItem >Delete All</MenuItem>
                <MenuItem >Collaborate</MenuItem>
            </Menu>
        </div>
    );
};

export default MoreIconTaskList;