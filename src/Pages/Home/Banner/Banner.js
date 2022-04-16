
import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{ height: '450px' }}
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-white'>Being a student is easy. Learning requires actual work</h3>
                        <p className='text-white'>Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '450px' }}
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-dark'>Learning never exhausts the mind.</h3>
                        <p className='text-white'>Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '450px' }}
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-dark'>Change is the end result of all true learning.</h3>
                        <p className='text-dark'>The only person who is educated is the one who has learned how to learn and change.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;