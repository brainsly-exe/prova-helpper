import React, { useState } from 'react'
import { FiXCircle } from 'react-icons/fi'

import './styles.css'

function FormNewModal({ id = 'modal', onClose = () => {} }) {
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
                    <h1 className="title-form">Cadastrar cliente</h1>
                    <form>
                        <input type="text" name="nome" placeholder="Nome"/>
                        <input type="email" name="email" placeholder="E-mail"/>
                        <input type="text" name="telefone" placeholder="Telefone"/>
                        <input type="text" name="cep" placeholder="CEP"/>
                        <input type="text" name="logradouro" placeholder="Logradouro"/>
                        <input type="text" name="numero" placeholder="Número"/>
                        <input type="text" name="bairro" placeholder="Bairro"/>
                        <input type="text" name="cidade" placeholder="Cidade"/>
                        <input type="text" name="estado" placeholder="Estado"/>

                        <button className="btn-submit" type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormNewModal