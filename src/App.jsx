import { ThemeProvider } from 'styled-components'
import { Container } from './components/styles/Container.styled'
import { GlobalStyles } from './components/styles/Global'
import { Header } from './components/Header'
import { Card } from './components/Card'
import { Footer } from './components/Footer'
import content from './content'
import './App.css'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px'
}

function App() {

  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
      <Header/>
      <Container>
        {content.map((item, index) => (
          <Card key={index} item={item}/>
        ))}
      </Container>
      <Footer/>
      </>
    </ThemeProvider>
  )
}

export default App
