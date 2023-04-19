import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import PrivateRoutes from './PrivateRoutes';

export default function RoutesApp() {

    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<PrivateRoutes Item={Home} />} />
                <Route path='/home' element={<PrivateRoutes Item={Home} />} />
                <Route path='/Signin' element={<Signin />} />
                <Route path='/Signup' element={<Signup />} />
                {/* <Route path='*' element={<Signin />} /> */}

            </Routes>
        </BrowserRouter>
    )
}