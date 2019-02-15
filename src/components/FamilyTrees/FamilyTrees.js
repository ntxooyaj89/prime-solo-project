import React, { Component } from "react";
import { connect } from 'react-redux';

class FamilyTree extends Component {

    constructor(props) {
        super(props);
        this.state = {
            person: '',
        }
    }

    componentDidMount() {
        this.getUserFamily();
    }

    // get the family names of the user
    getUserFamily = () => {
        // const userId = this.props.reduxStore.user.id
        const action = { type: 'GET_USER_FAMILY' };
        this.props.dispatch(action)

    }

    handleUserFamily = (event) => {
        console.log('this is handleUserFamily');
        this.setState({
            person: event.target.value,
        });
        this.props.history.push(`/family-profile/${event.target.value}`);
    }

    


    render() {

        return(
           
           <div>
               {JSON.stringify(this.props.reduxStore.familyReducer.myFamilyName)}
           <ul>
                    {this.props.reduxStore.familyReducer.myFamilyName.map((user, i) => {
                        return (
                            // set the value to the id of the object and use it to send to next component.
                        <button onClick={this.handleUserFamily} key={i} value={user.id}>{user.family_name}</button>
                        )

                    })}

           </ul>

            
                                        
                
            </div>
            
            
               
        );
    
    
    
                        
                    
    }
}
                
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});



export default connect(mapReduxStoreToProps)(FamilyTree);
                    
// payload: {id: this.props.reduxStore.user.id }

// {
//     this.props.reduxStore.familyReducer.myFamilyName.map((user, i) => {
//         return <option key={i} value={user.id}>{user.family_name}</option>

//     })
// }
