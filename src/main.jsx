import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FormLogin from './components/Fragments/Auth/FormLogin';
import FormRegister from './components/Fragments/Auth/FormRegister';
import { Toaster } from 'react-hot-toast'; 

const router = createBrowserRouter([
  {
    'path': '/',
    'element': <HomePage />
  },
  {
    'path': '/login',
    'element': <FormLogin />
  },
  {
    'path': '/register',
    'element': <FormRegister />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster /> 
    <RouterProvider router={router} />
  </StrictMode>,
);
