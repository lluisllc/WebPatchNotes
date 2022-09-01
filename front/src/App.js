import './App.css';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import HomePage from './pages/HomePage.js';
import HomeBrews from './pages/Homebrews.js';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';

function App() {
      return (
            <>
                  <Navbar />
                  <Routes>
                        <Route exact path="/" element={
                              <PrivateRoute>
                                    <HomePage />
                              </PrivateRoute>} />

                        <Route exact path="/homebrews" element={
                              <PrivateRoute>
                                    <HomeBrews />
                              </PrivateRoute>} />
                        <Route
                              exact
                              path="/contact"
                              element={
                                    <AnonRoute>
                                          <ContactPage />
                                    </AnonRoute>
                              }
                        />         
                        <Route
                              exact
                              path="/signup"
                              element={
                                    <AnonRoute>
                                          <SignupPage />
                                    </AnonRoute>
                              }
                        />
                        <Route
                              exact
                              path="/login"
                              element={
                                    <AnonRoute>
                                          <LoginPage />
                                    </AnonRoute>
                              }
                        />
                  </Routes>
            </>
      );
}

export default App;
