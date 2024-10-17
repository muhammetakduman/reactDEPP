import React from 'react'
import TextField from '@mui/material/TextField';
import { TextFields } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import InputAdornment from '@mui/material/InputAdornment';


function MUITextField() {
    return (
        <div>
            <div style={{ marginBottom: '100px' }}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </div>
            <div style={{ marginBottom: '100px' }}>
                <TextField id="filled-basic" label="Filled" variant="filled" error defaultValue="Hello world" />
            </div>
            <div style={{ marginBottom: '100px' }}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" helperText="Takıl baba" />
            </div>
            <div style={{ marginBottom: '100px' }}>
                <TextField id="standard-basic" label="Standard" variant="standard" />
            </div>
            <div style={{ marginBottom: '50px' }}>
                <TextField variant='outlined' slotProps={{
                    input: {

                        endAdornment: <InputAdornment position='end'> <PersonIcon />
                        </InputAdornment>
                    }
                }} />
            </div>
        </div>
    )
}

export default MUITextField