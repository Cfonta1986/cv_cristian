import React from 'react';
import { useForm } from 'react-hook-form';
import styled from "styled-components";
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; 



export const CajaForm = styled.form`
  display: flex;
  flex-direction: column;
`


 const FormContacto =  () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <CajaForm onSubmit={handleSubmit(onSubmit)}>
      <Input  aria-label="Nombre" type="text" placeholder="Nombre" {...register("Nombre", {required: true, min: 2})} />
      <Input  aria-label="E-Mail" type="email" placeholder="E-Mail" {...register("EMail", {required: true})} />
      <Input  aria-label="Asunto" type="text" placeholder="Asunto" {...register("Asunto", {required:true, min: 2})} />
      <TextField name="Mensaje" label="Mensaje" multiline rows={2} variant="outlined" {...register("Mensaje", { required: true })} />

      <Button type="submit" variant="contained">Submit</Button>
    </CajaForm>
  );
}


export default FormContacto


