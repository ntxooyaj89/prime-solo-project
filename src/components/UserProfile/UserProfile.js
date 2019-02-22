import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { CardActionArea, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import moment from 'moment';
// import UserProfileFamily from './UserProfileFamily';
import './UserProfile.css';

const styles = theme => ({
    card: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
    playIcon: {
        height: 38,
        width: 38,
    },
});


class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            add: true,
            fullwidth: {width: '100%'},
            card: { maxWidth: '150px', },
            media: { height: '150px', paddingTop: '56.25%' },
            fullmedia: { height: '150px', width: '150px' },
            actions: { display: 'flex' },
            expand: { transform: 'rotate(0deg)', marginLeft: 'auto' },
            expandOpen: { transform: 'rotate(180deg)' }
        };
    }

    componentDidMount = () => {
        console.log('this has mounted in user profile');
        // gets detail of the member that's clicked on.
        this.getMemberDetail();
        this.getMemberFamily();
    }

    // get the detail of the member that's clicked on.
    getMemberDetail = () => {
        console.log('this is inside getMemberDetail');
        const memberId = this.props.match.params.id;
        const action = { type: 'GET_MEMBER_DETAIL', payload: { memberId: memberId } }
        this.props.dispatch(action);
    }

    getMemberFamily = () => {
        console.log('this is inside get member family');
        const memberId = this.props.match.params.id
        const action = {type: 'GET_MEMBER_FAMILY', payload: {memberId: memberId}};
        
        this.props.dispatch(action);
    }

    selectMember = () => {
        console.log('this is select member family');
        // clicking this send user to the member's family.
        this.props.history.push(`/user-profile/${this.props.member.id}`);
    }

    

    

    render() {
        const { classes, theme } = this.props;
        return (
            <div>

                {/* {JSON.stringify(this.props.match.params)} */}
                {/* {JSON.stringify(this.props.reduxStore.familyReducer.memberFamily)} */}
                {this.props.reduxStore.familyReducer.memberDetail.map(person => {
                    return (
                        <div className={classes.card} key={person.id}>
                            <Card className={this.state.card}>
                                
                                <CardActionArea className={classes.details}>
 
                                    
                                    <CardMedia
                                        component="img"
                                        className={this.state.fullmedia}
                                        alt="person of family"
                                        height="250"
                                        width="250"
                                        image={person.image}
                                        onClick={this.selectMember}
                                    />
                                    <CardContent className={classes.content}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {person.first_name}
                                    </Typography>

                                    <Typography gutterBottom variant="h5" component="h2">
                                        {person.last_name}
                                    </Typography>

                                    <Typography>
                                        Date of Birth: {moment(person.date_of_birth).format("MMMM D YYYY")}

                                    </Typography>

                                    <Typography>
                                        {person.gender}

                                    </Typography>

                                    <Typography>
                                        {person.description}

                                    </Typography>

                                    <Typography>
                                        I've met this member: {JSON.stringify(person.have_we_met)}

                                    </Typography>

                                   </CardContent>
                                </CardActionArea>
                                <CardActions>


                                    <Button size="small" color="primary" onClick={this.handelDelete}>Delete Member</Button>
                                    <Button size="small" color="primary" onClick={this.handelUpdate}>We've met</Button>


                                </CardActions>  


                            </Card>
                        </div>
                    )
                })}
                         <br></br>
           

                    {/* {JSON.stringify(this.props.match.params)} */}
                    {/* {JSON.stringify(this.props.reduxStore.familyReducer.memberFamily)} */}
                    {this.props.reduxStore.familyReducer.memberFamily.map(member => {
                        return (
                            <div className="image" key={member.id}>
                                <Card className={this.state.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            className={this.state.media}
                                            alt="person of family"
                                            height="250"
                                            image={member.image}
                                            onClick={this.selectMember}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {member.first_name}
                                            </Typography>

                                            <Typography gutterBottom variant="h5" component="h2">
                                                {member.last_name}
                                            </Typography>

                                            <Typography>
                                                Date of Birth: {moment(member.date_of_birth).format("MMMM D YYYY")}

                                            </Typography>

                                            <Typography>
                                                {member.gender}

                                            </Typography>

                                            <Typography>
                                                {member.description}

                                            </Typography>

                                            <Typography>
                                                I've met this member: {JSON.stringify(member.have_we_met)}

                                            </Typography>

                                        </CardContent>

                                    </CardActionArea>
                                    <CardActions>


                                        <Button size="small" color="primary" onClick={this.handelDelete}>Delete Member</Button>
                                        <Button size="small" color="primary" onClick={this.handelUpdate}>We've met</Button>


                                    </CardActions>


                                </Card>
                            </div>
                        )
                    })}

                </div>
            



        )}
}

const mapStateToProps = reduxStore => ({
    reduxStore: reduxStore
})

export default withStyles(styles, { withTheme: true })(connect(mapStateToProps)(UserProfile));
