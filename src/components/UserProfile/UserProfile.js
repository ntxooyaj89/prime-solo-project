import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class UserProfile extends Component {

    constructor(){
        super();
        this.state = {
            familyList: [],
        }
    }

    componentDidMount(){
        this.getFamily();
    }

    getFamily = () => {

        // const action = {type: 'GET_FAMILY' };
        // this.props.dispatch(action);
       axios({
           method: 'GET',
           url: '/api/template'
        }).then((response) =>{
           console.log(response.data);
           this.setState({
            familyList: response.data
           });
        }).catch((error)=> {
            console.log('this is error in getFamily');
        })
        
        
        
    }


    render(){
        return(
            <div>
                {JSON.stringify(this.state)}
             
            </div>
        )
    }

   
}

const mapStateToProps = reduxStore => ({
    reduxStore: reduxStore
})

    




export default connect(mapStateToProps)(UserProfile);