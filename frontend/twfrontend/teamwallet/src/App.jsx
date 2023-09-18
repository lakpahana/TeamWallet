import {Container} from '@mui/material'	
import OnBoardingPage from './components/OnBoarding'
function App() {

  return (
    <>
      <Container maxWidth="sm" sx={
        {
          border: '1px solid red',          
          height: '100vh',
          my: -1,
          padding: 0,
          width: '100%',
        }
      }>
        <OnBoardingPage />
      </Container>
    </>
  )
}

export default App
