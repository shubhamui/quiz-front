import styled from "styled-components"

export const Wrapper = styled.section`

    margin : 100px auto;
    width : 60%;
    min-width : 400px;

    .indexes{
        display : flex;
        .index{
            border : solid thin #ccc;
            padding : 10px 20px;
            cursor : pointer;
            transition : 0.3s;
            text-transform : capitalize;
            &.active{
                color : #2251ff;
                border-bottom : none;
            }
        }
    }

    label{
        padding : 10px;
        display : block;
        input{
            margin-right : 10px;
            zoom : 1.5;
            vertical-align : middle;
        }
    }
`