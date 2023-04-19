import { createContext, useEffect, useState } from "react"
import axios from 'axios'


export const AuthContext = createContext({})

export default function AuthProvider({ children }) {
    const baseUrl = "http://localhost:3000"
    const [user, setUser] = useState();
    const [usersStorage, setUsersStorage] = useState([]);

    const getUsuarios = async () => {
        const res = await axios.get(`${baseUrl}/users`)
        setUsersStorage(res.data)
    }

    const setUsuario = async (body) => {
        await axios.post(`${baseUrl}/users`, body)
            .then(res => {
                console.log(res)
                getUsuarios();
            })
    }

    useEffect(() => {
        //primeiro obtem no db os usuarios cadastrados
        getUsuarios();

        //consultar local storage e ver se tem usuário autenticado
        const userToken = localStorage.getItem('user_token');

        //se tiver usuário autenticado e usuários cadastrados
        if (userToken && usersStorage) {
            const hasUser = usersStorage?.filter(
                (user) => user.email === userToken.email
            )
            if (hasUser) setUser(hasUser[0])
        }

    }, [])

    const signin = (email, password) => {
        getUsuarios();

        const hasUser = usersStorage?.filter(user => user.email === email)

        if (hasUser?.length) {
            if (hasUser[0].password === password) {
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem('user_token', JSON.stringify({ email, token }))
                setUser({ email, token })
                return
            } else {
                return "E-mail ou senha incorretos"
            }
        } else {
            return "Usuário não cadastrados"
        }

    }

    const signup = (email, password) => {
        getUsuarios();

        const hasUser = usersStorage?.filter(user => user.email === email)

        if (hasUser?.length) return "Já tem uma conta com este E-mail"

        const newUser = {
            email,
            password
        }

        setUsuario(newUser);

    }

    const signout = () => {
        setUser(null)
        localStorage.removeItem('user_token');
    }

    return <AuthContext.Provider value={{ user, signed: !!user, signin, signup, signout }}>
        {children}
    </AuthContext.Provider>
}