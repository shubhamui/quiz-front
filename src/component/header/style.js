import styled from "styled-components"

export const Wrapper = styled.header`
    background : #0B2239;
    padding : 10px 0;
    .inner{
        display : flex;
        align-items : center;
        justify-content : space-between;
        >a>img{
            height : 50px;
        }
        nav{
            ul{
                li{
                    img{
                        height : 50px;
                    }
                }
            }
        }
    }
`