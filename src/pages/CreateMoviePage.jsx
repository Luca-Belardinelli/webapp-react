// IMPORTIAMO IL LINK DEL MODULO REACT-ROUTER

import { Link, useNavigate } from "react-router-dom"


// AXIOS
import axios from 'axios'

// USO USESTATE USEEFFECT
import { useState } from "react"

const initialData = {
    title: "",
    director: "",
    image: null,
    abstract: ""
};

const endpointApi = "http://localhost:3000/api/movies";

const CreateMoviePage = () => {

    // NAVIGAZIONE PER TORNARE ALLA PAGINA HOME
    const navigate = useNavigate();


    // VARIABILE DI STATO
    const [formDataOgj, setFormDataOgj] = useState(initialData);

    // /GESTIONE RACCOLTA FORM DATI
    const setFieldValue = (e) => {
        // Estrai 'value' e 'name' dall'elemento che ha generato l'evento (input, textarea, etc.)
        const { value, name } = e.target;
        // Controlla se il campo modificato è il campo "image"
        if (name === "image") setFormDataOgj({
            ...formDataOgj,// Mantiene i dati esistenti
            image: e.target.files[0] // Assegna il primo file selezionato al campo "image"
        });
        else
            // Per tutti gli altri campi (testo, numeri, ecc.), aggiorna normalmente il valor
            setFormDataOgj({
                ...formDataOgj, // Mantiene i dati esistenti
                [name]: value // Aggiorna solo il campo specifico
            });
    }


    // GESTIONE INVIO DEL FOMR
    const handleSubmit = (e) => {
        // Impedisce il comportamento predefinito del form (evita il refresh della pagina)
        e.preventDefault();
        // Invia una richiesta POST all'API usando axios
        axios.post(endpointApi, formDataOgj, { headers: { "Content-Type": "multipart/form-data" } })// Imposta l'header per indicare che si sta inviando un file
            .then(
                () => { navigate("/") } // Se la richiesta ha successo, reindirizza alla home page
            )
            .catch((err) => {
                console.log(err);// Se c'è un errore, lo stampa nella console
            });

    }


    return (
        <>
            <h1>Add a new Movie</h1>

            <section>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Title:</label>
                        <input
                            name="title"
                            type="text"
                            value={formDataOgj.title}
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div>
                        <label>director:</label>
                        <input
                            name="director"
                            type="text"
                            value={formDataOgj.author}
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div>
                        <label>Image:</label>
                        <input
                            name="image"
                            type="file"
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div>
                        <label>Abstract:</label>
                        <textarea
                            value={formDataOgj.abstract}
                            name="abstract"
                            onChange={setFieldValue}
                            required
                        ></textarea>
                    </div>
                    <div>
                        <Link to="/">Back</Link>
                        <button>
                            Add Book
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default CreateMoviePage