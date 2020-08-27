import React from 'react';
import CourseList from '../../FakeData/CourseData';
import { useState } from 'react';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';
import './Parent.css';


const Parent = () => {
    const [courses, setCourses] = useState(CourseList);
    const [cart, setCart] = useState([])

    const handleEnrollNow = (enroll) => {
        const enrolled = [...cart, enroll];
        setCart(enrolled);
    }

    return (
        <div className='main-container'>
            <div className='course-container'>
                {
                    courses.map(course => <Course handleEnrollNow={handleEnrollNow} course={course}> </Course>)
                }
            </div>
            <div className='cart-container'>
                <Cart carts={cart}></Cart>
            </div>
        </div>
    );
};

export default Parent;