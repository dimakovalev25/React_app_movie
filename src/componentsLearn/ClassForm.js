import React from "react";

class ClassForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            number: '',
            textarea: '',
            checkbox: false
        }
        this.firsNameRef = React.createRef()
    }


    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    componentDidMount() {
        console.log(this.firsNameRef)
        this.firsNameRef.current.focus();
    }

    render() {

        const {name, number, textarea, select,checkbox} = this.state
        return (

            <div>
                <form onChange={this.handleChange}>
                    <input
                        ref={this.firsNameRef}
                        type={'text'}
                        name={'name'}
                        placeholder={'name'}
                        value={name}/>
                    <br/>

                    <input
                        type={'number'}
                        name={'number'}
                        placeholder={'number'}
                        value={number}/>
                    <br/>
                    <textarea name={'textarea'} value={textarea}/>
                    <br/>
                    <select   name={'select'} value={select}>
                        <option value={'1'}>1</option>
                        <option value={'2'}>2</option>
                        <option value={'3'}>3</option>

                    </select>
                    <br/>
                    <input
                    type={'checkbox'}
                    name={'checkbox'}
                    checked={checkbox}
                    />
                    <br/>
                    <button type={'submit'}>add</button>

                </form>
            </div>
        )

    }

}

export default ClassForm;