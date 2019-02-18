import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FamilyProfile.css';
import Card from '@material-ui/core/Card';
import { CardActionArea, CardMedia, CardContent, Typography, CardActions} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import moment from 'moment';



class FamilyProfileList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            add: true,
            card: { maxWidth: '150', },
            media: { height: '150', paddingTop: '56.25%' },
            actions: { display: 'flex' },
            expand: { transform: 'rotate(0deg)', marginLeft: 'auto' },
            expandOpen: { transform: 'rotate(180deg)' }
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

    // send user to the clicked on member's family.
    selectMemberFamily = (event) => {
        console.log('this is select member family');
        // clicking this send user to the member's family.
        this.props.history.push(`/user-profile/${this.props.member.id}`);
    }


    // this update the member status to true and false...
    handelUpdate = () => {
        console.log('this is handle update');
        const action = {
            type: 'UPDATE_MEMBER',
            payload: { memberId: this.props.member.id }
        }
        this.props.dispatch(action);
        window.location.reload()
    }

    render() {
        console.log('this is have we met!!!', this.props.member.have_we_met)

        return (

            <div className="card">
                {/* {JSON.stringify(this.props.member.have_we_met)} */}

                <Card className={this.state.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            className={this.state.media}
                            alt="family members"
                            height="250"
                            image={this.props.member.image}
                            value={this.props.family_id}
                            // on the click of this image it will 
                            // send user to this member's family.
                            onClick={this.selectMemberFamily}
                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" >
                                {this.props.member.first_name}
                            </Typography>

                            <Typography gutterBottom variant="h5" component="h2" >
                                {this.props.member.last_name}
                            </Typography>


                            <Typography component="p">
                                Date of Birth: {moment(this.props.member.date_of_birth).format("MMMM D YYYY")}</Typography>

                            <Typography component="p">
                                Gender: {this.props.member.gender}</Typography>

                            <Typography component="p">
                                {this.props.member.description}</Typography>

                            <Typography component="p">
                                {this.props.member.family_name}</Typography>


                            <Typography component="p">
                                I've met this member: {JSON.stringify(this.props.member.have_we_met)}</Typography>



                        </CardContent>

                    </CardActionArea>
                    <CardActions>


                        <Button size="small" color="primary" onClick={this.handelDelete}>Delete Member</Button>
                        <Button size="small" color="primary" onClick={this.handelUpdate}>We've met</Button>


                    </CardActions>

                </Card>

            </div>

        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

// const StyleFamilyProfileList = withStyles(style)(FamilyProfileList);

export default connect(mapReduxStoreToProps)(FamilyProfileList);