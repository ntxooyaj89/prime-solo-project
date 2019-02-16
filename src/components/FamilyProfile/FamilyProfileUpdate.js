import React, { Component } from 'react';
import { connect } from 'react-redux';


class FamilyProfileUpdate extends Component{

    handleDescription = () =>{
        console.log('this is handle descrpition');
    }

    setMember = () => {
        console.log('this is set member');
    }


    render(){
        return(
            <div>
                <form onSubmit={this.addNewDescription}>

               

            <h2>Family Profile Update</h2>
            <input onChange={this.handleDescription} type="text" placeholder="update about member"/>
            <button onClick={this.setMember}>Back to Family</button>
                </form>
            </div>
        )
    }
}


export default FamilyProfileUpdate;