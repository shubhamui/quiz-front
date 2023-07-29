import React from 'react'
import { Wrapper } from './style'
import { Link } from 'react-router-dom'

export const Registration = () => {
  return (
    <Wrapper>
        <form action="">
            <h1>Registration</h1>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Contact' />
            <input type="password" placeholder='Password' name="" id="" />
            <input type="password" placeholder='Confirm Password' name="" id="" />
            <input type="button" value="Registration" />
            <Link to="/">Already have an account ? Login here</Link>
        </form>
    </Wrapper>
  )
}
