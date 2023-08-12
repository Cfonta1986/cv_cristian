import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <h1>HEADER</h1>
            <ul>
                <li><Link className="menu-item menu-item--entrar" to="#">Entrar</Link></li>
                <li><Link className="menu-item" to="#">Productos</Link></li>
                <li><Link className="menu-item" to="/">Blog</Link></li>
                <li><Link className="menu-item" to="./sobre">Sobre</Link></li>
            </ul>
        </header>
    )
}

export default Header

