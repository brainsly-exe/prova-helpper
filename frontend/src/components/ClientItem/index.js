import React, { useState, useEffect } from 'react'
import { FiEdit, FiTrash2 } from 'react-icons/fi'

import FormEditModal from '../FormEditModal'

import api from '../../services/api'

import './styles.css'

function ClientItem({ refresh }) {
    const [isModalVisible, setIsModalVisible] = useState(false)

    const [clients, setClients] = useState([])
    
    // SETA O USUÁRIO SELECIONADO PARA EDIÇÃO
    const [selectedClient, setSelectedClient] = useState('')

    // LISTAGEM DOS CLIENTES
    useEffect(() => {
        async function loadClients() {
            const response = await api.get('/clients')

            setClients(response.data)
        }

        loadClients()
    },[refresh, isModalVisible])

    // DELETAR CLIENTE
    async function handleDeleteClient(id) {
        try {
            await api.delete(`/clients/${id}`)
    
            setClients(clients.filter(client => client._id !== id))

            alert('Cliente deletado com sucesso.')
        
        }catch(err) {
            alert('Ocorreu um erro ao deletar o cliente, tente novamente.')
        }
    }

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
                        <button title="Editar" onClick={() => setIsModalVisible(true)} onMouseDown={() => setSelectedClient(client)} >
                            <FiEdit size={18} />
                        </button>
                        {isModalVisible ? <FormEditModal client={selectedClient} onClose={() => setIsModalVisible(false)} /> : null}

                        <button title="Apagar" onClick={() => handleDeleteClient(client._id)}>
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