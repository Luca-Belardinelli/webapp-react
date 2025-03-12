// AXIOS
import axios from 'axios'

// USO USESTATE USEEFFECT
import { useState, useEffect } from "react"

// IMPORTIAMO IL LINK DEL MODULO REACT-ROUTER
import { Link, useParams, useNavigate } from "react-router-dom"

//COMPONENTE 
import MoviesReview from "../components/MoviesReview"


const Moviespage = () => {

    // RECUPERIAMO ID MOVIE RICHIESTO
    const { id } = useParams();

    // USO  useNavigate
    const redirect = useNavigate();

    //SETTO LO STATO DEL COMPONENTE
    const [movie, setMovie] = useState({});

    // FUNZIONE CHIAMATA API PER IL MOVIE RICHIESTO
    const fetchmovie = () => {
        axios.get("http://localhost:3000/api/movies/" + id)
            .then(
                res => {
                    // console.log(res.data)
                    setMovie(res.data)
                }
            )

            .catch(err => {
                console.log(err);
                if (err.status === 404) redirect("/404")
            })
    }

    //CHIAMATA API AL MONTAGGIO COMPONENTE
    useEffect(fetchmovie, [])

    // RENDERING REVIEW
    const renderReviews = () => {
        return movie.reviews?.map(
            review => <MoviesReview key={review.id} reviewProp={review} />
        )
    }


    return (
        <main>
            <div className="information">
                <div >
                    <img src={movie.image} alt="" />
                    <div>
                        <h1>{movie.title}</h1>
                        <h3 className="text-muted"><i>By {movie.director}</i></h3>
                        <p>{movie.abstract}</p>
                    </div>
                </div>

                <div className='votes'>
                    <h3>community reviews</h3>
                    {/* reviews */}
                    {renderReviews()}
                </div>

                <div>
                    <Link to="/">Back to home</Link>
                </div>
            </div>
        </main>
    )
}

export default Moviespage