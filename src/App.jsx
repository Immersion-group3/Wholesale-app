
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import VendorSignUp from './pages/VendorSignUp';
import VendorLogin from './pages/VendorLogin';
import ForgotPassword from './pages/ForgotPassword';
import VendorDashboard from './pages/VendorDashboard';
// import MainContent from './pages/productCatalog/ProductCatalogue';
import ClientDashboard from './pages/ClientDashboard';
import ClientSignup from './pages/client auth/ClientSignup';
import ClientLogin from './pages/client auth/ClientLogin';
import { ToastContainer } from 'react-toastify';
import ProductCatalog from './pages/productCatalog/ProductCatalogue';
import VerificationCode from './pages/VerificationCode';
import NewPassword from './pages/CreateNewPassword';
import AddProduct from './pages/productCatalog/AddProduct';
import ClientForgotPassword from './pages/client auth/ClientForgotPassword';
import ClientResetPassword from './pages/client auth/ClientResetPassword';
import ClientOrderDetails from './pages/clientOrderDetails/clientOrderDetails';



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
      path: "/productCatalog",
      element: <ProductCatalog/>
    },
    {
      path:"/addProduct",
      element:<AddProduct/>
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
    },
    {
      path:'/clientforgotpassword',
      element:<ClientForgotPassword />
    },
    {
      path:'/clientresetpassword',
      element:<ClientResetPassword />
    },
    {
      path:'/clientorderdetails',
      element:<ClientOrderDetails/>
    },

  ])

  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  )
}

export default App;
