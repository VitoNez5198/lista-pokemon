import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';


function App() {
  return (<>
    <Container >
      <Row className='bg-white' >
        <Col>
          <h1 className='p-5 m-auto bg-dark text-white d-flex justify-content-center'>Lista de Pokémon</h1>
          <p>Pokémon es una franquicia de videojuegos que comenzó siendo de tipo RPG para las consolas de Nintendo creada por Satoshi Tajiri en 1995. Esta es la lista de Pokémon completa ordenada según el número en la Pokédex Nacional. En esta se muestra el nombre del Pokémon en español.</p>
          <Button variant="primary">Learn More</Button>
        </Col>
      </Row>
    </Container>
    <footer className='bg-dark text-white p-5 justify-content-center '>      
    Made with love by&nbsp;<a href='https://github.com/VitoNez5198'> VitoNez </a>.&nbsp;This website is not produced, endorsed, supported, or affiliated with Nintendo or The Pokémon Company. Pokémon and Pokémon character names are trademarks of Nintendo.</footer>
  </>
  );
}

export default App;

