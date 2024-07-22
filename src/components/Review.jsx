import { Avatar, Box, Card, CardContent, CssBaseline, Grid, Rating, Typography } from '@mui/material';
import React from 'react'

/* Renders a users review of a restaurant */

function Review() {
  return (
    <>
        <CssBaseline />
        <Card sx={{ mt: '40px', boxShadow: '1px 1px 5px grey' }}>
            <CardContent>
                <Grid container spacing={2} alignItems='center' >
                    <Grid item xs={2}>
                        <Box display="flex" alignItems="center" justifyContent="center" flexDirection= 'column'>
                            <div>
                                <Avatar sx={{ bgcolor: "#F45152" }}>J</Avatar>
                            </div>
                            <div>
                                <Typography>
                                    James
                                </Typography>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={10}>
                        <div>
                            <Rating name="half-rating" defaultValue={4.5} precision={0.5} readOnly/>
                        </div>
                        <div>
                            <Typography>
                            Khai Khai has such a cozy atmosphere and friendly staff, it's the perfect place for a night out with friends. The menu features a variety of Indian dishes. Don't miss out on the freshly baked paratha or smoked broccoli - it's delicious!
                            </Typography>    
                        </div>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </>
  )
}

export default Review;