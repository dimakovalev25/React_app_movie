import Movie from "./Movie";


const Movies = (props) => {
    const {movies} = props


    return (
    <div className={'movies'}>
        {movies.map(item => {
            <Movie key={item.id}{...item}/>
        })}

    </div>
    )
}
export default  Movies;