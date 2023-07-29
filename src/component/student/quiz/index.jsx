import React, { useEffect, useState } from 'react'
import { Wrapper } from './style'
import { useSearchParams } from 'react-router-dom'
import { services } from '../../../services'

export const Quiz = () => {

    const [questions, setQuestions] = useState([{
        ques : '',
        ans : []
    }])
    const [selected, setSelected] = useState(0)
    const [answers, setAnswers] = useState({})
    const [params] = useSearchParams()
    const id = params.get('id')
    useEffect(() => {
        services.getQuestions(id)
        .then(({data}) => {
            setQuestions(data)
        })
        .catch(console.log)
    }, [])

    const updateAnswer = (quesId, index) => {
        const newAnswers = {...answers}
        newAnswers[quesId] = index
        setAnswers(newAnswers)
    }

    const submit = () => {
        services.evaluate({
            quizId : id,
            answers,
            userId : 'user-1'
        })
        .then(({data}) => {
            debugger
        })
        .catch(console.log)
    }

  return (
    <Wrapper>
        <div className='indexes'>
            {
                questions.map((ques, index) => (
                    <div className={index == selected ? "index active" : "index"} onClick={e => setSelected(index)}>
                        {ques.id}
                    </div>
                ))
            }
            <div className={"index"} onClick={submit}>Submit</div>
        </div>
        <h1 className="ques">{ questions[selected].ques }</h1>
        <div className="ans">
            {
                questions[selected].ans.map((ans,index) => (
                    <label key={questions[selected].ques + ans + index} className="choice">
                        <input type="radio" name={questions[selected].id} onChange={e => updateAnswer(questions[selected].id,index)} />{ans}
                    </label>
                ))
            }
            </div>
    </Wrapper>
  )
}
