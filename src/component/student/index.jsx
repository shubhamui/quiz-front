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

    // const quizes = [{
    //     id : 1,
    //     title : 'HTML',
    //     description : 'HTML is a web language. Consist of 20 questions.',
    //     guidelines : 'Mark 1 when correct whereas -1 when wrong',
    //     subHeading : 'SKIT HTML QUIZ',
    //     photo : 'https://cdn-icons-png.flaticon.com/512/1532/1532556.png'
    // },{
    //     id : 2,
    //     title : 'CSS',
    //     description : 'CSS is a web language. Consist of 20 questions.',
    //     guidelines : 'Mark 1 when correct whereas -1 when wrong',
    //     subHeading : 'SKIT CSS QUIZ',
    //     photo : 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png'
    // },{
    //     id : 3,
    //     title : 'JS',
    //     description : 'JS is a web language. Consist of 20 questions.',
    //     guidelines : 'Mark 1 when correct whereas -1 when wrong',
    //     subHeading : 'SKIT JS QUIZ',
    //     photo : 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png'
    // },{
    //     id : 4,
    //     title : 'SCSS',
    //     description : 'SCSS is a web language. Consist of 20 questions.',
    //     guidelines : 'Mark 1 when correct whereas -1 when wrong',
    //     subHeading : 'SKIT SCSS QUIZ',
    //     photo : 'https://cdn-icons-png.flaticon.com/512/5968/5968358.png'
    // }]

    const navigate = useNavigate()

    const takeQuiz = (quiz) => {
        navigate(`/quiz?id=${quiz.id}`)
    }

  return (
    <Wrapper>
        <Header />

        <div className="quizes">
            {
                quizes.map(quiz => (
                    <div className='quiz' key={quiz.id} onClick={e => {takeQuiz(quiz)}}>
                        <img src={quiz.photo} alt={quiz.title} />
                        <h2>{quiz.title}</h2>
                        <p>{quiz.description}</p>
                        <input type="button" value="Take Quiz" />
                    </div>
                ))
            }
        </div>

    </Wrapper>
  )
}
