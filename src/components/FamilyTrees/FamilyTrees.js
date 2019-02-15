import React, { Component } from "react";
import { connect } from 'react-redux';

class FamilyTree extends Component {

    constructor(props) {
        super(props);
        this.state = {
            family: '',
        }
    }

    componentDidMount() {
        this.getUserFamily();
       
    }

    // getUser = () => {
    //     const action = { type: 'GET_USER'};
    //     this.props.dispatch(action)
    // }

    // get the family names of the user
    getUserFamily = () => {
        // const userId = this.props.reduxStore.user.id
        const action = { type: 'GET_USER_FAMILY' };
        this.props.dispatch(action)

    }

    selectFamily = (event) => {
        console.log('this is select Family');
        this.setState({
            family: event.target.value
           
        })

    }

    handleUserFamily = (event) => {
        console.log('this is handleUserFamily');
        // this.setState({
        //     family: event.target.value,
        // });
        this.props.history.push(`/family-profile/${event.target.value}`);
    }

    


    render() {

        return(
           
           <div>
               {/* {JSON.stringify(this.props.reduxStore.familyReducer.myFamilyName)} */}

               {this.props.reduxStore.familyReducer.myFamilyName.map((name, i) => {
                   return (
                       // this will send user to their family family when they clicked on button.
                       <button onClick={this.handleUserFamily}  key={i} value={name.id}>{name.family_name}</button>
                   )
               })}
           
            </div>
            
            
               
        );
    
    
    
                        
                    
    }
}
                
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});



export default connect(mapReduxStoreToProps)(FamilyTree);
                    
