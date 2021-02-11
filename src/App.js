import Menu from './Components/Menu'
import Rotas from './Rotas';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './App.css';
import Footer from './Components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Menu />
        </header>
        <main>
          <Container fluid>
            <Rotas />
          </Container>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
