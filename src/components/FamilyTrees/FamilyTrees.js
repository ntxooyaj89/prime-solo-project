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
        const action = { type: 'GET_USER_FAMILY', payload: { id: this.props.reduxStore.user.id }};
        this.props.dispatch(action)
        
    }


    render(){
        return(
            <div>
                {JSON.stringify(this.props.reduxStore.user.id)}
                {JSON.stringify(this.props.reduxStore.familyReducer.memberOfFamily)}
                <h3>This is Family Tree</h3>
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapReduxStoreToProps) (FamilyTree);