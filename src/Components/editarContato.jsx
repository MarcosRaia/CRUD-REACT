import React, {useState} from "react";
import {Container} from "react-bootstrap";
import '../styles/style.css'
function Editar() {
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
        {/* Botão Trigger Modal*/}
        <button style={{ marginRight: '5px' }} data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="align-index material-icons left">edit</i>
        </button>

        {/* Modal */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Editar Contato</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <Container style={{ borderRadius: '5px', backgroundColor: '#9E9E9E' }} className="d-flex justify-content-center mt-5">
                            <form style={{ marginTop: '20px', marginBottom: '20px' }} className="d-flex flex-column">

                                <label> ID </label>
                                <input
                                    style={{ borderRadius: '3px' }}
                                    name="fname"
                                    onChange={(e) => setId(e.target.value)}
                                    placeholder='ID'
                                    className="p-2 mb-3" />

                                <label> Primeiro Nome </label>
                                <input
                                    style={{ borderRadius: '3px' }}
                                    name="fname"
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder='Primeiro Nome'
                                    className="p-2 mb-3" />

                                <label> Email </label>
                                <input
                                    style={{ borderRadius: '3px' }}
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Email'
                                    className="p-2 mb-3" />

                                <label> Idade </label>
                                <input
                                    style={{ borderRadius: '3px' }}
                                    name="idade"
                                    onChange={(e) => setIdade(e.target.value)}
                                    placeholder='Idade'
                                    className="p-2" />

                                <button
                                    style={{ borderRadius: '5px', margin: '8px auto auto auto', width: '40%' }}
                                    className="waves-effect waves-light btn-small"
                                    type="submit"
                                    onClick={EnviarAPI}><i style={{ paddingBottom: '3px' }} class="material-icons left">check</i></button>
                            </form>
                        </Container>
                    </div>
                    <div class="modal-footer">
                        <button data-bs-dismiss="modal"><i class="align-index material-icons left">close</i></button>
                        <button ><i class="align-index material-icons left">check</i></button>
                    </div>
                </div>
            </div>
        </div>


    </>
}

export default Editar;