import React, { useState } from 'react';

import ClientItem from './components/ClientItem'
import FormNewModal from './components/FormNewModal'

import './global.css'
import './app.css'

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsModalVisible(true)}
        className="btn-primary">
        Cadastrar um novo cliente
      </button>
      {isModalVisible ? <FormNewModal onClose={() => setIsModalVisible(false)} /> : null}

      <ClientItem refresh={isModalVisible}/>
    </>
  )
}

export default App;
