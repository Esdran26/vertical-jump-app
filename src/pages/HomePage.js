import React from 'react';
import PrincipalContent from '../components/principal-content/PrincipalContent';
import SecondSection from '../components/second-section/SecondSection';
import ThirdSection from '../components/third-section/ThirdSection';

const HomePage = () => {
    return(
        <React.Fragment>
            <PrincipalContent />
            <SecondSection />
            <ThirdSection />
        </React.Fragment>
    );
}

export default HomePage;