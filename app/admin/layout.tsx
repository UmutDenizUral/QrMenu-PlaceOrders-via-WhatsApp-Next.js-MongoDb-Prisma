import React from 'react'
import AdminSidebar from '../components/admin/AdminSidebar'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='md:flex gap-3 mx-1 '>
      <AdminSidebar />
      {children}
    </div>
  )
}

export default AdminLayout