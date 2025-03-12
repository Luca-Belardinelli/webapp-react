export default function MovieReview({ reviewProp }) {
    // DESTRUTTURO PROP
    const { name, text, vote } = reviewProp
    return (
        <div>
            <div>
                <p> {text}</p>
                <strong> Vote: {vote}</strong>
                <address> By {name}</address>
            </div>
        </div >
    );
}