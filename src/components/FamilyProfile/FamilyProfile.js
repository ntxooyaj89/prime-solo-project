import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FamilyProfile.css';
import axios from 'axios';
import Card from '@material-ui/core/Card';


class FamilyProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            card: { maxWidth: 20, }

        }
    }



    componentDidMount() {
        this.getFamily();
    }

    getFamily = () => {

        const action = { type: 'GET_FAMILY', payload: {id: this.props.match.params.id} };
        this.props.dispatch(action);
    }

    moreInfo = () => {
        console.log('this is more info');
        
    }

    removeMember = () => {
    
        // have to come back to delete not working as inteded.
        const action = {
            type: 'DELETE_MEMBER',
            payload: { memberId: this.props.reduxStore.familyMember.id }
        }
        this.props.dispatch(action);
    }


    render() {

        return (
            <div>
                {/* {JSON.stringify(this.props.reduxStore.familyReducer.familyMember)} */}
                <div className="classes-card">
                    {/* this is members from the yang family. */}
                    {this.props.reduxStore.familyReducer.familyMember.map(member => (

                        <div key={member.id}>
                            <Card className={this.state.card}>
                                <img className="imageCard" src={member.image} alt="images of family"></img>
                                <div className="card"  >
                                    <ul>
                                        <li>{member.first_name}</li>
                                        <li>{member.last_name}</li>
                                        <li>{member.date_of_birth}</li>
                                        <li>{member.gender}</li>
                                        <li>{member.last_name}</li>
                                        <li>{member.description}</li>
                                        <li>{member.family_name}</li>
                                        <li><button onClick={this.removeMember}>Delete member</button></li>
                                    </ul>


                                </div>
                            </Card>
                        </div>




                    ))}
                </div>
            </div>











        );
    }


}

const mapStateToProps = reduxStore => ({
    reduxStore: reduxStore
})






export default connect(mapStateToProps)(FamilyProfile);

{/* <Card className={this.state.card}> */ }