import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FamilyProfile.css';
import Card from '@material-ui/core/Card';
import FamilyProfileList from './FamilyProfileList';


// this components get the family by it's user's id...
// then pass the database info to familyProfileList and break it down...
class FamilyProfile extends Component {


    componentDidMount() {
        this.getFamily();
        // this.getUserFamily();
    }

    // get the family of 
    getFamily = () => {

        const action = { type: 'GET_FAMILY', payload: { id: this.props.match.params.id } };
        this.props.dispatch(action);
    }

    render() {

        return (
            <div>
                {/* {JSON.stringify(this.props.reduxStore.familyReducer.familyMember)} */}
                {/* <div className="classes-card"> */}
                {/* this is members from the yang family. */}
                {this.props.reduxStore.familyReducer.familyMember.map(member => {
                    return (
                        <FamilyProfileList key={member.id} member={member} />
                    )
                })}



            </div>

        );
    }


}

const mapStateToProps = reduxStore => ({
    reduxStore: reduxStore
})


export default connect(mapStateToProps)(FamilyProfile);

