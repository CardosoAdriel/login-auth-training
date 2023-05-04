import React from 'react'
import { Navigate } from 'react-router-dom'
import Signin from '../pages/Signin/Signin';
import useAuth from '../hooks/useAuth';

export default function PrivateRoutes({ Item }) {

    const { signed } = useAuth();

    return signed > 0 ? <Item /> : <Signin />
}
