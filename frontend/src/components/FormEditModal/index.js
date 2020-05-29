import React, { useState } from 'react'
import { FiXCircle } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

function FormEditModal({client, id = 'modal', onClose = () => {} }) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cep, setCep] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [numero, setNumero] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const idClient = client._id

    // FUNÇÃO PARA FECHAR O MODAL CLICANDO FORA DELE
    function handleOutsideClick(e) {
        if (e.target.id === id) {
            onClose()
        }
    }

    // ATUALIZA OS DADOS DO CLIENTE
    async function handleUpdateClient(e) {
        e.preventDefault()
        
        try {
            const data = {
                nome,
                email,
                telefone,
                cep,
                logradouro,
                numero,
                bairro,
                cidade,
                estado
            }
    
            await api.put(`/clients/${idClient}`, data)
    
            alert('Cliente atualizado com sucesso.')
            
            onClose()
        
        }catch(err) {
            alert('Ocorreu um erro ao atualizar o cliente, tente novamente.')
        }
    }

    return (
        <div id="modal" className="modal" onClick={handleOutsideClick}>
            <div className="container">
                <button className="close-modal" onClick={onClose}>
                    <FiXCircle size={24} />
                </button>
                <div className="content">
                    <h1 className="title-form">Editar cliente</h1>

                    <form onSubmit={handleUpdateClient}>

                        <input
                        required
                        type="text" 
                        placeholder="Nome" 
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        />

                        <input
                        required
                        type="email" 
                        placeholder="E-mail" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />

                        <input
                        required
                        type="text" 
                        placeholder="Telefone" 
                        value={telefone}
                        onChange={e => setTelefone(e.target.value)}
                        />

                        <input
                        required
                        type="text" 
                        placeholder="CEP" 
                        value={cep}
                        onChange={e => setCep(e.target.value)}
                        />

                        <input
                        required
                        type="text" 
                        placeholder="Logradouro" 
                        value={logradouro}
                        onChange={e => setLogradouro(e.target.value)}
                        />

                        <input
                        required
                        type="text" 
                        placeholder="Número" 
                        value={numero}
                        onChange={e => setNumero(e.target.value)}
                        />

                        <input
                        required
                        type="text" 
                        placeholder="Bairro" 
                        value={bairro}
                        onChange={e => setBairro(e.target.value)}
                        />

                        <input
                        required
                        type="text" 
                        placeholder="Cidade" 
                        value={cidade}
                        onChange={e => setCidade(e.target.value)}
                        />

                        <input
                        required
                        type="text" 
                        placeholder="Estado" 
                        value={estado}
                        onChange={e => setEstado(e.target.value)}
                        />

                        <button className="btn-submit" type="submit">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormEditModal