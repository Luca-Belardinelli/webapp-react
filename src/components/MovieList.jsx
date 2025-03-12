import { Link } from "react-router-dom"

export default function MovieListCard({ movieProp }) {

    //DESTRUTTURIAMO OGGETTO PROPS
    const { id, title, director, genre, release_year, abstract, image } = movieProp;
    return (
        <div >
            {image}
            <div >
                <h5 >{title}</h5>
                <address><i>{director}</i></address>
                <p>{abstract}</p>
                <p>{genre} , {release_year}</p>
                <Link to="movies/2">Dettagli</Link>
            </div>
        </div>

    );
}