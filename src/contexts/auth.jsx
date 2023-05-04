import { createContext, useEffect, useState } from "react"
import userService from '../Services/userService'

export const AuthContext = createContext({})


export default function AuthProvider({ children }) {
    const [user, setUser] = useState();
    const [usersStorage, setUsersStorage] = useState();
    // const [userToken, setUserToken] = useState();
    const { getUsers, setUsers } = userService()

    const usuariosGet = async () => {
        await getUsers().then(async res => {
            const response = res
            await setUsersStorage(response)
        })
    }

    const usuariosSet = async (body) => {
        const resp = await setUsers(body)

        console.log(resp)
    }

    useEffect(() => {
        usuariosGet();

        // Primeiro verificamos no local storage se tem algum token e se tem usuários
        // const usersStorage = localStorage.getItem('users_db');
        const userToken = localStorage.getItem('user_token');

        console.log(JSON.stringify(userToken), "TOKEN")

        //Se tiver token e algum usuário cadastrado
        if (userToken && usersStorage) {
            // Eu verifico, se o algum usuário cadastrado tem o mesmo token que o usuário logado 
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.email === userToken.email
            )
            //se for o mesmo setamos o valor do usuário no estado de usuário.
            if (hasUser) setUser(hasUser[0]);
        }

    }, [])

    console.log(usersStorage)
    // console.log(userToken)

    const signin = (email, password) => {
        //aqui vou fazer uma requisição para o nossa API json server
        // const userStorage = JSON.parse(localStorage.getItem('users_db'))
        usuariosGet();

        const hasUser = usersStorage?.filter(user => user.email === email)

        if (hasUser?.length) {
            if (hasUser[0].email === email && hasUser[0].password === password) {
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem('user_token', JSON.stringify({ email, token }))
                setUser({ email, token })
                return;
            } else {
                return "E-mail ou senha incorretos"
            }
        } else {
            return "Usuário não cadastrado";
        }
    }

    const signup = (email, password) => {
        //aqui vou fazer uma requisição para o nossa API json server
        // const userStorage = JSON.parse(localStorage.getItem("users_db"))

        usuariosGet();

        // if (!usersStorage) {
        //     localStorage.setItem("users_db", JSON.stringify([]))
        // }

        console.log(usersStorage)

        const hasUser = usersStorage?.filter((user) => user.email === email)

        if (hasUser?.length) {
            return "Já tem uma conta com esse E-mail"
        }

        let newUser = {
            email, password
        }

        // if (usersStorage) {
        //     newUser = [...usersStorage, { email, password }];
        // } else {
        //     newUser = [{ email, password }]
        // }

        usuariosSet(newUser)

        // localStorage.setItem("users_db", JSON.stringify(newUser));

        return;
    }

    const signOut = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    }

    return <AuthContext.Provider
        value={{ user, signed: !!user, signin, signOut, signup }}
    >
        {children}
    </AuthContext.Provider>
}