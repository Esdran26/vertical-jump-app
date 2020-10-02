import React from 'react';
import styled from "styled-components";

import Menu from '../components/principal-content/menu/Menu';

const exercicesObject = [
    {
        title: 'Marcha en el lugar',
        link: 'https://www.cdn.spotebi.com/wp-content/uploads/2015/02/march-in-place-exercise-illustration.gif',
        primaryMuscles: 'Caderas y muslos',
        secondaryMuscles: 'Piernas, brazos, corazón y glúteos'
    },
    {
        title: 'Saltos de tijera',
        link: 'https://www.cdn.spotebi.com/wp-content/uploads/2014/10/jumping-jacks-exercise-illustration.gif',
        primaryMuscles: 'Glúteos, cuádriceps y cadera',
        secondaryMuscles: 'Piernas, abdominales y espalda',
    },
    {
        title: 'Saltos de tobillo',
        link: 'https://www.cdn.spotebi.com/wp-content/uploads/2015/02/ankle-hops-exercise-illustration.gif',
        primaryMuscles: 'Pantorrillas',
        secondaryMuscles: 'Piernas y caderas',
    },
    {
        title: 'Estocada lateral alternante',
        link: 'https://www.cdn.spotebi.com/wp-content/uploads/2015/02/alternating-side-lunge-exercise-illustration.gif',
        primaryMuscles: 'Glúteos, cuádriceps, isquiotibiales y muslos internos',
        secondaryMuscles: 'Corazón, pantorrillas y muslos externos'
    },
    {
        link: 'https://www.cdn.spotebi.com/wp-content/uploads/2014/10/squat-exercise-illustration.gif'
    },
    {
        link: 'https://www.cdn.spotebi.com/wp-content/uploads/2016/09/front-and-back-lunges-exercise-illustration-spotebi.gif'
    },
    {
        link: 'https://www.cdn.spotebi.com/wp-content/uploads/2015/08/jump-squat-exercise-illustration.gif'
    },
    {
        link: 'https://www.cdn.spotebi.com/wp-content/uploads/2015/02/squat-side-kick-exercise-illustration.gif'
    },
    {
        link: 'https://www.cdn.spotebi.com/wp-content/uploads/2016/08/forward-jump-shuffle-back-exercise-illustration-spotebi.gif'
    },
    {
        link: 'https://www.cdn.spotebi.com/wp-content/uploads/2017/06/double-pulse-squat-jump-exercise-illustration-spotebi.gif'
    },
    {
        link: 'https://www.cdn.spotebi.com/wp-content/uploads/2015/05/wall-sit-exercise-illustration.jpg'
    },
    {
        link: 'https://www.cdn.spotebi.com/wp-content/uploads/2015/03/butterfly-stretch-exercise-illustration.jpg'
    }
];

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

const ExercisesList = (props) => {
    const exercisesList = props.exercisesData.map(exercise => 
        <Container className="exercise-container" key={exercise.toString()}>
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
            <ExercisesList exercisesData={exercicesObject} />
        </React.Fragment>
    );
}

export default ExercisesPage;