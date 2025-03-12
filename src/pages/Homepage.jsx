// AXIOS
import axios from 'axios'

// USO USESTATE USEEFFECT
import { useState, useEffect } from "react"

// COMPONENTE List
import MovieList from "../components/MovieList"

const Homepage = () => {

    // SETTIAMO STATO COMPONENTE
    const [movies, setMovies] = useState([]);

    // FUNZIONE DI FEtCHING DATI LISTA MOVIES
    const fectMovies = () => {
        axios.get("http://localhost:3000/api/movies")
            .then(
                res => {
                    // console.log(res.data)
                    setMovies(res.data)
                }
            )
            .catch(err => console.log(err))
    }

    // fectMovies();
    useEffect(fectMovies, [])

    // FUNZIONE RENDERING MOVIES
    const renderMovies = () => {
        return movies.map(
            movie => {
                return (
                    <div key={movie.id}>
                        <MovieList movieProp={movie} />
                    </div>
                )
            }
        )
    }

    return (
        <>
            <h2 className='secondtitle'>Film in evidenza</h2>

            <div className='containercard'>
                {/* Listato */}
                {renderMovies()}
            </div>
        </>
    )
}

export default Homepage