import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { CardActionArea, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import moment from 'moment';


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
                {/* {JSON.stringify(this.props.match.params)} */}
                {JSON.stringify(this.props.reduxStore.familyReducer.memberDetail)}
                {this.props.reduxStore.familyReducer.memberDetail.map(person => {
                    return(
                    <div key={person.id}>
                    <img src={person.image}/>
                    {person.first_name}
                    {person.last_name}
                    {person.date_of_birth}
                    {person.gender}
                    {person.description}
                    {JSON.stringify(person.have_we_met)}



                    </div>

                    )
                })}

            </div>
           

        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore: reduxStore
})

export default connect(mapStateToProps) (UserProfile);
