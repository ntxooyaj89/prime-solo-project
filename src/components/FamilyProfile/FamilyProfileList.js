import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FamilyProfile.css';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import { CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';





class FamilyProfileList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        card: { maxWidth: 20, 
        },
        media: {
            height: 100
        },
     }

        
    }

    // removeMember = () => {

    //     // have to come back to delete not working as inteded.
    //     const action = {
    //         type: 'DELETE_MEMBER',
    //         payload: { id: this.props.familyMember.id }
    //     }

    //     this.props.dispatch(action);
    // }

    render() {
        return (
            <div>
            <div>
                {/* {JSON.stringify(this.props.member.image)} */}
            </div>
            <Card className='card'>
                <CardActionArea>
                    <CardMedia 
                        className={this.state.media}
                        image={this.props.member.image}/>
                     
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.member.first_name}
                            {this.props.member.last_name}

                        </Typography>
                        <Typography component="p">
                            {this.props.member.date_of_birth}
                        </Typography>
                        <Typography component="p">
                            {this.props.member.gender}</Typography>
                        <Typography component="p">
                            {this.props.member.description}</Typography>
                        <Typography component="p">
                            {this.props.member.family_name}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect()(FamilyProfileList);