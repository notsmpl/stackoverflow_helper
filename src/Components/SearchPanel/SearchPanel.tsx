import {styled} from 'styled-components'
import {useStore} from "effector-react";
import { $inputValue, getSearchValue } from '../../store/InputStore/InputStore';
import { getSearchFX } from '../../store/contentStore/dataStore'; 


const Input = styled.input`
   width:500px;
   padding-left: 10px;
   border: solid 1px grey;
   border-radius: 10px;
   box-shadow:0 0 15px 4px rgba(0,0,0,0.06);

   &:focus{
    outline: none;
   }
`
const Btn = styled.button`
    width:100px;
    
    border: solid 1px;
    border-radius: 10px;
    margin-left: 5px;
    
    &:hover{
        background-color: lightblue;
    }
`
const SearchPanel = () => {
    const searchValue = useStore($inputValue)
 

    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        getSearchValue(e.target.value)
    };

    const onSearch = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        getSearchFX(searchValue);
    };

    return (
      <form>
        <Input
          type="text"
          placeholder="What are u looking for?"
          onChange={onChangeHandler}
        />
        <Btn onClick={onSearch}>Search</Btn>
      </form>
    );
};

export default SearchPanel;