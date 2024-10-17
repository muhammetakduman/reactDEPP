import Grid from '@mui/material/Grid2';
import React from 'react'

function MUIGrid() {
    return (
        <div>
            <Grid container>
                <Grid xs={12} sm={6} md={8} lg={9} >ITEM 1</Grid>
                <Grid xs={12} sm={6} md={4} lg={3} >ITEM 2</Grid>
            </Grid>
        </div>
    )
}

export default MUIGrid