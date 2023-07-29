import { styled } from "styled-components";

export const Wrapper = styled.div`

    background : #f2f2f2;
    height : 100vh;

    .certificate{
        display : flex;
        background : #fff;
        box-shadow : 2px 2px 2px #ccc;
        margin : 20px auto;
        gap : 20px;
        align-items : center;
        padding : 0 30px;
        >img{
            height : 100px;
        }
        .right {
            flex : 1
        }
        input{
            background : green;
            color : #fff;
            font-size : bolder;
            padding : 10px 30px;
            border : none;
            border-radius : 3px;
        }
    }
    
`