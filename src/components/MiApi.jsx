import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, InputGroup, FormControl, Button, CardImg } from "react-bootstrap";


const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState({});
    const [searchTerm, setSearchTerm] = useState("");
    const [sortAsc, setSortAsc] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
            const data = await result.json();
            const pokemonArray = await Promise.all(
                data.results.map(async pokemon => {
                    const pokemonData = await fetch(pokemon.url);
                    const pokemonInfo = await pokemonData.json();
                    return {
                        name: pokemon.name,
                        url: pokemon.url,
                        image: pokemonInfo.sprites.front_default
                    };
                })
            );
            setPokemonList(pokemonArray);
            console.log(pokemonArray)
        };
        fetchData();
    }, []);

    //Botón Sorting//
    
    const sortPokemonList = () => {
        setSortAsc(!sortAsc);
        setPokemonList(pokemonList.sort((a, b) => {
            if (sortAsc) {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
            } else {
                if (a.name < b.name) return 1;
                if (a.name > b.name) return -1;
            }
            return 0;
        }));
    };

    return (
        <>
            <Container>
                <Row className="mb-5">
                    <Form className=" py-4 bg-white">
                        <InputGroup className="mb-4 p-3 ">
                            <FormControl
                                placeholder="Buscar Pokémon"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </InputGroup>
                        <p className="bg-white p-2">Ordenar por Nombre: <Button variant="primary " onClick={() => {
                            sortPokemonList();
                            // console.log(pokemonList)
                        }}>
                            {sortAsc ? "Ascendente" : "Descendente"}
                        </Button></p>

                    </Form>

                    <Col md={4}>

                        {pokemonList

                            .filter((pokemon) => pokemon.name.includes(searchTerm))
                            .slice(0, Math.ceil(pokemonList.length / 3))
                            .map((pokemon, index) => (
                                <Card className="my-2" key={index} onClick={() => {
                                    setSelectedPokemon(pokemon);
                                    console.log(pokemon);
                                }}>
                                    <Card.Body className="m-1 justify-content-center text-center ">
                                        <img src={pokemon.image} alt={pokemon.name} />
                                        <Card.Title>{pokemon.name}</Card.Title>
                                    </Card.Body>
                                </Card>
                            ))};


                    </Col>
                    <Col md={4}>
                        {pokemonList
                            .filter(pokemon => pokemon.name.includes(searchTerm))
                            .slice(Math.ceil(pokemonList.length / 3), 2 * Math.ceil(pokemonList.length / 3))
                            .map((pokemon, index) => (
                                <Card className="my-2" key={index} onClick={() => {setSelectedPokemon(pokemon);
                                    console.log(pokemon);}}>
                                    <Card.Body className="m-1 justify-content-center text-center">
                                    <img src={pokemon.image} alt={pokemon.name} />
                                        <Card.Title>{pokemon.name}</Card.Title>
                                    </Card.Body>
                                </Card>
                            ))}
                    </Col>
                    <Col md={4}>
                        {pokemonList
                            .filter(pokemon => pokemon.name.includes(searchTerm))
                            .slice(2 * Math.ceil(pokemonList.length / 3))
                            .map((pokemon, index) => (
                                <Card className="my-2" key={index} onClick={() =>  {setSelectedPokemon(pokemon);
                                    console.log(pokemon);}}>
                                    <Card.Body className="m-1 justify-content-center text-center">
                                    <img src={pokemon.image} alt={pokemon.name} />
                                        <Card.Title>{pokemon.name}</Card.Title>
                                    </Card.Body>
                                </Card>
                            ))}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default PokemonList;