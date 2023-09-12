import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CajaForm, NuevoInput, ContainedButton } from "../UI"


const FormContacto = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
  try {
    // Enviar los datos al servidor
    const response = await fetch('https://formsubmit.co/cristianfonta16@gmail.com', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      console.log('Formulario enviado exitosamente.', response, JSON.stringify(data));
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
        name="Nombre"
        {...register("nombre", { required: true, minLength: 3 })}
        error={inputError.nombre}
        onBlur={() => handleBlur("nombre")} 
      />
      <NuevoInput 
        type="email" 
        autoComplete="email" 
        placeholder="E-Mail" 
        multiline 
        name="email"
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
        name="Asunto"
        {...register("asunto", { required: true, minLength: 3 })}
        error={inputError.asunto}
        onBlur={() => handleBlur("asunto")} 
      />
      <NuevoInput 
        aria-label="Mensaje" 
        label="Mensaje" 
        placeholder="Mensaje" 
        multiline 
        name="Mensaje"
        {...register("mensaje", { required: true, minLength: 3 })}
        error={inputError.mensaje}
        onBlur={() => handleBlur("mensaje")} 
      />

      <ContainedButton type="submit" size="large" variant="contained">Enviar</ContainedButton>
    </CajaForm>
  );
}


export default FormContacto;