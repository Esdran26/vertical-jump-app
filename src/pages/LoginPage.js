import React, {useState} from 'react';
import { useForm } from "react-hook-form";

const LoginPage = () => {
    const {register, handleSubmit, errors} = useForm(),
          onSubmit = data => console.log(data);

    return(
        <React.Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="userName">Nombre de usuario: </label>
                <input 
                    id="userName"
                    name="userName" 
                    autoFocus="true"
                    type="text" 
                    ref={register({required: true, minLength: 4, maxLength: 15})}
                />
                {errors.userName && <small>El usuario es requerido</small>}

                <label htmlFor="password">Contraseña: </label>
                <input 
                    id="password"
                    name="password"
                    type="password"
                    ref={register({required: true, minLength: 8, maxLength: 20})}
                />
                {errors.password && <small>La contraseña es requerida y mínimo 8 caracteres</small>}

                <input type="submit" value="Enviar"/>
            </form>
        </React.Fragment>
    );
}

export default LoginPage;
