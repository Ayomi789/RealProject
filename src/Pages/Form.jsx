import React, { useState } from 'react';
import './Form.css'
function Form() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        image: ''
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: name === 'image' ? URL.createObjectURL(files[0]) : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        e.target.submit();
    };

    return (
        <>
        <div className='contain'>
            <form onSubmit={handleSubmit} id='container'>
                <span className='Add-user'>Add User</span>

                <input
                    type="text"
                    name="username"
                    placeholder="Your Name"
                    value={formData.username}
                    onChange={handleChange}
                    className='form--input'
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className='form--input'
                />

                <input
                    type="file"
                    name="image" 
                    onChange={handleChange}
                    className='form--input'
                />

            <div className='btnn'>
                <button type="submit" className='form--submit'>Submit</button>
                </div>
            </form>
        </div>
        </>
    );
   
};
   
export default Form;
