import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
// import Card from '@material-ui/core/Card';


class ChangProfile extends Component {

    componentDidMount() {
        // this.getFamily();
        this.getFamily();
    }
    

    getFamily = () => {

        const action = { type: 'GET_FAMILY', payload: { id: this.props.match.params.id } };
        this.props.dispatch(action);
    }



    render(){
        return(
            <div>
                {/* {JSON.stringify(this.props.reduxStore.familyReducer.MyFamilyName)} */}
                {
                    this.props.reduxStore.familyReducer.MyFamilyName.map(member => (
                        <div key={member.id}>
                            <img src={member.image} alt="images of family"></img>
                            <div className="card"  >
                                <ul>
                                    <li>{member.first_name}</li>
                                    <li>{member.last_name}</li>
                                    <li>{member.date_of_birth}</li>
                                    <li>{member.gender}</li>
                                    <li>{member.last_name}</li>
                                    <li>{member.description}</li>
                                    <li>{member.family_name}</li>
                                </ul>
                        </div>
                    
                    </div>
                    
                    ))
                }

            </div>
           
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapReduxStoreToProps)(ChangProfile);


//delete this when done 
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
    pos: {
        marginBottom: 12,
    },
});

class FavoriteCamps extends Component {
    state = {
        spacing: '16',
    }

    componentDidMount() {
        this.setFavoriteCamps();
    }

    setFavoriteCamps = () => {
        const action = { type: 'FETCH_FAVORITE_CAMPS' }
        this.props.dispatch(action);
    }



    favoriteCamps = () => {
        if (this.props.favoriteCamps.length === 0) {
            return (
                <div>
                    <p>You have not selected any favorites.</p>
                </div>
            )
        } else {
            return (
                this.props.favoriteCamps.map((camp, i) => {
                    return (<FavoriteCampsDetails moveToCamp={this.moveToCamp} key={i} camp={camp} />)
                })
            )
        }
    }

    moveToCamp = (page) => {
        this.props.history.push(page);
    }

    render() {
        const { classes } = this.props;
        const { spacing } = this.state;
        return (
            <div>
                <h1>Favorite Camps</h1>

                <Grid container className={classes.root} justify="center" spacing={Number(spacing)}>
                    {this.favoriteCamps()}
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    favoriteCamps: reduxStore.setFavoriteCamps.setFavoriteCamps
});

FavoriteCamps.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps)(FavoriteCamps));
