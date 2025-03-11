// IMPORTIAMO IL LINK DEL MODULO REACT-ROUTER

import { Link } from "react-router-dom"

const Header = () => {

    return (
        <nav>
            <div>
                <Link to="/">MOVIES</Link>
            </div>
        </nav>
    )

}

export default Header