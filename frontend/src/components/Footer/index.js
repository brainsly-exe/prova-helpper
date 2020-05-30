import React from 'react'

import { FiLoader } from 'react-icons/fi'
import './styles.css'

export default function Footer() {
    return(
        <div className="footer-container">
            <div className="credits">
                <FiLoader color="#E02041" size={18}/>
                <p className="text-footer">Desenvolvido por &lt;Amorim /&gt;</p>
            </div>
        </div>
    )
}