import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
function MUIDrawer() {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <div>
            <Button onClick={() => setIsOpen(true)} >AÇ</Button>
            <Drawer open={isOpen} onClose={() => setIsOpen(false)} anchor='right' >
                <Box sx={{ width: '400px', textAlign: 'center' }}>
                    <h1>LOREM</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, adipisci!</p>
                </Box>
            </Drawer>
        </div>
    )
}

export default MUIDrawer