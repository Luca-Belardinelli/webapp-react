// IMPORTIAMO IL LINK DEL MODULO REACT-ROUTER

import { Link } from "react-router-dom"

const Header = () => {

    return (
        <nav className="nav">
            <div className="container">
                <Link className="link" to="/">MOVIES</Link>
            </div>
        </nav>
    )

}

export default Header