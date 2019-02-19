import React, { Component } from 'react';
import { connect } from 'react-redux';


class UserProfile extends Component{

    constructor(props){
        super(props);
        this.state ={}
    }

    componentDidMount = () => {
       console.log('this has mounted in user profile');
       this.getMemberDetail();
    }


    getMemberDetail = () => {
        console.log('this is inside getMemberDetail');
        const memberId = this.props.match.params.id;
        const action = {type: 'GET_MEMBER_DETAIL', payload: {memberId: memberId}}
        this.props.dispatch(action);
    }

   
    render(){
        return(
            <div>
                <div>User Profile</div>
                {JSON.stringify(this.props.match.params)}

            </div>
           

        )
    }
}

export default connect() (UserProfile);
