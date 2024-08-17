import { getCurrentUser } from "../actions/getCurrentUser"
import RegisterClient from "../components/auth/RegisterClient"


const Register = async () => {
  const currentUser = await getCurrentUser()
  return (
    <div>
      <RegisterClient currentUser={currentUser} />

      <h4>Restran açmak için aşğıdan devam edin</h4>
    </div>
  )
}

export default Register