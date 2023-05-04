import './Signup.css'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Form from '../../components/Form/Form'
import Container from '../../components/Container/Container'
import Text from '../../components/Text/Text'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Content from '../../components/Content/Content'
import useAuth from '../../hooks/useAuth'

export default function Signup() {
    const { signup } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [emailConf, setEmailConf] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConf, setPasswordConf] = useState("")
    const [error, setError] = useState("")
    const [sucess, setSucess] = useState("")

    const handleSignup = (e) => {
        e.preventDefault();

        const fieldError = validateFields();

        if (fieldError) return

        const res = signup(email, password)

        if (res) {
            setError(res)
            clearForm()
            return
        }

        setSucess("Usuário Cadastrado com sucesso")

        setTimeout(() => {
            navigate("/");
        }, 1500)

    }

    const validateFields = () => {
        setTimeout(() => {
            setError("")
        }, 3000);

        if (!email | !emailConf | !password | !passwordConf) {
            setError("Preencha todos os campos !")
            return true
        }

        if (email !== emailConf) {
            setError("Os e-mails não são iguais !")
            return true
        }

        if (password !== passwordConf) {
            setError("As senhas não são iguais !")
            return true
        }
    }

    const clearForm = () => {
        setEmail("")
        setEmailConf("")
        setPassword("")
        setPasswordConf("")
    }

    return (
        <Form width="500px" handleSubmit={handleSignup}>
            <Container direction="column" align="center" justify="between" wrap="wrap" gap="16" width="100%">
                {sucess
                    ? <Text element="p" color="sucess" value={sucess} />
                    : ''
                }
                <Text element="h2" className="title" color="dark-title" value="Cadastre-se" />
                <Input type="email" value={email} placeholder="Digite seu email ..." width="100%" handleChange={(e) => setEmail(e.target.value)} />
                <Input type="email" value={emailConf} placeholder="Confirme seu email ..." width="100%" handleChange={(e) => setEmailConf(e.target.value)} />
                <Input type="password" value={password} placeholder="Digite sua senha ..." width="100%" handleChange={(e) => setPassword(e.target.value)} />
                <Input type="password" value={passwordConf} placeholder="Confirme sua senha ..." width="100%" handleChange={(e) => setPasswordConf(e.target.value)} />
                <Button style="dark" width="100%">Entrar</Button>
                <Content>
                    <Text element="span" className="label" color="grayish" value="Voltar para " />
                    <Text element="a" className="paragraph" color="dark-title" to="/signin" value="Login" />
                </Content>
                {error
                    ? <Text element="span" className="paragraph" color="error" value={error} />
                    : ''
                }
            </Container>
        </Form>
    )
}
