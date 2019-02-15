import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FamilyProfile.css';
// import axios from 'axios';
import Card from '@material-ui/core/Card';
import FamilyProfileList from './FamilyProfileList';


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

    


    render() {

        return (
            <div>
                {/* {JSON.stringify(this.props)} */}
                {/* <div className="classes-card"> */}
                    {/* this is members from the yang family. */}
                    {this.props.reduxStore.familyReducer.familyMember.map(member => {
                        return(
                            <FamilyProfileList key={member.id} member={member}/>
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

{/* <Card className={this.state.card}> */ }