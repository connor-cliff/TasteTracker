import React, { useRef, useEffect } from 'react';
import { Box, Button, Card, CardMedia, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link as MUILink, TextField } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { MyContainer, MyTitle } from '../styles.js'
import { Link } from "react-router-dom";
import Footer from '../components/Footer.jsx';
import Header from '../components/Header';
import theme from '../theme.jsx';

/* Login interface taken from MUI free templates - https://github.com/mui/material-ui/blob/v5.12.3/docs/data/material/getting-started/templates/sign-in/SignIn.js */

export default function Login() {

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
      <Header  />
      </div>
      <Box>

      <main ref={mainRef}>
        {/* displays header image with page title */}
        <MyContainer maxWidth='sm' >
          <Card> 
            <MyTitle align='center' >
              Login
            </MyTitle>
            <Box sx={{ position: 'relative' }}>
              <CardMedia 
                component="img"
                sx={{ height: '30vh', filter: 'brightness(35%)' }}
                image="https://images.squarespace-cdn.com/content/v1/5a44e092e45a7c5289a2c962/1579451979418-KJNZXD8N2F23HS3AB6J2/Food+Photographer+Lancashire+1.jpg?format=1500w"
                alt="random"
              /> 
            </Box>
          </Card>
        </MyContainer>
        {/* Allows the user to login by entering their details */}
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
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <MUILink href="#" variant="body2">
                        Forgot password?
                      </MUILink>
                    </Grid>
                    <Grid item>
                      <MUILink component={Link} to='/signup' variant="body2">
                        {"Don't have an account? Sign Up"}
                      </MUILink>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </Container>
        
        </main>
      </Box>
      
        <Footer />
    </>
    )};
