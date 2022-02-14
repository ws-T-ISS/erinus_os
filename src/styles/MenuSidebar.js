import styled from 'styled-components'

export const Sidebar = styled.aside`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: .75rem;
    padding-top: 1.5rem;
    top: 0;
    bottom: 0;
    width: 40%;
    max-width: 350px;
    color: #00135b;
    background-color: #fff;
    transform: translateX(${props => props.show ? '0px' : '-350px'});
    animation: ${props => props.show ? 'slide-from-left' : 'slide-to-left'} 800ms;
    z-index: 99999;
    @keyframes slide-from-left {
        from{
            transform: translateX(-350px);
        }to{
            transform: translateX(0px)
        }
    }

    @keyframes slide-to-left{
        from{
            transform: translateX(0px);
        }to{
            transform: translateX(-350px)
        }
    }

    @media screen and (max-width: 428px){
        width: 100%;
        max-width: none;
    }
    @media (min-width: 428px) and (max-width: 768px){
        width: 50%;
        max-width: none;
    }
`

export const CloseSidebar = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background-color: white !important;
`

export const AvatarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const OperatorName = styled.span`
    display: block;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    color: inherit;
    text-align: center;
    font-size: 21pt;
    font-weight: 500;
`

export const ListItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const ListOption = styled.button`
    width: 100%;
    padding: .5rem;
    background-color: #F4F5F6;
    border-left: 5px solid;
    border-color: #00135b;
    font-size: 14pt;
    :hover{
        transform: scale(1.05);
    }
`

export const MenuFooter = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    span.description-version{
        display: block;
        font-size: 14pt;
        color: inherit;
    }
`

