import React from 'react';
import { useForm } from 'react-hook-form';
import styled from "styled-components";
import Input from '@mui/material/Input';


export const CajaForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 25rem;
`

const NuevoInput = styled(Input)`
  margin-bottom: 1rem;
  background-color: ${ ({ theme }) => theme.inside };
  color: ${ ({theme}) => theme.text };
`

const ContainedButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

  const FormContacto = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <CajaForm onSubmit={handleSubmit(onSubmit)}>
      <NuevoInput aria-label="Nombre" type="text" placeholder="Nombre" multiline {...register("Nombre", { required: true, min: 2 })} />
      <NuevoInput type="email" placeholder="E-Mail" multiline {...register("EMail", { required: true })} />
      <NuevoInput aria-label="Asunto" type="text" placeholder="Asunto" multiline {...register("Asunto", { required: true, min: 2 })} />
      <NuevoInput aria-label="Mensaje" label="Mensaje" placeholder="Mensaje" multiline {...register("Mensaje", { required: true })} />

      <ContainedButton type="submit" size="large" variant="contained">Enviar</ContainedButton>
    </CajaForm>
  );
}


export default FormContacto;