
const ReviewForm = () => {

    return (

        <div>
            <h4>Add your review</h4>
            <div>
                <form>
                    <div >
                        <label>Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div>
                        <label>Review</label>
                        <textarea name="text"></textarea>
                    </div>
                    <div>
                        <label>Voto</label>
                        <input type="number" min="1" max="5" name='vote' />
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