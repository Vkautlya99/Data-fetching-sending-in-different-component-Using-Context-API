'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Page = ({ params }) => {
    const { id } = params;
    const [user, setUser] = useState(null);

    const userData = async () => {
        
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            setUser(data);
        
    }

    useEffect(() => {
        userData();
    }, [id]); // Trigger fetchUser whenever id changes

    return (
        <>
            {/* Displaying User */}
            {user ? (
                <div className='bg-slate-700 text-white p-5'>
                    <h1 className='font-bold text-xl'>{user.name}</h1>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <div>
                        <h3>Address</h3>
                        <p>Street: {user.address.street}</p>
                        <p>Suite: {user.address.suite}</p>
                        <p>City: {user.address.city}</p>
                        <p>Zipcode: {user.address.zipcode}</p>
                    </div>
                    <p>Website : { user.website}</p>
                    {/* Add more details here as needed */}
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
        </>
    );
};

export default Page;
