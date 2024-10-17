import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import { Menu, MenuItem } from '@mui/material';
function MUIAppBar() {
    const [anchorEl, setAnchorEl] = useState(null)


    const openMenu = (e) => {
        setAnchorEl(e.currentTarget);
    }
    const openControl = anchorEl ? true : false

    const closeMenu = () => {
        setAnchorEl(null);
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        MAMİ
                    </Typography>
                    <Stack direction={'row'}>
                        <Button color="inherit">AnaSayfa</Button>
                        <Button color="inherit">Hakkımızda</Button>
                        <Button color="inherit" onClick={openMenu} >Ürünler</Button>
                        <Button color="inherit">İletişim</Button>
                    </Stack>
                    <Menu anchorEl={anchorEl} open={openControl} onClose={closeMenu}>
                        <MenuItem>WEB APP</MenuItem>
                        <MenuItem>DESKTOP APP</MenuItem>
                        <MenuItem>MOBIL APP</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default MUIAppBar