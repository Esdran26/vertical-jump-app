import React from 'react';
import PrincipalContent from '../components/principal-content/PrincipalContent';
import SecondSection from '../components/second-section/SecondSection';

const HomePage = () => {
    return(
        <React.Fragment>
            <PrincipalContent />
            <SecondSection />
        </React.Fragment>
    );
}

export default HomePage;