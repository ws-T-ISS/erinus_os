import styled from 'styled-components'


export const Background = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    form{
        width: 25%;
        @media screen and (max-width: 768px) {
            width: 50%;
        }
        @media screen and (max-width: 460px) {
            width: 80%;
        }
    }
`

