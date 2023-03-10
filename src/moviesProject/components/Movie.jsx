const Movie = (props) => {
    // console.log(props)
    const {Title: title, Year: year, imdbID: id, Type: type, Poster: poster} = props


    return (
        <>
            <div id={id} className="row movie-item">
                <div className="col s12 m12">
                    <div className="card indigo lighten-4">
                        <div className="card-image">
                            <img className={'movie-image'} src={poster}/>
                            <br/>
                        </div>
                        <span className="card-title">{title} {year}</span>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Movie;