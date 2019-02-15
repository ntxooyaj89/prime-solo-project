import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FamilyProfile.css';
// import axios from 'axios';
import Card from '@material-ui/core/Card';
import { CardActionArea, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';
import Button from '@material-ui/core/Button';


class FamilyProfileList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         media: {
    //             height: 140,
    //         },
    //         card: {
    //             maxWidth: 100,
    //         }
    //     };
    // }



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

    }

    render() {
        return (

            <div className="classes-card">
                {/* {JSON.stringify(this.props.member.image)} */}

                <Card className="card">
                    <CardActionArea>
                        <CardMedia component="img"
                            // className={this.state.media}
                            image={this.props.member.image}
                            // adding a height 
                            height="" />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.props.member.first_name}

                                <Typography component="p">
                                    {this.props.member.last_name}
                                </Typography>

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


                        <Button size="small" color="primary" onClick={this.handelDelete}>Delete Member</Button>
                        <Button size="small" color="primary" onClick={this.handelUpdate}>Update</Button>











                        {/* <button onClick={this.handelUpdate}>Make Update</button> */}
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