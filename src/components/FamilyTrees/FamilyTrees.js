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
        this.getMember();
    }

    getMember = () => {
        const action = { type: 'GET_MEMBER', payload: { id: this.props.match.params.id }};
        this.props.dispatch(action)
        
    }


    render(){
        return(
            <div>
                {JSON.stringify(this.props)}
                <h3>This is Family Tree</h3>
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapReduxStoreToProps) (FamilyTree);