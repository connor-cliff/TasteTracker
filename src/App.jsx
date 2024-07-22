import React, { useRef, useEffect } from 'react';
import { useState } from 'react';
import { Box, Button, Card, CardMedia, Container, CssBaseline, Grid, Typography } from '@mui/material';
import { MyContainer, MySlogan } from './styles';
import Dropdown from './components/Dropdown';
import Listview from './components/Listview';
import Mapview from './components/Mapview';
import Footer from './components/Footer';
import Header from './components/Header';

/* Renders the home page of the website with the option filter available restaurants and switch between map and list view */

const App = () => {

    /* Gets the height of the header and footer and subtracts it from the total height of the 
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

    // State to determine whether to display Mapview or Listview
    const [isMapView, setIsMapView] = useState(true);

    // Function to toggle between Mapview and Listview
    const toggleView = () => {
    setIsMapView((prevIsMapView) => !prevIsMapView);
    };
 

    return (
        <>
            <CssBaseline />
            <div ref={headerRef} sx={{ maxWidth: '100%', mx: 'auto' }}>
              <Header />
            </div>
            <main ref={mainRef} sx={{ maxWidth: '100%', mx: 'auto' }}>
                {/* displays header image with page title */}
                <div>
                    <MyContainer maxWidth='sm' >
                        <Card> 
                            <Box sx={{ width: '100px' }}>
                                <MySlogan align='center' sx={{ top: '25vh' }}>
                                    Find your next favourite restaurant
                                </MySlogan>
                            </Box>
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia 
                                    component="img"
                                    sx={{ height: '50vh', filter: 'brightness(35%)' }}
                                    image="https://images.squarespace-cdn.com/content/v1/5a44e092e45a7c5289a2c962/1579452035230-HX17FJMPYEZC4L66AKDO/Food-photography-lacnashire-005.jpg"
                                    alt="random"
                                /> 
                            </Box>
                        </Card>
                        <Container sx={{ mt: '20px' }}>
                            <Typography variant='h1' align='left' color='textPrimary' >
                                Restaurants within a mile of you
                            </Typography>
                            <Typography variant='h5' align='left' color='textSecondary' paragraph>
                                Explore the map or customise the filter options to match your taste. 
                            </Typography>
                            {/* Dropdown and toggle button */}
                            <div>
                                <Grid container spacing={2} justifyContent='left'>
                                    <Grid item>
                                        <Typography variant='h5' color='textSecondary'>
                                            Filter by: 
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Dropdown />
                                    </Grid>
                                    <Grid item>
                                        {/* Changes the button depending on current option displayed */}
                                        <Button variant='contained' color='primary' onClick={toggleView} >
                                        {isMapView ? "Switch to List View" : "Switch to Map View"}
                                        </Button>
                                    </Grid>
                                </Grid>
                                {/* Display Mapview or Listview */}
                                <Container>
                                  {isMapView ? <Mapview /> : <Listview />}
                                </Container>
                            </div>
                        </Container>       
                    </MyContainer>
                </div>
            </main>
            <Footer sx={{ maxWidth: '100%', mx: 'auto' }}/>
        </>
    );
}

export default App;