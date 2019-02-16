import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FamilyProfile.css';
// import axios from 'axios';
import Card from '@material-ui/core/Card';
import { CardActionArea, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import classNames from 'classnames';




class FamilyProfileList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: {maxWidth: 150,},
            media: {height: 150, paddingTop: '56.25%'},
            actions: {display: 'flex'},
            expand: {transform: 'rotate(0deg)', marginLeft: 'auto'},
            expandOpen: {transform: 'rotate(180deg)'}
        };
    }

    handelDelete = () => {
        console.log('this is handle delete')

        // have to come back to delete not working as inteded.
        const action = {
            type: 'DELETE_MEMBER',
            payload: { memberId: this.props.member.id }
        }

        this.props.dispatch(action);
        window.location.reload();
    }

    handelUpdate = () => {
        console.log('this is handle update');
        const action = {
            type: 'UPDATE_MEMBER',
            payload: {memberId: this.props.member.id}
        }

    }

    render() {
        
        return (

            <div className="card">
                {/* {JSON.stringify(this.props.member.image)} */}
                
                <Card classes={this.state.card} >
                    <CardActionArea>
                        <CardMedia 
                        component="img"
                        className={this.state.media}
                        alt="family members"
                        height="200"
                        image={this.props.member.image}
                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" >
                                {this.props.member.first_name}
                            </Typography>

                            <Typography gutterBottom variant="h5" component="h2" >
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
                    <CardActions>


                        <Button size="small" color="primary" onClick={this.handelDelete}>Delete Member</Button>
                        <Button size="small" color="primary" onClick={this.handelUpdate}>Update</Button>


                    </CardActions>

                </Card>
                
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect()(FamilyProfileList);