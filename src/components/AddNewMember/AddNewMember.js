import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';


class AddNewMember extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newMember: {
                firstName: '',
                lastName: '',
                date_of_birth: '',
                gender: '',
                description: '',
                image: '',
                family_id: '',
              


            }
        }
    }

    componentDidMount() {
        
        this.getFamilyName();

    }

    // this gets the family name
    getFamilyName = () => {
        const action = { type: 'GET_FAMILY_NAME' };
        this.props.dispatch(action);
    }

    // this gets the family members
    // getFamily = () => {

    //     const action = { type: 'GET_FAMILY', payload: { id: this.props.match.params.id }  };
    //     this.props.dispatch(action);
    // }

    handleFirstName = event => {
        console.log('this is handleMemberFirstName');
        this.setState({
            newMember: {
                ...this.state.newMember,
                firstName: event.target.value,
            }

        })
    }

    handleLastName = event => {
        console.log('this is handle member last name');
        this.setState({
            newMember: {
                ...this.state.newMember,
                lastName: event.target.value,
            }

        })
    }

    handleBirthday = event => {
        this.setState({
            newMember: {
                ...this.state.newMember,
                date_of_birth: event.target.value,
            }

        })
    }

    handleGender = event => {
        this.setState({
            newMember: {
                ...this.state.newMember,
                gender: event.target.value,
            }

        })
    }

    handleDescribtion = event => {
        this.setState({
            newMember: {
                ...this.state.newMember,
                description: event.target.value,
            }

        })
    }

    handleImage = event => {
        this.setState({
            newMember: {
                ...this.state.newMember,
                image: event.target.value,
            }

        })
    }

    selectFamilyName = (event) => {
        console.log('this is select family name');
        this.setState({
            newMember: {
                ...this.state.newMember,
                family_id: event.target.value,
            }

        })
    }

    addNewMember = event => {
        console.log('this is addNewMember');
        event.preventDefault();
        const action = { type: 'ADD_MEMBER', payload: this.state.newMember}
        this.props.dispatch(action);
    }

    render() {

        return (

            <div>

                {/* {JSON.stringify(this.props.reduxStore.familyReducer.myFamilyName)} */}

                <form onSubmit={this.addNewMember}>

                    <input type='text' placeholder="first name" onChange={this.handleFirstName} />
                    <input type='text' placeholder="last name" onChange={this.handleLastName} />
                    <input type='text' placeholder="date of birth" onChange={this.handleBirthday} />
                    <input type='text' placeholder="gender" onChange={this.handleGender} />
                    <input type='text' placeholder="description" onChange={this.handleDescribtion} />
                    <input type='text' placeholder="image" onChange={this.handleImage} />
                    <select onChange={this.selectFamilyName} >
                        <option >Slect family name</option>
                        {this.props.reduxStore.familyReducer.myFamilyName.map((family, i) => {
                            return <option key={i} value={family.id}>{family.family_name}</option>
                        })}
                    </select>

                    <button type="submit">Submit</button>


                </form>
            </div>


        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapReduxStoreToProps)(AddNewMember);