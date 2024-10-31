
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import VendorSignUp from './pages/VendorSignUp';
import VendorLogin from './pages/VendorLogin';
import ForgotPassword from './pages/ForgotPassword';
import VendorDashboard from './pages/VendorDashboard';
import ProductCatalogue from './pages/ProductCatalogue';

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
      path:"/product-catalogue",
      element:<ProductCatalogue />
    },
    {
      path:"/vendordash",
      element: <VendorDashboard />
    },

  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
