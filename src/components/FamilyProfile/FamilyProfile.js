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
                <div className="classes-card">
               
                    {this.props.reduxStore.familyReducer.familyMember.map(member => (
                      
                        <div key={member.id}>
                            <Card className={this.state.card}>
                          <img className="imageCard" src={member.image} alt="images of family"></img>
                                <div className="card"  >
                                    {member.first_name}
                                    {member.last_name}
                                    {member.date_of_birth}
                                    {member.gender}
                                    {member.description}
                            </div>
                            <button>update member</button>
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
            
   {/* <Card className={this.state.card}> */}