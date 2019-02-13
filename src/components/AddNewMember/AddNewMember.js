import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { TablePagination } from '@material-ui/core';

class AddNewMember extends Component {

    constructor() {
        super();
        this.state = {
            newMember: {
                firstName: '',
                lastName: '',
                date_of_birth: 0,
                gender: '',
                description: '',
                image: ''


            }
        }
    }

    componentDidMount() {
        // this get the whole member
        // this.getFamily();
        // this get just the name of family
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
    }

    addNewMember = event => {
        console.log('this is addNewMember');
    }

    render() {

        return (

            <div>

                {JSON.stringify(this.props.reduxStore.familyReducer.myFamilyName)}

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


                </form>
            </div>


        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapReduxStoreToProps)(AddNewMember);