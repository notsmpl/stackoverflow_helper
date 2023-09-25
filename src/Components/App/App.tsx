import {useEffect} from 'react'

import Container from '../../Styles/Container';
import Header from '../Header';
import { getDataFX} from '../../store/contentStore/dataStore';
import QuestionsList from '../QuestionsList';


const App = () => {
  
  useEffect(()=>{
    getDataFX()
  })

  return (
    <>
    <Header />
      <Container>
        <QuestionsList />
      </Container>
    </>
    
  );
}

export default App;
