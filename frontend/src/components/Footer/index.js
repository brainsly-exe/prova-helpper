import React from 'react'

import { FiLoader } from 'react-icons/fi'
import './styles.css'

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="credits">
                <FiLoader color="#E02041" size={18} />
                <p className="text-footer">Desenvolvido por
                    <a href="https://portfolio-amorim.herokuapp.com/" target="_blank">
                        &lt;Amorim /&gt;
                    </a>
                </p>
            </div>
        </div>
    )
}