import {styled} from 'styled-components'
import SearchPanel from '../SearchPanel';
import { getDataFX } from '../../store/contentStore/dataStore';

const HeaderBox = styled.header`
   display:block;
   top: 0;
   height:50px;
   border-bottom: solid 1px gray;
   display: flex;
   justify-content: center;
   align-items: center;
`
const Logo = styled.p`
    padding-right: 15px;
    transition: 250ms;
    cursor:pointer;

    &:hover{
        font-size: 18px;
    }
`
const Header = () => {

    const onUpdate = (e: React.MouseEvent<HTMLElement>) => {
        getDataFX()
    }
    return(
        <HeaderBox>
            <Logo onClick={onUpdate}>Stackoverflow Helper</Logo>
            <SearchPanel />
        </HeaderBox>
    );
};

export default Header;