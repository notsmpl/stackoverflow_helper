import {styled} from 'styled-components'
import SearchPanel from '../SearchPanel';

const HeaderBox = styled.header`
   display:block;
   top: 0;
   height:50px;
   border-bottom: solid 1px gray;
   display: flex;
   justify-content: center;
   align-items: center;
`

const Header = () => {
    return(
        <HeaderBox>
            <p className='pr-5'>Stackoverflow Helper</p>
            <SearchPanel />
        </HeaderBox>
    );
};

export default Header;