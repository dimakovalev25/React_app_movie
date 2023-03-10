import Movie from "./Movie";
import Search from "./Search";


const Movies = (props) => {
    const {movies, updateNameMovie} = props;
    // console.log('mov', movies)


    return (

             <div className={'movies'}>

                {movies.map(item => (
                    <Movie updateNameMovie={updateNameMovie} {...item}/>
                ))}

            </div>

    )
}
export default  Movies;