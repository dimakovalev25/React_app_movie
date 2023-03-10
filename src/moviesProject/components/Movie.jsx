const Movie = (props) => {
    const {Title: title, Year: year, imdbID: id, Type: type, Poster: poster} = props

    return (
        <>
            <div id={id} className="row">
                <div className="col s12 m6">
                    <div className="card indigo lighten-4">
                        <div className="card-image">
                            <img src={poster}/>
                                <span className="card-title">Name: {title}</span>
                            <br/>

                        </div> <h6> Year: {year}</h6>
                        <br/>
                        <h6> IMDB: {id}</h6>
                        <br/>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Movie;