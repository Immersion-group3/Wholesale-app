
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import VendorSignUp from './pages/VendorSignUp';
import VendorLogin from './pages/VendorLogin';
import ForgotPassword from './pages/ForgotPassword';
import VendorDashboard from './pages/VendorDashboard';
import MainContent from './pages/productCatalog/ProductCatalogue';
import ClientDashboard from './pages/ClientDashboard';
import ClientSignup from './pages/client auth/ClientSignup';
import ClientLogin from './pages/client auth/ClientLogin';
import { ToastContainer } from 'react-toastify';

import VerificationCode from './pages/VerificationCode';
import NewPassword from './pages/CreateNewPassword';
import Cart from'./pages/productCatalog/Cart';
import ClientForgotPassword from './pages/client auth/ClientForgotPassword';
import ClientResetPassword from './pages/client auth/ClientResetPassword';
import VendorDashboard2 from './pages/(2)VendorDashboard';
import VendorOrderDetails2 from './pages/(2)VendorOrderDetails';



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
      path: "/resetpassword",
      element: <NewPassword/>
    },
    {
      path: "/MainContent",
      element: <MainContent />
    },
    {
      path:"/Cart",
      element:<Cart/>
    },
    {
      path: "/vendordash",
      element: <VendorDashboard />
    },
    {
      path: "/vendordash2",
      element: <VendorDashboard2 />
    },
    {
      path: "/orderdetails2",
      element: <VendorOrderDetails2/>
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
    },
    {
      path:'/clientforgotpassword',
      element:<ClientForgotPassword />
    },
    {
      path:'/clientresetpassword',
      element:<ClientResetPassword />
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
