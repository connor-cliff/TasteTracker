import React, { useRef, useEffect } from 'react';
import { Box, Button, Card, CardContent, CardMedia, Container, CssBaseline, Grid, Rating, Stack, Table, TableBody, TableRow, TextField, Typography } from '@mui/material';
import { MyBold, MyContainer, MyTableCell } from '../styles.js';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import Review from '../components/Review.jsx';
import { Link } from "react-router-dom";

/* Displays restaurant images, imformation and ratings */

export default function RestaurantOne() {

  /* Gets the height of the header and footer an subtracts it from the total height of the 
    viewport so the footer is positioned at the bottom of the page */

  const mainRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      mainRef.current.style.minHeight = `calc(100vh - ${headerRef.current.clientHeight + document.querySelector('footer').clientHeight}px)`;
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
        <CssBaseline />
        <div ref={headerRef}>
        <Header  />
        </div>
        <main ref={mainRef}>
        {/* Displays header image with page title */}
        <MyContainer maxWidth='sm' >
        <Card>
            <Box sx={{ position: 'relative' }}>
                <CardMedia 
                    component="img"
                    sx={{ height: '30vh' }}
                    image="https://khaikhai.co.uk/wp-content/uploads/2020/11/khai-khai-smoke-play-newcastle-restaurant-indian-hanging-plants-mirror-reflection-banquette-candle.jpg"
                    alt="random"
                /> 
            </Box>
        </Card>
        </MyContainer>
        <MyContainer maxWidth='sm' >
            <Box sx={{ ml: '18vw', mr: '18vw' }} > 
                <Typography gutterBottom variant='h2' sx={{ ml: '15px' }}>
                    Khai Khai
                </Typography>
                <Grid container>
                    <Grid item>
                        <Stack spacing={1} sx={{ ml: 2, mt: 1, mb: 1 }}>
                           <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                        </Stack>
                    </Grid>
                    <Grid item>
                        <Typography sx={{ ml: '5px', mt: '10px' }}>
                            1 Rating
                        </Typography>
                    </Grid>
                </Grid>
                <Container>
                    <Typography gutterBottom>
                        <MyBold>Cuisine: </MyBold>Indian
                    </Typography>
                    <Typography gutterBottom>
                        <MyBold>Average main price: </MyBold>£12.48
                    </Typography>
                    <Typography gutterBottom>
                        <MyBold>Address: </MyBold>29 Queen St, Newcastle upon Tyne NE1 3UG
                    </Typography>
                    <Typography gutterBottom>
                        <MyBold>Approx walking time: </MyBold>6 minutes
                    </Typography>
                    <Typography gutterBottom>
                        <MyBold>Distance: </MyBold>57m
                    </Typography>
                    <Typography gutterBottom>
                        <MyBold>Menu: </MyBold><Link to='https://khaikhai.co.uk/' color='inherit'>khaikhai.co.uk</Link>
                    </Typography>
                    <Typography gutterBottom>
                        <MyBold>Phone: </MyBold>0191 261 4455
                    </Typography>
                    {/* Displays the opening times of the restaurant as a table */}
                    <Typography gutterBottom>
                        <MyBold>Opening times</MyBold> 
                    </Typography>
                    <Table sx={{ maxWidth: 300, maxHeight: 300 }}>
                        <TableBody>
                            <TableRow>
                                <MyTableCell>Monday</MyTableCell>
                                <MyTableCell>12:00 - 22:30</MyTableCell>
                            </TableRow>
                            <TableRow>
                                <MyTableCell>Tuesday</MyTableCell>
                                <MyTableCell>12:00 - 22:30</MyTableCell>
                            </TableRow>
                            <TableRow>
                                <MyTableCell>Wednesday</MyTableCell>
                                <MyTableCell>12:00 - 22:30</MyTableCell>
                            </TableRow>
                            <TableRow>
                                <MyTableCell>Thursday</MyTableCell>
                                <MyTableCell>12:00 - 22:30</MyTableCell>
                            </TableRow>
                            <TableRow>
                                <MyTableCell>Friday</MyTableCell>
                                <MyTableCell>12:00 - 23:00</MyTableCell>
                            </TableRow>
                            <TableRow>
                                <MyTableCell>Saturday</MyTableCell>
                                <MyTableCell>09:00 - 23:00</MyTableCell>
                            </TableRow>
                            <TableRow>
                              <MyTableCell>Sunday</MyTableCell>
                              <MyTableCell>09:00 - 23:00</MyTableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Typography gutterBottom variant='h6' sx={{ mt: '20px' }}>
                        Ratings
                    </Typography>
                    {/* Renders a card for users to select a star rating and leave a review */}
                    <Card sx={{ boxShadow: '1px 1px 5px grey' }}>
                        <CardContent>
                            <div>
                                <Grid container alignItems='center' >
                                    <Grid item>
                                       <Rating name="half-rating" precision={0.5} />
                                    </Grid>
                                    <Grid item sx={{ ml: 'auto', mb: '10px'}}>
                                        <Button variant='contained' size='medium' color='primary'>Submit</Button>
                                    </Grid>
                                </Grid>

                            </div>
                           <div>
                             <TextField
                                id="outlined-multiline-flexible"
                                label="Leave a review"
                                multiline
                                maxRows={4}
                                sx={{ width: '100%' }}
                             />           
                           </div>
                        </CardContent>
                    </Card>
                    <Review />
                </Container>
            </Box>
        </MyContainer>
        </main>
        <Footer />
    </>
  )
};
