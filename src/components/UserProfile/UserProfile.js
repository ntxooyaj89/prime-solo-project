import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserProfile.css';
import axios from 'axios';


class UserProfile extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //        cardMax: {maxWidth: 20,}
    //     }
    // }

    componentDidMount(){
        this.getFamily();
    }

    getFamily = () => {

        const action = {type: 'GET_FAMILY' };
        this.props.dispatch(action);
    }

  
        render(){
        
        return(
            <div>
                {/* {JSON.stringify(this.props.reduxStore.familyReducer.familyMember)} */}
                <div>
                    {this.props.reduxStore.familyReducer.familyMember.map(member => (
                        <div key={member.id}>
                            <div><img className="imageCard" src={member.image}></img></div>
                            <ul>
                                <li>{member.first_name}</li>
                                <li>{member.last_name}</li>
                                <li>{member.date_of_birth}</li>
                                <li>{member.gender}</li>
                                <li>{member.description} </li>
                                
                            </ul>
                             
                            
                        </div>
                    ))}
                </div>
            </div>
               
              
               
                
             
           
        )
    }

   
}

const mapStateToProps = reduxStore => ({
    reduxStore: reduxStore
})

    




export default connect(mapStateToProps)(UserProfile);