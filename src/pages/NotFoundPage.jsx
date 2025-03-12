
// IMPORTIAMO IL LINK DEL MODULO REACT-ROUTER
import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div>
            <h2>Page Not Found</h2>
            <Link to="/">Back to home</Link>
        </div>
    )
}

export default NotFoundPage