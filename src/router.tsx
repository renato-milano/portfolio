import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import BookCall from './pages/BookCall';
import Home from './pages/Home';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/BookCall" element={<BookCall />} />
                <Route path="/home" element={<Home></Home>}/>
            </Routes>
        </Router>
    );
};

export default AppRouter;