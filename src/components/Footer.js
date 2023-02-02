import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container fluid className="bg-dark text-white fixed-bottom">
            <Row>
                <Col>
                    <p className='bg-dark text-white mt-2 justify-content-center text-center'>
                        Made with love by&nbsp;<a href='https://github.com/VitoNez5198'> VitoNez </a>.&nbsp;This website is not produced, endorsed, supported, or affiliated with Nintendo or The Pokémon Company. Pokémon and Pokémon character names are trademarks of Nintendo.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;