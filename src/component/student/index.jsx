import React, { useEffect, useState } from 'react'
import { Wrapper } from './style'
import { Header } from '../header'
import { useNavigate } from 'react-router'
import { services } from '../../services'

export const Student = () => {

    const [quizes, setQuizes] = useState([])

    useEffect(() => {
        services.getQuiz()
        .then(({data}) => {
            setQuizes(data)
        })
        .catch(console.log)
    }, [])

    const navigate = useNavigate()

    const takeQuiz = (quiz) => {
        navigate(`/quiz?id=${quiz.id}`)
    }

  return (
    <Wrapper>
        <div className="quizes">
            {
                quizes.map(quiz => (
                    <div className='quiz' key={quiz.id} onClick={e => {takeQuiz(quiz)}}>
                        <img src={quiz.photo} alt={quiz.title} />
                        <div className="detail">
                            <h2>{quiz.title}</h2>
                            <p>{quiz.description}</p>
                            <input type="button" value="Take Quiz" />
                        </div>
                    </div>
                ))
            }
        </div>

    </Wrapper>
  )
}
