import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Button, Card } from "react-bootstrap";
import Header from "./header";
import Editar from "./Modal/editarModal";
import '../styles/style.scss';
function Home() {
    const [contatos, setContatos] = useState([]);
    const [showModal, setShowModal] = useState(false);

    //Pegar Contatos
    useEffect(() => {
        axios.get('http://localhost:3030/contacts')
            .then(res => {
                setContatos(res.data)
            })
            .catch(error => console.log(error))
    }, [])

    return <>
        <Header />
        <Container style={{ backgroundColor: '#9E9E9E', borderRadius: '5px' }}>

            {/* HEADER */}
            <header className="d-flex justify-content-between">
                <h2 style={{ marginTop: '8px' }} >Lista de Contatos</h2>
                <button
                    onClick={() => setShowModal(true)}
                    style={{ marginTop: '8px', marginBottom: '8px' }}
                    variant="success">Editar Contatos
                </button>
                {showModal ? <Editar /> : null}
            </header>

            {/* CONTENT*/}
            {contatos.map(contact => (
                <Card className="m-2 mb-2">
                    <Card.Body> {contact.name} </Card.Body>
                </Card>
            ))}

        </Container>

    </>
}

export default Home;