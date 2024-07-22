import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './App';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NoPage from './pages/NoPage';
import Restaurant from './pages/Restaurant';
import theme from './theme';

/* Uses the React Router to define the application's routes */

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/restaurant" element={<Restaurant />} />
                        <Route path="*" element={<NoPage />} />
                    </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);