import React from "react";
import ClassCompListUserItem from './ClassCompListUserItem'

class ClassCompListUser extends React.Component{
    constructor() {
        super();
        this.state={
            data: [
                {
                    name: 'jo',
                    email: 'k33333@gmail.com',
                    id: 1
                },
                {
                    name: 'john',
                    email: 'k33333@gmail.com',
                    id: 2
                },
                {
                    name: 'jack',
                    email: 'k33333@gmail.com',
                    id: 3
                }
            ]
        }
    }


    deleteItem = (id) => {
        this.setState({data: this.state.data.filter(item => item.id !== id)})
    }

    render() {

        const {data} = this.state
        // console.log(data)
        return (


            <ClassCompListUserItem deleteItem={this.deleteItem} props={data}/>
        )
    }

}

export default ClassCompListUser;