import { useState } from 'react';
import Form from './Form';
import './User.css'


const User=()=>{

    const[showForm, setShowForm] = useState(false)



    const handleuserclick=()=>{
        setShowForm(true)
    };


    
    return(
        <>

        <div className="user">
            <h1>Users</h1>
             <p>Manage Users</p>
               
            <div className='btnn'>   
             <button className='btn' onClick={handleuserclick}>+ Add users</button>
            </div>
           
            

            <div className='userdet'>
                <div>
                <h1>User</h1>
                </div>
                <div className='card'>
                {showForm && <Form/>}
                </div>
            </div>
        </div>
        </>
    )
}

export default User;