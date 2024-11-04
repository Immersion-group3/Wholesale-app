
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import VendorSignUp from './pages/VendorSignUp';
import VendorLogin from './pages/VendorLogin';
import ForgotPassword from './pages/ForgotPassword';
import VendorDashboard from './pages/VendorDashboard';
import ProductCatalogue from './pages/productCatalog/ProductCatalogue';
import ClientDashboard from './pages/ClientDashboard';
import ClientSignup from './pages/client auth/ClientSignup';
import ClientLogin from './pages/client auth/ClientLogin';
import { ToastContainer } from 'react-toastify';

import VerificationCode from './pages/VerificationCode';
import NewPassword from './pages/CreateNewPassword';


function App() {
  const router = createBrowserRouter([
    {
      path: "/vendorsignup",
      element: <VendorSignUp />
    },
    {
      path: "/vendorlogin",
      element: <VendorLogin />
    },
    {
      path: "/forgotpassword",
      element: <ForgotPassword />
    },
    {
      path: "/verify-email",
      element: <VerificationCode/>
    },
    {
      path: "create-new-password",
      element: <NewPassword/>
    },
    {
      path: "/product-catalogue",
      element: <ProductCatalogue />
    },
    {
      path: "/vendordash",
      element: <VendorDashboard />
    },
    {
      path: '/clientdash',
      element: <ClientDashboard />
    },
    {
      path:'/clientSignup',
      element: <ClientSignup/>
    },
    {
      path:'/clientLogin',
      element:<ClientLogin/>
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  )
}

export default App;
