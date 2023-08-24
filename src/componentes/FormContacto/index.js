import React from 'react';
import { useForm } from 'react-hook-form';
import styled from "styled-components";
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';

export const CajaForm = styled.form`
  display: flex;
  flex-direction: column;
`

const NuevoInput = styled(Input)`
  margin-bottom: 1rem;
  background-color: ${ ({ theme }) => theme.inside };
  color: ${ ({theme}) => theme.text };
`

const ColorButton = styled.button(({ theme }) => ({
  color: theme.text ,
  backgroundColor: theme.inside
}));

  const FormContacto = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <CajaForm onSubmit={handleSubmit(onSubmit)}>
      <NuevoInput aria-label="Nombre" type="text" placeholder="Nombre" {...register("Nombre", { required: true, min: 2 })} />
      <NuevoInput aria-label="E-Mail" type="email" placeholder="E-Mail" {...register("EMail", { required: true })} />
      <NuevoInput aria-label="Asunto" type="text" placeholder="Asunto" {...register("Asunto", { required: true, min: 2 })} />
      <textarea aria-label="Mensaje" label="Mensaje" placeholder="Mensaje" multiline {...register("Mensaje", { required: true })} />

      <ColorButton type="submit" size="large" variant="contained">Enviar</ColorButton>
    </CajaForm>
  );
}


export default FormContacto;