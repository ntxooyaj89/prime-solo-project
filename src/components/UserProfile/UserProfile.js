import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class UserProfile extends Component {

    constructor(){
        super();
        this.state = {
            familyList: [],
        }
    }

    componentDidMount(){
        this.getFamily();
    }

    getFamily = () => {

        const action = {type: 'GET_FAMILY' };
        this.props.dispatch(action);
    //    axios({
    //        method: 'GET',
    //        url: '/api/template'
    //     }).then((response) =>{
    //        console.log(response.data);
    //        this.setState({
    //         familyList: response.data
    //        });
    //     }).catch((error)=> {
    //         console.log('this is error in getFamily');
    //     })
        
    }

    // mapFamily = () => {
    //     return(
    //         this.props.reduxStore.familyReducer.map((member, i) => {
    //             return (
    //                 <li key={i}>{member.first_name} {member.first_last} {member.date_of_birth}
    //                     {member.gender} {member.description} {member.image_url}</li>
    //             )
    //         })
    //     )
    // }

  

    render(){
        
        return(
            <div>
                {/* {JSON.stringify(this.props.reduxStore.familyReducer.familyMember)} */}
                <div>
                    {this.props.reduxStore.familyReducer.familyMember.map(member => (
                        <div key={member.id}>
                            <div><img src={member.image}></img></div>
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