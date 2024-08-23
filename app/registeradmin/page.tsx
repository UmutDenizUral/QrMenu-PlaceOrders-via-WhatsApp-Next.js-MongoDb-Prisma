import { getCurrentUser } from "../actions/getCurrentUser"
import AdminRegisterClient from "../components/auth/AdminRegisterClient"

const AdminRegister = async () => {
  
  const currentUser = await getCurrentUser()
  return (
    <div>
      <AdminRegisterClient currentUser={currentUser} />
    </div>
  )
}

export default AdminRegister