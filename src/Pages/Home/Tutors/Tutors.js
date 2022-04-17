import React from 'react';
import Tutor from '../Tutor/Tutor';
import './Tutors.css';
import tutor1 from '../../images/tutors/tutor1.png';
import tutor2 from '../../images/tutors/tutor2.png';
import tutor3 from '../../images/tutors/tutor3.png';
import tutor4 from '../../images/tutors/tutor4.png';
import tutor5 from '../../images/tutors/tutor5.png';
import tutor6 from '../../images/tutors/tutor6.png';

const tutors = [
    { id:1 , trainer:'Akram Hussain' , profession:'Wab devloper',gander:'male' , img:tutor1},
    { id:2 , trainer:'Nusrat Jahan' , profession:'Wab Designer',gander:'female' ,img:tutor2},
    { id:3 , trainer:'Salman Khan' , profession:'App Devloper',gander:'male' , img:tutor3},
    { id:4 , trainer:'Maruf Hasan' , profession:'FronTEnd Devloper ',gander:'male' , img:tutor4},
    { id:5 , trainer:'Abir Hussain' , profession:'Game Devloper',gander:'male' , img:tutor5},
    { id:6 , trainer:'Naeem Hasan' , profession:'Data Expert ',gander:'male' , img:tutor6}
];

const Tutors = () => {
    return (
        <div className='mt-5' id='tutors'>
            <h1 className='text-primary text-center'>Our Best Tutor</h1>
           <div className='tutor-cart mt-5 m-5'>
           {
                tutors.map(tutor=><Tutor
                key={tutor.id}
                tutor={tutor}
                ></Tutor>)
            }
           </div>
        </div>
    );
};

export default Tutors;