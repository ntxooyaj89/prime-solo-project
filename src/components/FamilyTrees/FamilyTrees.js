import React, { Component } from "react";
import { connect } from 'react-redux';

class FamilyTree extends Component {

    constructor(props) {
        super(props);
        this.state = {
            familyTree: []
        }
    }

    componentDidMount() {
        this.getUserFamily();
    }

    getUserFamily = () => {
        // const userId = this.props.reduxStore.user.id
        const action = { type: 'GET_USER_FAMILY' };
        this.props.dispatch(action)

    }


    render() {

        return(

            <div>
               

                <form onSubmit={this.handleUserFamily}>
                    <select onChange={this.selectFamily} placeholder="select a family" >
                        <option value="">select a Family</option>
                        {this.props.reduxStore.familyReducer.myFamilyName.map((user, i) => {
                            return <option key={i} value={user.id}>{user.family_name}</option>

                        })}
                                      
                </select>

                <button type="submit">submit</button>

                </form>

                
                                        
                
            </div>
            
               
        );
    
    
    
                        
                    
    }
}
                
const mapReduxStoreToProps = (reduxStore) => ({
                        reduxStore
                    });
                    
                    export default connect(mapReduxStoreToProps)(FamilyTree);
                    
// payload: {id: this.props.reduxStore.user.id }