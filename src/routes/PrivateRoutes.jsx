import useAuth from "../hooks/useAuth";
import Signin from "../pages/Signin";

export default function PrivateRoutes({ Item }) {
    const { signed } = useAuth();

    return signed ? <Item /> : <Signin />
}