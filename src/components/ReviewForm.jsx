// IMPORTO USESTATE
import { useState } from 'react';
//AXIOS
import axios from 'axios';

const ReviewForm = ({ movie_id }) => {

    const initialvalue = { name: "", text: "", vote: 1 }

    //VARIABILE DI STATO PER INFO FORM
    const [formData, setFormData] = useState(initialvalue);

    // FUONZIONE DI CREAZIONE OGGETTO VALORI FORM
    const setFieldValue = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });

    }

    // SALVIAMO ENDPOIN
    const endpoint = `http://localhost:3000/api/movies/${movie_id}/reviews`;

    // FUNZIONE RICHIESTA D'INVIO AL SUBMIT DEL FORM
    const submitReview = (e) => {
        e.preventDefault();

        axios.post(endpoint, formData, { headers: { 'Content-Type': 'application/json' } })
            .then(
                () => {
                    // RESETTO IL FORM
                    setFormData(initialvalue)

                }
            )
            .catch(err => console.log(err)
            )

    }

    return (

        <div>
            <h4>Add your review</h4>
            <div>
                <form onSubmit={submitReview} >
                    <div >
                        <label>Name</label>
                        <input type="text" name="name" value={formData.name} onChange={setFieldValue} />
                    </div>
                    <div>
                        <label>Review</label>
                        <textarea name="text" value={formData.text} onChange={setFieldValue}></textarea>
                    </div>
                    <div>
                        <label>Vote</label>
                        <input type="number" min="1" max="5" name='vote' value={formData.vote} onChange={setFieldValue} />
                    </div>
                    <div>
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>


    )
}

export default ReviewForm