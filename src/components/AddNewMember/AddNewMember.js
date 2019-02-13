import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

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
        this.getFamily();
        this.getFamilyName();
    }

    getFamilyName = () =>{
       const action = {type: 'GET_FAMILYNAME'};
       this.props.dispatch(action);
    }

    getFamily = () => {

        const action = { type: 'GET_FAMILY' };
        this.props.dispatch(action);
    }

    handleFirstName = event => {
        console.log('this is handleMemberFirstName');
    }

    addNewMember = event => {
        console.log('this is addNewMember');
    }

    render() {

        console.log('this is family NAME', this.props.reduxStore.familyReducer.MyFamilyName)
        return (
           
               <div>
                   {/* this is info from the Chang family. */}
                {JSON.stringify(this.props.reduxStore.familyReducer.MyFamilyName)}
             
                <form onSubmit={this.addNewMember}>
               
                    <input type='text' placeholder="first name" onChange={this.handleFirstName}/>
                    <input type='text' placeholder="last name" onChange={this.handleLastName}/>
                    <input type='text' placeholder="date of birth" onChange={this.handleBirthday}/>
                    <input type='text' placeholder="gender" onChange={this.handleGender}/>
                    <input type='text' placeholder="description" onChange={this.handleDescribtion}/>
                    <input type='text' placeholder="image" onChange={this.handleImage}/>
                   

                </form>
            </div>

          
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapReduxStoreToProps) (AddNewMember);