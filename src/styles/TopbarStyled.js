import styled from "styled-components";


export const MainTopbar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: .25rem .75rem;
    width: 100%;
    height: 60px;
    background-color: white;
    filter: drop-shadow(0px 1px 3px rgba(0,0,0,0.200));
`

export const LogoTopbar = styled.div`
    display: grid;
    place-items: center;
    a{
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 5;
    }
`
export const ContentTopbar = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`
export const LinksTopbar = styled.ul`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 3px;
    width: 100%;
    height: 100%;
    list-style: none;
    padding: 0;
    margin-left: 2%;
`
export const LinkTopbar = styled.li`
    display: flex;
    align-items: center;
    height: 100%;
    padding: .25rem;
    a{
        font-size: larger;
        :hover{
            border-bottom: solid 3px #00135b;
        }
    }
`