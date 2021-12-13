
export default function Card(props) {

    return (
        <div className="card">
            <img className="image" src={ `${props.imageSrc}` } alt="img" />
            <h1 className="title">{ props.title }</h1>
            <p className="description">{ props.description }</p>
            <div className="links">
                <a href="https://picsum.photos/200">SHARE</a>
                <a href="https://picsum.photos/200">EXPLORE</a>
            </div>
        </div>
    )
}