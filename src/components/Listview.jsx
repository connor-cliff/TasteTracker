import React from 'react'
import { Box, Button, CardMedia, Container, Grid, Rating, Stack, Typography } from '@mui/material';
import { MyBold, MyCard, MyCardContent } from '../styles';
import { Link } from "react-router-dom";

/* Renders a list of restaurant cards when the user selects list view */

const cards = [1, 2, 3, 4, 5, 6]

function Listview() {

// Defines a function to scroll to the top of the page
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
    })};

  return (
    <>
    <Box sx={{ mt: '40px' }}>
            <Grid container spacing={4}>
                {/* Map over the array of cards and display each one */}
                {cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        {/* Displays a card */}
                        <MyCard>
                            <CardMedia 
                                component="img"
                                image="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
                                alt="random"
                                title='Image title here'

                            /> 
                            <MyCardContent>
                                <Typography color='inherit' gutterBottom variant='h5' sx={{ ml: '15px', mt: '10px' }}>
                                    Khai Khai
                                </Typography>
                                {/* Display the rating of the restaurant */}
                                <Stack spacing={1} sx={{ ml: 2, mt: 1, mb: 1 }}>
                                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                </Stack>
                                {/* Display the price and a button to see more details */}
                                <Container variant='h6' sx={{ mb: '20px' }}>
                                <Typography gutterBottom>
                                    <MyBold>Average main price: </MyBold>£12.48
                                </Typography>
                                <Button component={Link} to='/restaurant' variant='contained' size='small' color='primary' sx={{ mt: '7px' }} onClick={scrollToTop}>See more details</Button>
                                </Container>
                            </MyCardContent>
                        </MyCard>
                </Grid>
                ))}
            </Grid>
        </Box>
    </>
  )
}

export default Listview;