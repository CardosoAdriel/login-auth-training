import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Signin from "../pages/Signin/Signin";



export default function RedirectToSignin() {
    const { signed, signOut } = useAuth()

    signed ? signOut() : null

    return <Signin />
}