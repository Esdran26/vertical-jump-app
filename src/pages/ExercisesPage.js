import React from 'react';
import styled from "styled-components";

import Menu from '../components/principal-content/menu/Menu';
import exercicesObject from '../data/exerciseObject';

//Styled Components
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    max-width: 770px;
    margin: 3rem auto;
    align-items: center;
    border: 2px solid #707070;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

    @media (max-width: 775px) {
        grid-template-columns: 1fr 0;
        grid-template-rows: 1fr 1fr;
        align-items: initial;
        width: 315px;
        justify-content: center;
    }
`;
const Image = styled.img`
    width: 310px;
    @media (max-width: 775px) {
        width: 100%;
    }
`;
const ImageContainer = styled.div`
    border-right: 2px solid #707070;
    @media (max-width: 775px) {
        border-right: 0;
        border-bottom: 2px solid #707070;
    }
`;
const TextContainer = styled.div`
    margin: 0 2rem;

    @media (max-width: 775px) {
        grid-row: 2 / 3;
        margin: 2rem;
    }
`;
const SearchContainer = styled.div`
    display: grid;
    justify-content: center;
    margin: 3rem 0;
`;
const Icon = styled.i`
    color: #777777;
    position: absolute;
    bottom: 25px;
    right: 24px;
`;

const SearchExercise = props => {
    const { title, placeholder, icon, name } = props;
    
    const handleChange = e => {
        let searchValue = e.target.value;
        searchValue.toLowerCase();
        console.log(props.exercisesData);

        props.exercisesData.map(exercise =>  {
            if(exercise.title.indexOf(searchValue) === 0) {
                console.log("Entra al nuevo arreglo");
            }
            else {
                console.log("No entra al nuevo arreglo");
            }
        });
    }

    return(
        <SearchContainer>
            <h2>{title}</h2>

            <div 
                style={{position: 'relative'}} 
                className="input-search"
            >
                <input 
                    onChange={handleChange}
                    placeholder={placeholder}
                    type="text" 
                    name={name} 
                    id={name}
                    maxLength="27"
                />

                <Icon className={icon}></Icon>
            </div>
        </SearchContainer>
    );
}

const ExercisesList = props => {
    const exercisesList = props.exercisesData.map(exercise => 
        <Container 
            className="exercise-container" 
            key={exercise.toString()}
        >
            <ImageContainer className="exercise-image">
                <Image 
                    src={exercise.link} 
                    alt={exercise.title}
                />
            </ImageContainer>
            <TextContainer className="exercise-text">
                <h4>{exercise.title}</h4>
                <br/>

                <ul style={{listStyle: 'none'}}>
                    <li><b>Músculos principales:</b> <br/> {exercise.primaryMuscles}</li>
                    <br/>
                    <li><b>Músculos secundarios:</b> <br/> {exercise.secondaryMuscles}</li>
                </ul>
            </TextContainer>
        </Container>
    );

    return exercisesList;
}

const ExercisesPage = () => {
    const menuExercisesStyle = {
        backgroundColor: '#1e3799'
    }

    return(
        <React.Fragment>
            <div style={menuExercisesStyle}>
                <Menu />
            </div>

            <div style={{textAlign: 'center'}}>
                <SearchExercise
                    exercisesData={exercicesObject}
                    title="Busca tu ejercicio"
                    placeholder="Buscar..."
                    icon="fas fa-1x fa-search"
                    name="searchExercise"
                />
            </div>

            <ExercisesList exercisesData={exercicesObject} />
        </React.Fragment>
    );
}

export default ExercisesPage;