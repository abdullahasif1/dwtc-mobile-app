import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { MsalProvider, useMsal, useIsAuthenticated } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import Home from './pages/Home';
import Directory from './pages/Directory';
import Services from './pages/Services';  
import Events from './pages/Events';
import Navigation from './components/Navigation';
import Header from './components/Header';
import './App.css';
import { msalConfig, loginRequest } from './authConfig';

const msalInstance = new PublicClientApplication(msalConfig);

const Login = () => {
  const { instance } = useMsal();
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    instance.loginRedirect(loginRequest).then(response => {
      console.log(response);
      navigate('/home');
    }).catch(error => {
      console.error(error);
    });
  };

  const handleLoginPopUp = () => {
    instance.loginPopup(loginRequest).then(response => {
      console.log(response);
      navigate('/home');
    }).catch(error => {
      console.error(error);
    });
  };


  return (
    <div className="login-page">
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <button 
                onClick={handleLoginRedirect} 
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Sign in using Redirect
              </button>
              <button 
                onClick={handleLoginPopUp} 
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Sign in using PopUp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const PrivateRoute = ({ element: Component }) => {
  const isAuthenticated = useIsAuthenticated();

  return isAuthenticated ? (<><Header /><Component /><Navigation /></> ):  <Navigate to="/" />;
};

const AuthenticatedLayout = ({ children }) => {
  return (
    <>
      
      <div className="content">
        {children}
      </div>
      
    </>
  );
};

const App = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <MsalProvider instance={msalInstance}>
      <Router>
        <div className="container bg-gray-100 w-full h-[100%]">
          <Routes>
            <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Login />} />
            {/* <Route path="/" element={<AuthenticatedLayout />}/> */}
            <Route path="/home" element={<PrivateRoute element={Home} />} />
            <Route path="/directory" element={<PrivateRoute element={Directory} />} />
            <Route path="/services" element={<PrivateRoute element={Services} />} />
            <Route path="/events" element={<PrivateRoute element={Events} />} />
          
          </Routes>
        </div>
      </Router>
    </MsalProvider>
  );
};

export default App;
