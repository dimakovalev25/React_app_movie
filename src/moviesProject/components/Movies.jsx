import Movie from "./Movie";
import Search from "./Search";


const Movies = (props) => {
    const {movies = [], updateNameMovie} = props;
    // console.log('mov', movies)


    return (

             <div className={'movies'}>

                {movies.length ? movies.map(item => (
                    <Movie updateNameMovie={updateNameMovie} {...item}/>
                )) : <img className={'img404'} src={'https://steamuserimages-a.akamaihd.net/ugc/786364427290079115/EDFEF32655BB033B66942251379D20E95A399567/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true}'}/> }

            </div>

    )
}
export default  Movies;