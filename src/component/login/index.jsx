import React, { useState } from 'react'
import { Wrapper } from './style'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { services } from '../../services'

export const Login = ({setLoggedInUser}) => {

    const navigate = useNavigate()
    const [contact, setContact] = useState()
    const [password, setPassword] = useState()

    const login = (e) => {
        e.target.disabled = true
        e.target.value = "Loggin In ..."
        services.login({
            contact, password
        })
        .then(({data}) => {
            setLoggedInUser({
                name : data.name,
                contact : data.contact,
                authenticationToken : data.authenticationToken
            })
            navigate('/')
        })
        .catch(err => {
            debugger
        })
        .finally(_ => {
            setContact('')
            setPassword('')
            e.target.value = "Login"
        })
    }

  return (
    <Wrapper>
        <form action="">
            <h1>Login</h1>
            <input type="text" placeholder='Contact' value={contact} onChange={e => setContact(e.target.value)} />
            <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
            <input type="button" value="Login" onClick={login} />
            <Link to="/registration">Create an account</Link>
        </form>
    </Wrapper>
  )
}
