import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Signin from '../pages/Signin/Signin'
import Signup from '../pages/Signup/Signup'
import PrivateRoutes from './privateRoutes'

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<PrivateRoutes Item={Home} />} />
                <Route path='/home' element={<PrivateRoutes Item={Home} />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='*' element={<Signin />} />

            </Routes>
        </BrowserRouter>
    )
}
