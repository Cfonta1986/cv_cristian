import React, { useState } from 'react';
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

export const ContainedButton = styled.button`
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
  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://formsubmit.co/e67410cbb2350d207b4c820f75d0f18c', {
        method: 'POST',
        body: new URLSearchParams(data),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      if (response.ok) {
        console.log('Formulario enviado exitosamente.');
      } else {
        console.error('Error al enviar el formulario.');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  const [inputError, setInputError] = useState({
    nombre: false,
    eMail: false,
    asunto: false,
    mensaje: false,
  });

  const handleBlur = (nombreInput) => {
    setInputError(prevState => ({
      ...prevState,
      [nombreInput]: errors[nombreInput] ? true : false,
    }));
  };

  return (
    <CajaForm onSubmit={handleSubmit(onSubmit)}>
      <NuevoInput 
        aria-label="Nombre" 
        autoComplete="name" 
        type="text" 
        placeholder="Nombre"
        multiline 
        {...register("nombre", { required: true, minLength: 3 })}
        error={inputError.nombre}
        onBlur={() => handleBlur("nombre")} 
      />
      <NuevoInput 
        type="email" 
        autoComplete="email" 
        placeholder="E-Mail" 
        multiline 
        {...register("eMail", { required: true, pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Dirección de E-Mail no válida",
        }, })} 
        error={inputError.eMail}
        onBlur={() => handleBlur("eMail")} />
      <NuevoInput 
        aria-label="Asunto" 
        type="text" 
        placeholder="Asunto" 
        multiline 
        {...register("asunto", { required: true, minLength: 3 })}
        error={inputError.asunto}
        onBlur={() => handleBlur("asunto")} 
      />
      <NuevoInput 
        aria-label="Mensaje" 
        label="Mensaje" 
        placeholder="Mensaje" 
        multiline 
        {...register("mensaje", { required: true, minLength: 3 })}
        error={inputError.mensaje}
        onBlur={() => handleBlur("mensaje")} 
      />

      <ContainedButton type="submit" size="large" variant="contained">Enviar</ContainedButton>
    </CajaForm>
  );
}


export default FormContacto;