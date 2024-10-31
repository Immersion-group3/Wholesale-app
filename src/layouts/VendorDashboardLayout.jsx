import React from 'react'
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const VendorDashboardLayout = () => {
  return (
    <div>
        <div>
            <Sidebar />
            <Outlet />
        </div>
    </div>
  )
}

export default VendorDashboardLayout;