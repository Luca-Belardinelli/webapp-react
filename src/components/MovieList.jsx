import { Link } from "react-router-dom"

export default function MovieListCard({ movieProp }) {

    //DESTRUTTURIAMO OGGETTO PROPS
    const { id, title, director, genre, release_year, image } = movieProp;
    return (
        <div className="containermoviecard" >
            <img src={image} alt="" />
            <div className="card">
                <h5>{title}</h5>
                <address><i>{director}</i></address>
                <p>{genre} , {release_year}</p>
                <Link to={`movies/${id}`}>More</Link>
            </div>
        </div>

    );
}