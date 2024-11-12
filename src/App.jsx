
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
import GetAll from './pages/client product catalog/GetAll';
import ClientOrderDetails from './pages/clientOrderDetails/clientOrderDetails';
import OrderManagementPage from './pages/orderManagementClients/orderManagement';
import OrderTrackingPage from './pages/orderManagementClients/OrderTrackingPage';
import OrderDetailPage from './pages/orderManagementClients/OrderDetailPage';

import VendorDashboard2 from './pages/(2)VendorDashboard';
import VendorOrderDetails2 from './pages/(2)VendorOrderDetails';

import AddProducts from './pages/addProducts';
import VendorProductCatalogue from './pages/addProducts/VendorProductCatalogue';




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
      element: <VerificationCode />
    },
    {
      path: "create-new-password",
      element: <NewPassword />
    },
    {
      path: "/productCatalog",
      element: <ProductCatalog />
    },
    {
      path: "/addProduct",
      element: <AddProduct />
    },
    {
      path: "/orderManagementClient",
      element: <OrderManagementPage />
    },
    {
      path: "/orderTrackingpage",
      element: <OrderTrackingPage />
    },
    {
      path: "/orderDetailPage",
      element: <OrderDetailPage />
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
      path: "/vendororderdetails2",
      element: <VendorOrderDetails2 />
    },
    {
      path: '/clientdash',
      element: <ClientDashboard />
    },
    {
      path: '/clientSignup',
      element: <ClientSignup />
    },
    {
      path: '/clientLogin',
      element: <ClientLogin />
    },
    {
      path: '/clientforgotpassword',
      element: <ClientForgotPassword />
    },
    {
      path: '/resetpassword',
      element: <ClientResetPassword />
    },
    {
      path: '/clientproductcatalog',
      element: <GetAll />
    },
    {
      path: '/clientorderdetails',
      element: <ClientOrderDetails />
    },
    {
      path: '/vendproductcatalogue',
      element: <VendorProductCatalogue />
    },
    {
      path: "/addprod",
      element: <AddProducts />
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
