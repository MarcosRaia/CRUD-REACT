import React, { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import {Link} from "react-router-dom"
function Gerenciar() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState('');
    const [id, setId] = useState('');


    const EnviarAPI = (e) => {
        e.preventDefault();
        const contact = { id ,name, email, idade };
        fetch('http://localhost:3030/contacts', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contact)
        }).then(() => {
            console.log("Added");
        })

    }

    return <>
        <Nav>
            <Link style={{marginLeft:"20px", marginTop:"2px"}} to="/">voltar</Link>
        </Nav>
        <Container className="d-flex justify-content-center mt-5">
            <form className="d-flex flex-column">

                <label> ID </label>
                <input name="fname"
                    onChange={(e) => setId(e.target.value)}
                    placeholder='ID'
                    className="p-2 mb-3" />

                <label> Primeiro Nome </label>
                <input name="fname"
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Primeiro Nome' 
                    className="p-2 mb-3"/>

                <label> Email </label>
                <input name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                    className="p-2 mb-3" />

                <label> Idade </label>
                <input name="idade"
                    onChange={(e) => setIdade(e.target.value)}
                    placeholder='Idade' 
                    className="p-2"/>

                <button style={{borderRadius:'5px', marginTop:'20px', width:'40%', margin:'auto'}} className="p-2" type="submit" onClick={EnviarAPI}>Enviar</button>
            </form>
        </Container>

    </>
}

export default Gerenciar;