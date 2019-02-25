import React, { Component } from "react";
import { connect } from 'react-redux';
import './FamilyTrees.css'



class FamilyTree extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newFamiy: {
                family_name:''
                
            }
        };
    }


    componentDidMount() {
        this.getUserFamily();
       
    }

    // this gets the user's family 
    getUserFamily = () => {
        // const userId = this.props.reduxStore.user.id
        const action = { type: 'GET_USER_FAMILY' };
        this.props.dispatch(action)

    }

    selectFamily = (event) => {
        console.log('this is select Family');
        // this.setState({
        //     ...this.state.newFamily,
        //     family_name: event.target.value,
           
        // })
        this.props.history.push(`/family-profile/${event.target.value}`)

    }

    handleUserFamily = (event) => {
        console.log('this is handleUserFamily');
        // this.setState({
        //     family: event.target.value,
        // });
        this.props.history.push(`/family-profile/`);
    }

    


    render() {

        return (





            <form className="color" onSubmit={this.handleUserFamily}>
                {/* {JSON.stringify(this.props.reduxStore.familyReducer.myFamilyName)} */}
                <header>Select a Family</header>

                <select onChange={this.selectFamily} >
                    <option >Select Family</option>
                    {this.props.reduxStore.familyReducer.myFamilyName.map((name, i) => {
                        return <option key={i} value={name.id} >{name.family_name}</option>
                    })}
                </select>

                <button type="submit" >Submit</button>

            </form >




        );





    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});


export default connect(mapReduxStoreToProps)(FamilyTree);
                    
