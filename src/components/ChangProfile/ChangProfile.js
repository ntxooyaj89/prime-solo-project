import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Card from '@material-ui/core/Card';


class ChangProfile extends Component {

    componentDidMount() {
        // this.getFamily();
        this.getFamilyName();
    }
    
    // this function gets chang family.
    getFamilyName = () => {
        const action = { type: 'GET_CHANG_FAMILY' };
        this.props.dispatch(action);
    }

    render(){
        return(
            <div>
                {/* {JSON.stringify(this.props.reduxStore.familyReducer.MyFamilyName)} */}
                {
                    this.props.reduxStore.familyReducer.MyFamilyName.map(member => (
                        <div key={member.id}>
                            <img src={member.image} alt="images of family"></img>
                            <div className="card"  >
                                <ul>
                                    <li>{member.first_name}</li>
                                    <li>{member.last_name}</li>
                                    <li>{member.date_of_birth}</li>
                                    <li>{member.gender}</li>
                                    <li>{member.last_name}</li>
                                    <li>{member.description}</li>
                                    <li>{member.family_name}</li>
                                </ul>
                        </div>
                    
                    </div>
                    
                    ))
                }

            </div>
           
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapReduxStoreToProps)(ChangProfile);