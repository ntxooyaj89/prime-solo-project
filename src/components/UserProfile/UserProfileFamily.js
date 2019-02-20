import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { CardActionArea, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import moment from 'moment';
// import './UserProfileFamily.css';



class UserProfileFamily extends Component {

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
    render(){
        return(
            <div className="imageCard">
                <Card className={this.state.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            className={this.state.media}
                            alt="person of family"
                            height="250"
                            image={this.props.member.image}
                            onClick={this.selectMember}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.props.member.first_name}
                            </Typography>

                            <Typography gutterBottom variant="h5" component="h2">
                                {this.props.member.last_name}
                            </Typography>

                            <Typography>
                                Date of Birth: {moment(this.props.member.date_of_birth).format("MMMM D YYYY")}

                            </Typography>

                            <Typography>
                                {this.props.member.gender}

                            </Typography>

                            <Typography>
                                {this.props.member.description}

                            </Typography>

                            <Typography>
                                I've met this member: {JSON.stringify(this.props.member.have_we_met)}

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
        }
    }




// export default UserProfileFamily;
