import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { CardActionArea, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import './UserProfile.css';


class UserProfile extends Component {

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

    componentDidMount = () => {
        console.log('this has mounted in user profile');
        this.getMemberDetail();
    }


    getMemberDetail = () => {
        console.log('this is inside getMemberDetail');
        const memberId = this.props.match.params.id;
        const action = { type: 'GET_MEMBER_DETAIL', payload: { memberId: memberId } }
        this.props.dispatch(action);
    }


    render() {
        return (
            <div>

                {/* {JSON.stringify(this.props.match.params)} */}
                {/* {JSON.stringify(this.props.reduxStore.familyReducer.memberDetail)} */}
                {this.props.reduxStore.familyReducer.memberDetail.map(person => {
                    return (
                        <div className="card" key={person.id}>
                            <Card className={this.state.card}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        className={this.state.media}
                                        alt="person of family"
                                        height="250"
                                        image={person.image}
                                    />
                                    <CardContent>
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
                                        {JSON.stringify(person.have_we_met)}

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




        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore: reduxStore
})

export default connect(mapStateToProps)(UserProfile);
