import { Link } from "react-router-dom"

export default function MovieListCard() {


    return (


        <div >
            <h5 >Tre Uomini e una gamba</h5>

            <img src="" alt="" />
            <address><i>By nome autore</i></address>

            <div >
                <p>
                </p>

                <Link to="/movies/:id">Dettagli</Link>
            </div>




        </div>


    );
}