import {FC} from 'react'
import styled from 'styled-components'

type ContainerProps = string | JSX.Element | JSX.Element[] 
interface IContainer{
    children: ContainerProps 
}

const ContainerWrap = styled.div`
    min-width: 1200px;
    min-height: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
`

const Container: FC<IContainer> = ({children}) => {
    return(
        <ContainerWrap>{children}</ContainerWrap>
    )
};

export default Container;