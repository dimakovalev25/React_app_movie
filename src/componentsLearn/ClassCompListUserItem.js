import React from "react";

const ClassCompListUserItem = (props) => {
    console.log(props)


    return (
        <>
            {props.props.map(item => (
                <div key={item.id}>
                    <div>{item.name}</div>
                    <div>{item.email}</div>
                    <button onClick={() => props.deleteItem(item.id)}>Delete</button>
                    <hr></hr>
                </div>


            ))}
        </>

    )
}

export default ClassCompListUserItem;