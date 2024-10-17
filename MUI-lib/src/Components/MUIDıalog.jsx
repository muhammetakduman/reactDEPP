import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
function MUIDıalog() {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleClickOpen}>
                Open Diolog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle id='alert-diolog-title'>
                    {"Use GOOGLE'S location services"}
                </DialogTitle>
                <DialogContent>
                    alsdnmasldasmld
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default MUIDıalog