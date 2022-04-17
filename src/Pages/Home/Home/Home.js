import React from 'react';
import Tutors from '../../Tutors/Tutors';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Services></Services>
            <Tutors></Tutors>

        </div>
    );
};

export default Home;