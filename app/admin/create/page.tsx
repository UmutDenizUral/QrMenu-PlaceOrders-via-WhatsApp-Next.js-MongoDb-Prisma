import { getCurrentUser } from "@/app/actions/getCurrentUser"
import CreateForm from "@/app/components/admin/CreateForm"
import AuthContainer from "@/app/components/container/AuthContainer"
import WarningText from "@/app/components/WarningText"


const CreateProduct = async () => {
    const currentUser = await getCurrentUser()
    if (!currentUser || currentUser.role !== 'ADMIN') {
        return <WarningText text="Buraya Giremezsin" />
    }
    return (
        <AuthContainer>
            <CreateForm/>
        </AuthContainer>

    )
}

export default CreateProduct