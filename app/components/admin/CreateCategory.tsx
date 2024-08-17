import React from 'react';
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from '../general/Input';
import Button from '../general/Button';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const CreateCategory = ({submenuId}: any) => {
   const router = useRouter();
   const {
      register,
      handleSubmit,
      reset, // reset fonksiyonunu ekledik
      formState: { errors },
   } = useForm<FieldValues>({
      defaultValues: {
         name: "",
         submenuId:''
      }
   });

   const onSubmit: SubmitHandler<FieldValues> = async (data) => {
      let newData = { ...data, submenuId}
      try {
         await axios.post('/api/category', newData);
         toast.success('Kategori ekleme işlemi başarılı !!!');
         reset(); // Formu sıfırla
         router.refresh();
      } catch (error) {
         toast.error('Kategori ekleme işlemi başarısız !!!');
         console.error(error, "error");
      }
      console.log(data, "NEWDATAAAA");
   };
   
   return (
      <div className='flex flex-grow gap-2'>
         <Input
            placeholder="Kategori"
            type="text"
            id="name"
            register={register}
            errors={errors}
            required
         />
         <Button
            small
            text='Kategori Ekle'
            onClick={handleSubmit(onSubmit)}
         />
      </div>
   );
};

export default CreateCategory;
