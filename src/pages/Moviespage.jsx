// AXIOS
import axios from 'axios'

// USO USESTATE USEEFFECT
import { useState, useEffect } from "react"

// IMPORTIAMO IL LINK DEL MODULO REACT-ROUTER
import { Link, useParams } from "react-router-dom"

//COMPONENTE 
import MoviesReview from "../components/MoviesReview"


const Moviespage = () => {

    // RECUPERIAMO ID MOVIE RICHIESTO
    const { id } = useParams();

    //SETTO LO STATO DEL COMPONENTE
    const [movie, setMovie] = useState({});

    // FUNZIONE CHIAMATA API PER IL MOVIE RICHIESTO
    const fetchmovie = () => {
        axios.get("http://localhost:3000/api/movies/" + id)
            .then(
                res => {
                    console.log(res.data)
                }
            )

            .catch(err => {
                console.log(err);
            })
    }

    //CHIAMATA API AL MONTAGGIO COMPONENTE
    useEffect(fetchmovie, [])

    return (
        <>
            <div>
                <img src={movie.image} alt="" />
                <div>
                    <h1>{movie.title}</h1>
                    <h3 className="text-muted"><i>By {movie.author}</i></h3>
                    <p>{movie.abstract}</p>
                </div>
            </div>

            <div>
                <h3>community reviews</h3>
                {/* reviews */}
                <MoviesReview />
            </div>

            <div>
                <Link to="/">Back to home</Link>
            </div>
        </>
    )
}

export default Moviespage