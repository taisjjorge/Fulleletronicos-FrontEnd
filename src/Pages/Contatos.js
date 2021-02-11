import { Container, Form , Col, Button } from 'react-bootstrap';


export default function Contato (){

    async function Cadastro(event){
        event.preventDefault()

        const answer = await fetch("http://localhost:3333/contato", {
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({  "nome":event.target.nome_cliente.value,
                                "email":event.target.email.value,
                                "cidade":event.target.cidade.value,
                                "uf":event.target.uf.value,
                                "telefone":event.target.telefone.value,
                                "mensagem":event.target.mensagem.value})})
                            
        const data = await answer.json()
        if (data){
            window.location.href = '/' 
    }
        console.log(data)
    }

    return(
        <Container>
            <Form onSubmit={Cadastro}>
                <h3 className="titulo-contato">Contato</h3>
                <Form.Row>
                    <Form.Group as={Col} controlId="nome_cliente">
                        <Form.Label>Nome: </Form.Label>
                        <Form.Control placeholder="Nome completo"  name="nome_cliente" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="email" >
                        <Form.Label>Email: </Form.Label>
                        <Form.Control  placeholder="exemplo@gmail.com" name="email" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="cidade" >
                            <Form.Label>Cidade </Form.Label>
                            <Form.Control  placeholder="ex.: Rio de Janeiro" name="cidade" />
                        </Form.Group>

                    <Form.Group as={Col} controlId="uf" >
                            <Form.Label>UF </Form.Label>
                            <Form.Control  placeholder="ex.: RJ" name="estado" />
                        </Form.Group>
                    
                    <Form.Group as={Col} controlId="telefone" >
                            <Form.Label>Celular </Form.Label>
                            <Form.Control  type="number" placeholder="(xx) xxxxx-xxxx" name="telefone" />
                        </Form.Group>
                </Form.Row>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Mensagem: </Form.Label>
                    <Form.Control as="textarea" rows={3} name="mensagem" />
                </Form.Group>
                <Button variant="primary" type="submit">Enviar</Button>
            </Form>
        </Container>

    );
}
