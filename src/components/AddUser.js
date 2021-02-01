import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/userAction';

class AddUser extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }

    handleTextChange = (event, field) => {
      this.setState({ [field]: event.target.value });
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addUser(this.state);
        this.setState({
            name: '',
            email: '',
            phone: ''
        });
    }

    render(){
        return(
            <div className="form-container">
                <form onSubmit={this.handleOnSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input onChange={(e)=>this.handleTextChange(e,"name")} value={this.state.name} type="text" name="name" className="form-control" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label>City</label>
                        <input onChange={(e)=>this.handleTextChange(e,"email")} value={this.state.email} type="text" name="city" className="form-control" placeholder="City" />
                    </div>
                    <div className="form-group">
                        <label>Ocuupation</label>
                        <input onChange={(e)=>this.handleTextChange(e,"phone")} value={this.state.phone} type="text" name="occupation" className="form-control" placeholder="Occupation" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">Add User</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { addUser })(AddUser);