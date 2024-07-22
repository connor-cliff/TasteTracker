import React from 'react'
import { Card, CardMedia } from '@mui/material';

/* Renders local restaurants presents on a map */

function Mapview() {
  return (
    <>
        <div>
            <Card sx={{ mt: '25px' }}>
                <CardMedia 
                    component="img"
                    image="https://i.ibb.co/LRKdZMs/google-maps.png"
                    alt="random"
                /> 
            </Card>
        </div>
    </>
  )
}

export default Mapview