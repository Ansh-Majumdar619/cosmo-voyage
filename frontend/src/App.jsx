import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useGsapScroll } from './utils/gsapScrollSetup';
import MouseFollower from './pages/MouseFollower'; // Import the MouseFollower component
import FirstHome from './pages/FirstHome';
import SecondHome from './pages/SecondHome';
import Navbar from './pages/Navbar';
// import About from './pages/About';
import Planets from './pages/Planets';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Logout from './pages/Logout';
import PageTransition from './pages/PageTransition';

const App = () => {
  useGsapScroll();

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const [username, setUsername] = useState(() => {
    return localStorage.getItem('username') || '';
  });

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', user);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
  };

  return (
    <>
      {/* MouseFollower component */}
      <MouseFollower />

      {/* Navbar component */}
      <Navbar isLoggedIn={isLoggedIn} username={username} />

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <PageTransition>
              {isLoggedIn ? <SecondHome onLogout={handleLogout} /> : <FirstHome />}
            </PageTransition>
          }
        />
        <Route
          path="/secondhome"
          element={
            <PageTransition>
              {isLoggedIn ? <SecondHome onLogout={handleLogout} /> : <Navigate to="/" />}
            </PageTransition>
          }
        />
        {/* <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        /> */}
        <Route
          path="/planets"
          element={
            <PageTransition>
              <Planets />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        <Route
          path="/signup"
          element={
            <PageTransition>
              {isLoggedIn ? <Navigate to="/" /> : <SignUp onSignUp={handleLogin} />}
            </PageTransition>
          }
        />
        <Route
          path="/login"
          element={
            <PageTransition>
              {isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />}
            </PageTransition>
          }
        />
        <Route
          path="/logout"
          element={
            <PageTransition>
              <Logout onLogout={handleLogout} />
            </PageTransition>
          }
        />
      </Routes>
    </>
  );
};

export default App;
