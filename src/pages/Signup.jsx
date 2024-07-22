import React, { useRef, useEffect } from 'react';
import { Box, Button, Card, CardMedia, Container, CssBaseline, Grid, Link as MUILink, TextField } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { MyContainer, MyTitle } from '../styles.js'
import { Link } from "react-router-dom";
import Footer from '../components/Footer.jsx';
import Header from '../components/Header';
import theme from '../theme.jsx';

/* Sign up interface taken from MUI free templates - https://github.com/mui/material-ui/tree/v5.12.3/docs/data/material/getting-started/templates/sign-up */

export default function Signup() {

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <>
    <CssBaseline />
    <div ref={headerRef}>
     <Header />
    </div>
    
    <main ref={mainRef}>
    {/* Displays header image with page title */}
    <MyContainer maxWidth='sm' >
    <Card> 
        <MyTitle align='center' sx={{ whiteSpace: 'nowrap' }}>
            Sign up
        </MyTitle>
        <Box sx={{ position: 'relative' }}>
            <CardMedia 
                component="img"
                sx={{ height: '30vh', filter: 'brightness(35%)' }}
                image="https://images.pexels.com/photos/858508/pexels-photo-858508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="random"
            /> 
        </Box>
    </Card>
    </MyContainer>
    <Container>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <MUILink component={Link} to='/login' variant="body2">
                  Already have an account? Login
                </MUILink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </Container>
    </main>
    <Footer />
    </>
  )
}
