import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from '../Pages/Guest/Login';
import Register from '../Pages/Guest/Register';


export default function GuestRoute(){

    return (
        <Routes>
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<Register />} />
        </Routes>
    );
}
