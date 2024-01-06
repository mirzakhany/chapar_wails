import {Divider, ListItemButton, ListItemText} from "@mui/material";
import React from "react";
import {styled} from "@mui/material/styles";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

interface RequestItemProps {
    type: string;
    name: string;
    onClick?: () => void;
}

const RequestType = styled('div')(
    ({theme}) => ({
        borderRight: `${theme.palette.divider} 1px solid`,
        paddingRight: '10px',
        marginRight: '10px',
        fontSize: '10px',
        textAlign: 'right',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        minWidth: '48px',
    })
)

const ItemName = styled(ListItemText)(
    ({theme}) => ({
        maxWidth: '200px',
        '& .MuiListItemText-primary': {
            fontSize: '12px',
            fontWeight: 'normal',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
        }
    })
)

function RequestItem(props: RequestItemProps) {
    const {type, name, onClick} = props;

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: { currentTarget: React.SetStateAction<HTMLElement | null>; }) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
        <ListItemButton
        sx={{
            maxWidth: '270px',
            height: '38px',
            padding: '0px 10px',
        }}
        >
            <RequestType>
                {type}
            </RequestType>
            <ItemName primary={name} />
            <IconButton
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                size="small">
                <MoreHorizIcon fontSize="small" />
            </IconButton>
        </ListItemButton>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={handleClose}>Open</MenuItem>
            <MenuItem onClick={handleClose}>Duplicate</MenuItem>
            <MenuItem onClick={handleClose}>Rename</MenuItem>
            <Divider/>
            <MenuItem
                sx={{color: '#f44336'}}
                onClick={handleClose}
            >
                Delete
            </MenuItem>
        </Menu>
        </>
    )
}

export default RequestItem;