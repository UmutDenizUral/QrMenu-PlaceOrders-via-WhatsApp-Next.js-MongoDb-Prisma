"use client"
import { GiMeal } from "react-icons/gi";
import { RiDrinks2Line } from "react-icons/ri";
import { LuIceCream2 } from "react-icons/lu";
import { IoFastFoodOutline } from "react-icons/io5";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import Heading from "../general/Heading"
import Input from "../general/Input"
import ChoiceInput from "../general/ChoiceInput";
import Button from "../general/Button";
import { useEffect, useState } from "react";
import firebaseApp from "@/libs/firebase";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import CreateCategory from "./CreateCategory";

export const submenuList = [
   {
      name: "Yemek",
      icon: GiMeal
   },
   {
      name: "İçecek",
      icon: RiDrinks2Line
   },
   {
      name: "Atıştırmalık",
      icon: IoFastFoodOutline
   },
   {
      name: "Tatlı",
      icon: LuIceCream2
   },
]
const CreateForm = ({ categories }: any, restaurant: any) => {
   const [img, setImg] = useState<File | null>(null)
   const [selectedSubmenu, setSelectedSubmenu] = useState<string | null>(null);
   const router = useRouter();
   console.log(categories)


 
   const {
      register,
      handleSubmit,
      reset,
      setValue,
      watch,
      formState: { errors },
   } = useForm<FieldValues>({
      defaultValues: {
         name: "",
         description: "",
         category: "",
         price: "",
         image: "",
         restaurant: null,
         ingredients: '',
         submenu: ""
      }
   })

   const onSubmit: SubmitHandler<FieldValues> = async (data) => {

      if (!selectedSubmenu) {
         // Submenu seçilmemişse hata gösterebiliriz
         toast.error('Lütfen bir alt menü seçin.');
         return;
     }
      let uploadedImg;
      //firebase foto yükleme ve foto linki alma
      const handleChange = async () => {
         toast.success('Yükleme işlemi basarılı !!!')
         try {

            const storage = getStorage(firebaseApp);
            const storageRef = ref(storage, `images/${data.name}_${data.category}.jpg`);
            const uploadTask = uploadBytesResumable(storageRef, img );
            await new Promise<void>((resolve, reject) => {
               uploadTask.on('state_changed',
                  (snapshot) => {
                     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                     console.log('Upload is ' + progress + '% done');
                     switch (snapshot.state) {
                        case 'paused':
                           console.log('Upload is paused');
                           break;
                        case 'running':
                           console.log('Upload is running');
                           break;
                     }
                  },
                  (error) => {
                     reject(error)
                  },
                  () => {
                     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        uploadedImg = downloadURL;
                        resolve()
                     }).catch((error) => {
                        console.log(error)
                     });
                  }
               );
            })
         } catch (error) {
            console.log(img)

            console.log(error)
         }
      }
      await handleChange()

      let newData = { ...data, image: uploadedImg }

      axios.post('/api/product', newData)
         .then(() => {
            toast.success('Ürün ekleme işlemi basarılı !!!')
            reset();
            router.refresh();

         }).catch((error) => {
            alert(error)
            console.log(error, "error")
         })

      console.log(newData, "NEWDATAAAA")
   }

   const submenu = watch('submenu')

   const setCustomValue = (id: string, value: any) => {
      setValue(id, value, {
         shouldDirty: true,
         shouldTouch: true,
         shouldValidate: true
      })
   }
   //resim yükleme func
   const onChangeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
         setImg(e.target.files[0])
      }
   }

   return (
      <div>
         <Heading text="ÜRÜN OLUSTUR" center />
         <Input placeholder="Ad" type="text" id="name" register={register} errors={errors} required />
         <Input placeholder="Acıklama" type="text" id="description" register={register} errors={errors}  />
         <Input placeholder="Fiyat" type="number" id="price" register={register} errors={errors} required />
         <Input placeholder="Malzemeler" type="string" id="ingredients" register={register} errors={errors} />
         <div className="flex flex-grow items-center justify-between gap-3">
            <select  required {...register("categoryId", {required:true})} className={`block w-1/4 border border-gray-300 rounded-md p-2 ${errors ? '' : 'border border-slate-300'}`} >
               <option value="">Kategori Seçin</option>
               {categories.map((category: any) => (
                  <option key={category.id} value={category.id}>
                     {category.name}
                  </option>
               ))}
            </select>
            <CreateCategory />
         </div>
        
         <div className="flex flex-wrap gap-3 ">
         {submenuList.map((item, i) => (
                    <ChoiceInput
                        key={i}
                        icon={item.icon}
                        text={item.name}
                        onClick={(submenu) => {
                            setCustomValue("submenu", submenu);
                            setSelectedSubmenu(submenu);
                        }}
                        selected={selectedSubmenu === item.name}
                    />
                ))}
         </div>
         <input className="mb-2" type="file" onChange={onChangeFunc} />
         <Button text="Ürün Olustur" onClick={handleSubmit(onSubmit)} />
      </div>
   )
}

export default CreateForm