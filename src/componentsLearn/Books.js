const Book = (props) => {


    return (
        <div>
            <hr></hr>
            <h1>{props.title}</h1>
            <h3>{props.price}</h3>
            <hr></hr>

        </div>
    )

}

export default Book;