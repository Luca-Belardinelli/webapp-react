// IMPORTIAMO IL LINK DEL MODULO REACT-ROUTER

import { Link } from "react-router-dom"


const CreateMoviePage = () => {

    const setFieldValue = () => {

    }

    const handleSubmit = () => {

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
                            // value={formDataOgj.title}
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div>
                        <label>Author:</label>
                        <input
                            name="author"
                            type="text"
                            // value={formDataOgj.author}
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
                            // value={formDataOgj.abstract}
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