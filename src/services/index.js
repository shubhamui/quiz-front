import axios from "axios";

const BASE_API_URL = `http://localhost:5000/api/`
export const services = {
    registration : payload => axios.post(`${BASE_API_URL}user/add`, payload),
    login : payload => axios.post(`${BASE_API_URL}user/login`, payload),
    getCertificates : id => axios.get(`${BASE_API_URL}user/getCertificates/${id}`),
    getQuiz : _ => axios.get(`${BASE_API_URL}quiz/read`),
    getQuestions : quizId => axios.get(`${BASE_API_URL}quiz/getQuestions/${quizId}`),
    evaluate : payload => axios.post(`${BASE_API_URL}quiz/evaluate`, payload) 
}