import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import PokemonList from './components/MiApi';
import Footer from './components/Footer';


function App() {
  return (<>
    <Container >
      <Row className=''>
        <Col className='bg-white'>
          <h1 className='p-5 m-auto bg-dark text-white d-flex justify-content-center'>Lista de Pokémon</h1>
          <p className='text-center p-3 bg-white'><b>Pokémon es una franquicia de videojuegos que comenzó siendo de tipo RPG para las consolas de Nintendo creada por Satoshi Tajiri en 1995. Esta es la lista de Pokémon de la region de Kanto ordenada según el número en la Pokédex Nacional.</b></p>
        </Col>
        <PokemonList className='col-12 btn ' />
      </Row>
      
      
    </Container>
    <Footer />
  </>
  );
}

export default App;

