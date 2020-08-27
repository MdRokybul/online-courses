import React from 'react';
import './Course.css'

const Course = (props) => {
    const { name, img, price } = props.course;
    return (
        <div className='parent-container'>
            <div className='img-container'>
                <img src={img} alt=""/>
            </div>
            <div className='details-container'>
                <h3> {name} </h3>
                <p> Price: ${price} </p>
                <button className="btn btn-primary" onClick={() => props.handleEnrollNow(props.course)}> Enroll Now </button>
            </div>
        </div>


    );
};

export default Course;