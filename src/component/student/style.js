import styled from "styled-components"

export const Wrapper = styled.section`
    .quizes{
        display : flex;
        justify-content : center;
        gap : 20px;
        margin : 30px auto;
        .quiz{
            cursor : pointer;
            width : 400px;
            box-shadow : 2px 2px 5px #ccc;
            padding : 30px;
            box-sizing : border-box;
            display : flex;
            flex-direction : column;
            justify-content : center;
            align-items : center;
            img{
                height : 300px;
            }
            h2{
                margin-top : 20px;
            }
            p{
                margin : 10px 0;
                min-height : 5rem;
            }
            input{
                background : #2251ff;
                color : #fff;
                padding : 10px 30px;
                font-weight : bold;
                border: none;
                cursor : pointer;
                border-radius : 3px;
            }
        }
    }
`