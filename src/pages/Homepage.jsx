import MovieList from "../components/MovieList"

const Homepage = () => {

    return (

        <main>
            <div>
                <section>
                    <h2> MOVIES</h2>
                    <span> Film in evidenza</span>
                </section>



                {/* Listato */}
                <section>
                    <MovieList />
                    <MovieList />
                    <MovieList />
                    <MovieList />
                    <MovieList />
                </section>

            </div>

        </main>
    )
}

export default Homepage