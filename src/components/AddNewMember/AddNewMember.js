import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import './AddNewMember.css';
// import ReactFilestack from 'filestack-react';

// const FILESTACK_API_KEY = process.env.REACT_APP_FILESTACK_API_KEY;

// const basicOptions = {
//     accept: 'image/*',
//     fromSources: ['local_file_system'],
//     maxSize: 1024 * 1024,
//     maxFiles: 1,
// }

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

        this.getFamilyName()
        

    }

    getFamilyName = () => {
        console.log('this gets the name of each family in database.');
        const action = {type: 'GET_FAMILY_NAME'}
        this.props.dispatch(action);
    }

    

    // this handle the member
    handleFirstName = event => {
        console.log('this is handleMemberFirstName');
        this.setState({
            newMember: {
                ...this.state.newMember,
                firstName: event.target.value,
            }

        })
    }

    // this handle the lastname of member
    handleLastName = event => {
        console.log('this is handle member last name');
        this.setState({
            newMember: {
                ...this.state.newMember,
                lastName: event.target.value,
            }

        })
    }


    // this handle the member birthday
    handleBirthday = event => {
        this.setState({
            newMember: {
                ...this.state.newMember,
                date_of_birth: event.target.value,
            }

        })
    }


    // this handle the gender of the member
    handleGender = event => {
        this.setState({
            newMember: {
                ...this.state.newMember,
                gender: event.target.value,
            }

        })
    }


    // this handle the description of the member
    handleDescribtion = event => {
        this.setState({
            newMember: {
                ...this.state.newMember,
                description: event.target.value,
            }

        })
    }


    // this handle the image of the member
    handleImage = (event) => {
        this.setState({
            newMember: {
                ...this.state.newMember,
                image: event.target.value,
            }
        })
        

    }
    onError = (error) => {
        console.log('this is error in onError');
    }
    
    // this select the name of which family to insert the member into.
    selectFamilyName = (event) => {
        console.log('this is select family name');
        this.setState({
            newMember: {
                ...this.state.newMember,
                family_id: event.target.value,
            }
            

        })
        
        
    }

    // this takes all the info and send to reducer saga to insert into database.
    addNewMember = event => {
        console.log('this is addNewMember');
        event.preventDefault();
        
        const action = { type: 'ADD_MEMBER', payload: this.state.newMember}
        this.props.dispatch(action);
        // window.location.reload();
        
    }



    render() {

        console.log('This is the api key!!!!', process.env.REACT_APP_FILESTACK_API_KEY)

        return (

           
            <div>
                {/* {JSON.stringify(this.props.reduxStore.familyReducer.myFamilyName)} */}
                {/* {JSON.stringify(this.props.reduxStore.familyReducer.nameOfFamily)} */}

                <form className="form" onSubmit={this.addNewMember}>
                    <header className="header">Add A New Member</header>

                    <input type='text' placeholder="first name" onChange={this.handleFirstName} />
                    <input type='text' placeholder="last name" onChange={this.handleLastName} />
                    <input type='date' placeholder="date of birth" onChange={this.handleBirthday} />
                    <input type='text' placeholder="gender" onChange={this.handleGender} />
                    <input type='text' placeholder="description" onChange={this.handleDescribtion} />
                    <input type='text' placeholder="image" onChange={this.handleImage} />
                    {/* <div>
                        <ReactFilestack
                            apikey={FILESTACK_API_KEY}
                            buttonText="Upload Photo"
                            buttonClass="btn"
                            name="image"
                            options={basicOptions}
                            onClick={this.handleImage}
                            onError={this.onError}
                        />

                    </div> */}
                    {/* <input type='text' placeholder="family name" value={this.state.newMember.family_id} onChange={this.selectFamilyName}/> */}
                    <select onChange={this.selectFamilyName} value={this.state.newMember.family_id} >
                        <option >Select family name</option>
                        {this.props.reduxStore.familyReducer.nameOfFamily.map((family, i) => {
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