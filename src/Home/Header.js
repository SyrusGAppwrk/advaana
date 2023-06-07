import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router';
import { Badge } from '@mui/base';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Stack from '@mui/material/Stack';
import "./Header.css"
const pages = ['Monitoring', 'Overview', 'DataTransfer'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const createNew = ['Template',];

const Header = () => {
    const navigate = useNavigate()
    let userData = JSON.parse(localStorage.getItem("user"))
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);

    console.log({ anchorEl, anchorElUser });

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenu = (val) => {
        const data = val.target.textContent
        if (data === "Logout") {
            localStorage.removeItem('user')
            navigate('/login')
        }
    }
    const menuId = 'primary-search-account-menu';

    return (
        <AppBar position="static" sx={{ bgcolor: "#fff" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: '#000',
                            textDecoration: 'none',
                        }}
                    >
                        advaana
                    </Typography>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#000', display: 'block', textTransform: "none" }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Button variant="outlined" sx={{ textTransform: "none", mr: 2 }}>Manage sources</Button>
                    <Box sx={{ flexGrow: 0 }}>
                        <Button
                            variant="contained"
                            onClick={handleClick}
                            sx={{ textTransform: "none", mr: 2 }}
                            endIcon={<ArrowDropDownIcon />}
                        >
                            Create new
                        </Button>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem sx={{ minWidth: 125 }} onClick={handleClose} >
                                Create from template
                            </MenuItem>
                            <MenuItem sx={{ minWidth: 125 }} onClick={handleClose} >
                               Use smart builder
                            </MenuItem>
                            <MenuItem sx={{ minWidth: 125 }} onClick={handleClose} >
                              Blank
                            </MenuItem>
                        </Menu>

                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                        <Badge badgeContent={17} color="red">
                            <NotificationsIcon sx={{ color: "black" }} />
                        </Badge>

                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{ backgroundColor: "#1976D2" }} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center" onClick={handleMenu}>{setting}</Typography>
                                </MenuItem>
                            ))}

                        </Menu>
                    </Box>
                    <Typography sx={{ color: "#000", ml: 1 }}>{userData.displayName}</Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
