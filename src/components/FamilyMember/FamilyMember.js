import React, { Component } from "react";
import { connect } from 'react-redux';

class FamilyMember extends Component {

    constructor(props) {
        super(props);
        this.state = {
            FamilyMember: []
        }
    }

    componentDidMount() {
        this.getMember();
    }

    getMember = () => {
        const action = {type: 'GET_MEMBER'};
        this.props.dispatch(action)
        
    }


    render(){
        return(
            <div>
                {JSON.stringify(this.props.reduxStore.familyReducer.memberOfFamily)}
                <h3>This is Family Member</h3>
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapReduxStoreToProps) (FamilyMember);