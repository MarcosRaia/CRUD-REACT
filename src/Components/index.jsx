import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Card, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"
import Header from "./header";

import '../styles/style.scss';
function Home() {
    const [contatos, setContatos] = useState([]);

    {/* Listar Contatos */ }
    useEffect(() => {
        axios.get('http://localhost:3030/contacts')
            .then(res => {
                setContatos(res.data)
            })
            .catch(error => console.log(error))
    }, [])

    {/* DeletarContato */ }
    function deletePost(id) {
        axios.delete(`http://localhost:3030/contacts/${id}`)
        setContatos(contatos.filter(contato => contato.id !== id))
    }
    return <>
        <Header />
        <Container style={{ backgroundColor: '#9E9E9E', borderRadius: '5px' }}>

            {/* HEADER */}
            <header className="d-flex justify-content-between">
                <h2 style={{ marginTop: '8px' }} >Lista de Contatos</h2>
                <Nav>
                    <Link to="/gerenciarContato"> Gerenciar</Link>
                </Nav>
            </header>

            {/* CONTENT*/}
            {contatos.map(contact => (
                <Card className="m-2 mb-2">

                    <Card.Body>
                        <div className="d-flex justify-content-end">
                            <button onClick={() => deletePost(contact.id)}>deletar</button>
                        </div>
                        <ul>
                            <li> Nome: {contact.name} <hr /> </li>
                            <li> Email: {contact.email}<hr /> </li>
                            <li> Idade: {contact.idade} </li>
                        </ul>


                    </Card.Body>
                </Card>
            ))}

        </Container>

    </>
}

export default Home;