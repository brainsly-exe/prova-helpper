import React, { useState, useEffect } from 'react'
import { FiEdit, FiTrash2 } from 'react-icons/fi'

import FormEditModal from '../FormEditModal'

import api from '../../services/api'

import './styles.css'

function ClientItem() {
    const [isModalVisible, setIsModalVisible] = useState(false)

    const [clients, setClients] = useState([])

    useEffect(() => {
        async function loadClients() {
            const response = await api.get('/clients')

            setClients(response.data)
        }

        loadClients()
    },[])

    return (
        <section className="container-clients">
            <h1>CLIENTES</h1>
            <ul>
                {clients.map(client => (
                    <li>
                    <div className="infos">
                        <p><span>Nome:</span> {client.nome}</p>
                        <p><span>E-mail:</span> {client.email}</p>
                        <p><span>Telefone:</span> {client.telefone}</p>
                        <p><span>CEP:</span> {client.cep}</p>
                        <p><span>Logradouro:</span> {client.logradouro}</p>
                        <p><span>Número:</span> {client.numero}</p>
                        <p><span>Bairro:</span> {client.bairro}</p>
                        <p><span>Cidade:</span> {client.cidade}</p>
                        <p><span>Estado:</span> {client.estado}</p>
                    </div>

                    <div className="button-group">
                        <button title="Editar" onClick={() => setIsModalVisible(true)}>
                            <FiEdit size={18} />
                        </button>
                        {isModalVisible ? <FormEditModal client={client} onClose={() => setIsModalVisible(false)} /> : null}

                        <button title="Apagar">
                            <FiTrash2 size={18} />
                        </button>
                    </div>
                </li>
                ))}
            </ul>

        
        </section>
    )
}

export default ClientItem