import './Nav.css'
import React from 'react'
import { Link } from "react-router-dom";

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* apos href o caminho deve ser o site que queremos que a aplicação acesse */}
            <a href="#/">
                <i className='fa fa-home'></i> Inicio
            </a>
            <Link to="/usuario">USUARIO</Link>
            <Link to="/perfil">PERFIL</Link>
        </nav>
    </aside>