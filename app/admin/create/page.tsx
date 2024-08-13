import { getCategory } from "@/app/actions/getCategory"
import { getCurrentUser } from "@/app/actions/getCurrentUser"
import CreateForm from "@/app/components/admin/CreateForm"
import AuthContainer from "@/app/components/container/AuthContainer"
import WarningText from "@/app/components/WarningText"


const CreateProduct = async () => {
    const currentUser = await getCurrentUser()
    const cat = await getCategory()
    if (!currentUser || currentUser.role !== 'ADMIN') {
        return <WarningText text="Buraya Giremezsin" />
    }
    return (
        <AuthContainer>
            <CreateForm categories={cat}/>
        </AuthContainer>

    )
}

export default CreateProduct