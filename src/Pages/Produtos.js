import React, { useState, useEffect } from 'react'
import { Container, Row, ListGroup, Col } from 'react-bootstrap';

import Produto from '../Components/Produto';

export default function Produtos() {
        
    const [produtos, setProdutos] = useState([]);

        useEffect( async () => {
                const answer  = await fetch('http://localhost:3333/produtos')
                const data = await answer.json()
                setProdutos(data);
                console.log(data);
        }, []);

        return (

            <Container className="d-flex justify-content-start">
                <Col sm={3} >
                    <ListGroup >
                        <ListGroup.Item as="li" active action onclick="exibirTodos()"  variant="success">
                            Todas as marcas (12)
                        </ListGroup.Item>
                        <ListGroup.Item action onclick="filtrar('Motorola')" variant="success">
                            Motorola (5)
                        </ListGroup.Item>
                        <ListGroup.Item action onclick="filtrar('Nokia')" variant="success">
                            Nokia (3)
                        </ListGroup.Item>
                        <ListGroup.Item action onclick="filtrar('SonyEricsson')" variant="success">
                            SonyEricsson (3)
                        </ListGroup.Item>
                        <ListGroup.Item action onclick="filtrar('Siemens')" variant="success">
                            Siemens (1)
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
        

            <Row>
                { produtos && produtos.map(item => <Produto key={item.id} nome={item.nome} descricao={item.descricao} 
                preco={item.preco} imagem={item.imagem}/>)}
            </Row>

            </Container>
            
        )}


        
        