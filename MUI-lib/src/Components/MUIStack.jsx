import { Stack } from '@mui/material'
import React from 'react'

function MUIStack() {
    return (
        <div>
            <Stack spacing={3} direction="row">
                <div>item 1</div>
                <div>item 2</div>
                <div>item 3</div>

            </Stack>
        </div>
    )
}

export default MUIStack