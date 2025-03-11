// IMPORTIAMO IL LINK DEL MODULO REACT-ROUTER

import { Link } from "react-router-dom"

const Moviespage = () => {
    return (
        <>
            <div>
                <h2>Titolo FIlm</h2>
                <span>Autore</span>
                <p>ciao ciao ciao ciao ciao ciao</p>
            </div>

            <div>
                <h3>community reviews</h3>
                {/* reviews */}
                <p>reviews</p>
            </div>

            <div>
                <Link to="/">Back to home</Link>
            </div>
        </>
    )
}

export default Moviespage