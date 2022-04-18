import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Services from '../Services/Services';
import Tutors from '../Tutors/Tutors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Tutors></Tutors>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;