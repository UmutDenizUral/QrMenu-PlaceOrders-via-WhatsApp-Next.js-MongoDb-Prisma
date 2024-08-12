import React from 'react'
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
const CreateCategory = () => {
    const {
        register,
        handleSubmit,
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
  




  return (
    <div>CreateCategory</div>
  )
}

export default CreateCategory