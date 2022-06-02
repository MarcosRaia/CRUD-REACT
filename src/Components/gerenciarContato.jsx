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
        <Link style={{marginLeft:"20px", marginTop:"2px"}} to="/"> <i style={{fontSize:'40px', color:'black'}} class="material-icons left">chevron_left</i></Link>
        </Nav>
        <div className="d-flex justify-content-center">
            <h2 className="">Adicionar Contato</h2>
        </div>
        <hr></hr>
        <Container style={{borderRadius:'5px', backgroundColor: '#9E9E9E'}} className="d-flex justify-content-center mt-5">
            <form style= {{marginTop:'20px', marginBottom:'20px'}} className="d-flex flex-column">

                <label> ID </label>
                <input
                    style={{borderRadius:'3px'}}
                    name="fname"
                    onChange={(e) => setId(e.target.value)}
                    placeholder='ID'
                    className="p-2 mb-3" />

                <label> Primeiro Nome </label>
                <input
                    style={{borderRadius:'3px'}} 
                    name="fname"
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Primeiro Nome' 
                    className="p-2 mb-3"/>

                <label> Email </label>
                <input
                    style={{borderRadius:'3px'}}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                    className="p-2 mb-3" />

                <label> Idade </label>
                <input
                    style={{borderRadius:'3px'}}
                    name="idade"
                    onChange={(e) => setIdade(e.target.value)}
                    placeholder='Idade' 
                    className="p-2"/>

                <button 
                style={{borderRadius:'5px', margin:'8px auto auto auto', width:'40%'}} 
                className="waves-effect waves-light btn-small" 
                type="submit" 
                onClick={EnviarAPI}><i style={{paddingBottom:'3px'}} class="material-icons left">check</i></button>
            </form>
        </Container>

    </>
}

export default Gerenciar;