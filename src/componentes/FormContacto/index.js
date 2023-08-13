import React from 'react';
import { useForm } from 'react-hook-form';

 const FormContacto =  () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Nombre" {...register("Nombre", {required: true})} />
      <input type="email" placeholder="E-Mail" {...register("E-Mail", {required: true})} />
      <input type="text" placeholder="Asunto" {...register("Asunto", { min: 2})} />
      <textarea {...register("Mensaje", {required: true})} />

      <input type="submit" />
    </form>
  );
}


export default FormContacto