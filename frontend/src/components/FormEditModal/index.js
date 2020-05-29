import React, { useState } from 'react'
import { FiXCircle } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

function FormEditModal({client, id = 'modal', onClose = () => {} }) {
    
    function handleOutsideClick(e) {
        if (e.target.id === id) {
            onClose()
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
                    <form>
                        <input type="text" name="nome" placeholder="Nome" defaultValue={client.nome}/>
                        <input type="email" name="email" placeholder="E-mail" defaultValue={client.email}/>
                        <input type="text" name="telefone" placeholder="Telefone" defaultValue={client.telefone}/>
                        <input type="text" name="cep" placeholder="CEP" defaultValue={client.cep}/>
                        <input type="text" name="logradouro" placeholder="Logradouro" defaultValue={client.logradouro}/>
                        <input type="text" name="numero" placeholder="Número" defaultValue={client.numero}/>
                        <input type="text" name="bairro" placeholder="Bairro" defaultValue={client.bairro}/>
                        <input type="text" name="cidade" placeholder="Cidade" defaultValue={client.cidade}/>
                        <input type="text" name="estado" placeholder="Estado" defaultValue={client.estado}/>

                        <button className="btn-submit" type="submit">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormEditModal