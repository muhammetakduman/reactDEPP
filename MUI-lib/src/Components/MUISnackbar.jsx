import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function MUISnackbar() {
    const [openSnackbar, setOpenSnackbar] = useState(false)

    const handleClick = () => {
        setOpenSnackbar(true)
    }
    const handleClose = () => {
        setOpenSnackbar(false)
    }

    const action = (
        <>
            <Button size='medium' color='primary' onClick={handleClose}>Kapat</Button>
            <IconButton onClick={handleClose} sx={{ color: '#fff' }} >
                <CloseIcon />
            </IconButton>
        </>
    )

    return (
        <div>
            <Button onClick={handleClick}> Open SnackBar </Button>
            <Snackbar open={openSnackbar} message="denemeden öğrenemezsin." action={action} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} />
        </div>
    )
}

export default MUISnackbar