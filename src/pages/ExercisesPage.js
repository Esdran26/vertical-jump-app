import React from 'react';
import Menu from '../components/principal-content/menu/Menu';

const ExercisesPage = () => {
    const exercicesObject = [
        {
            link: 'https://www.cdn.spotebi.com/wp-content/uploads/2015/02/march-in-place-exercise-illustration.gif'
        },
        {
            link: 'https://www.cdn.spotebi.com/wp-content/uploads/2014/10/jumping-jacks-exercise-illustration.gif'
        },
        {
            link: 'https://www.cdn.spotebi.com/wp-content/uploads/2015/02/ankle-hops-exercise-illustration.gif'
        },
        {
            link: 'https://www.cdn.spotebi.com/wp-content/uploads/2015/02/alternating-side-lunge-exercise-illustration.gif'
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

    const menuExercisesStyle = {
        backgroundColor: 'blue'
    }

    return(
        <div style={menuExercisesStyle}>
            <Menu />
        </div>
    );
}

export default ExercisesPage;