
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { getRestaurant } from "@/app/actions/admin/getRestaurant";
import CreateForm from "@/app/components/admin/CreateForm";
import AuthContainer from "@/app/components/container/AuthContainer";
import WarningText from "@/app/components/WarningText";
import { getCategory } from "@/app/actions/admin/getCategory";

const CreateProduct = async () => {
    const currentUser = await getCurrentUser();
    const categories = await getCategory();
    const restaurant = await getRestaurant();

    if (!currentUser || currentUser.role !== 'ADMIN') {
        return <WarningText text="Buraya Giremezsin" />;
    }

    if (!restaurant) {
        return <WarningText text="Restoran verisi alınamadı." />;
    }

    return (
        <AuthContainer>
            <CreateForm categories={categories} restaurant={restaurant} />
        </AuthContainer>
    );
}

export default CreateProduct;
