import React, { useState } from 'react';
import styled from "styled-components";
import { useForm } from "react-hook-form";

import BackgroundBlur from '../img/background-blur.jpg';
import Background from '../img/background.jpg';

const Small = styled.small`
    color: red;
`;
const H1 = styled.h1`
    font-size: 25px;
    color: black;
    text-align: center;
    font-weight: bold;
`;
const Form = styled.form`
    background-color: white;
    padding: 2rem;
    min-width: 320px;
    width: 400px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    transition: all .5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
    }
`;
const InputField = styled.input`
    font-size: .9rem;
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 3px solid #ccc;
    transition: all .5s ease-in-out;
    outline: none;
    &:focus {border: 3px solid #555;}
`;
const ButtonSubmit = styled.button`
    width: 100%;
    padding: 12px 20px;
    margin-top: 1rem;
    border: 3px solid #ccc;
    cursor: pointer;
    transition: all .5s ease-in-out;
    &:hover {
        border: 3px solid #555;
        background-color: #555;
        color: white;
    }
`;


const LoginPage = () => {
    const [isBlur, setIsBlur] = useState(false);
    const {register, handleSubmit, errors} = useForm(),
          onSubmit = data => console.log(data);

    const backgroundFinish = isBlur ? BackgroundBlur : Background;

    const styleContainer = {
        backgroundImage: `url(${backgroundFinish})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        transition: 'all .3s ease-in-out'
    }

    const handleFocus = () => {
        setIsBlur(true);
        console.log('El fondo es borroso');
    }

    const handleBlur = () => {
        setIsBlur(false);
        console.log('El fondo no es borroso');
    }

    return(
        <div style={styleContainer}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <H1>INICIA SESIÓN</H1><br/>
                <label htmlFor="userName">Nombre de usuario: </label><br/>
                <InputField 
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    id="userName"
                    name="userName" 
                    autoFocus="true"
                    type="text"
                    ref={register({required: true, minLength: 4, maxLength: 15})}
                />
                <br/>
                {errors.userName && <Small>El usuario es requerido</Small>}
                <br/><br/>

                <label htmlFor="password">Contraseña: </label><br/>
                <InputField 
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    id="password"
                    name="password"
                    type="password"
                    ref={register({required: true, minLength: 8, maxLength: 20})}
                />
                <br/>
                {errors.password && <Small>La contraseña es requerida</Small>}
                <br/><br/>
                <small>
                    <a 
                        style={{color: 'rgba(9, 132, 227,1.0)', textDecoration: 'none'}} 
                        href="#"
                    >
                        Eres nuevo? Regístrate
                    </a>
                </small>

                <ButtonSubmit type="submit">Iniciar Sesión</ButtonSubmit>
            </Form>
        </div>
    );
}

export default LoginPage;
