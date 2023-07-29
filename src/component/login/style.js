import styled from "styled-components"

export const Wrapper = styled.section`
    display : flex;
    align-items : center;
    justify-content : center;
    background : #f2f2f2;
    height : 100vh;
    form{
        width : 300px;
        padding : 30px;
        background : #fff;
        box-shadow : 2px 2px 2px #ccc;
        border-radius : 10px;
        h1{
            text-align : center;
            padding-bottom : 20px;
        }
        input{
            width : 100%;
            box-sizing : border-box;
            padding : 10px;
            margin : 5px 0;
            &[type=button]{
                width : 150px;
                display : block;
                margin : auto;
                margin-top : 20px;
            }
        }
        a{
            display : block;
            margin : auto;
            margin-top : 20px;
            text-align : center;

        }
    }
`