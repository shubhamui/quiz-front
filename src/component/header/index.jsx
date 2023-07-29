import React from 'react'
import { Wrapper } from './style'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'


export const Header = () => {

  const navigate = useNavigate()

  return (
    <Wrapper>
        <div className="inner">
          <Link to="/"><img src="https://codeup.in/images/codeup-logo.png" alt="Codeup.in" /></Link>
          <nav>
            <ul>
              <li>
                <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="User" onClick={e => navigate('/profile')} />
              </li>
            </ul>
          </nav>
        </div>
    </Wrapper>
  )
}
