import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Peugot from '../assets/106_gti.jpg';
import Typography from '@mui/material/Typography';
function MUICard() {
    return (
        <div>
            <Card sx={{ maxWidth: 500 }}>
                <CardMedia sx={{ height: 500, borderRadius: '50px' }} image={Peugot} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Peugot 106
                    </Typography>
                    <Typography variant="body3" sx={{ color: 'text.primary' }}>
                        Zehiri almadan kötü olduğunu söyleme ...
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color='lightgreey' size="large">Beğen</Button>
                    <Button size="large">Neden 106 </Button>
                </CardActions>
            </Card>

        </div>
    )
}

export default MUICard