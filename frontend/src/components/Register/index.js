import React, {Component} from 'react';
import {handleLogError} from "../Helpers";
import AuthContext from "../Context/AuthContext";

export class Register extends Component {

    static contextType = AuthContext

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            name: '',
            email: '',
            street: '',
            streetNumber: '',
            city: '',
            cityCode: '',
            iban: '',
            isError: false,
            errorMessage: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const {username, password, name, email, street, streetNumber, city, cityCode, iban} = this.state
        if (!(username && password && name && email && street && streetNumber && city && cityCode && iban)) {
            this.setState({
                isError: true,
                errorMessage: 'Please, inform all fields!'
            })
            return
        }

        const user = {username, password, name, email, street, streetNumber, city, cityCode,iban}

        const options = {
            headers: {'Content-type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(user),
        };
        fetch('/auth/signup', options)
            .then((response) => response.json()).then((data) => {
            window.location.href = '/login'
        })
            .catch(error => {
                handleLogError(error)
                if (error.response && error.response.data) {
                    const errorData = error.response.data
                    let errorMessage = 'Invalid fields'
                    if (errorData.status === 409) {
                        errorMessage = errorData.message
                    } else if (errorData.status === 400) {
                        errorMessage = errorData.errors[0].defaultMessage
                    }
                    this.setState({
                        isError: true,
                        errorMessage
                    })
                }
            })
    }


    render() {
        const {isLoggedIn, isError, errorMessage} = this.state
        return (
            <div className="container-sm">
                <form onSubmit={this.handleSubmit}>
                    <h3>Sign Up</h3>
                    <div className="mb-3">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Username" name="username"
                               onChange={this.handleInputChange}
                               value={this.state.username}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            name="email"
                            onChange={this.handleInputChange}
                            value={this.state.email}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            name="password"
                            onChange={this.handleInputChange}
                            value={this.state.password}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Street</label>
                        <input type="text" className="form-control" placeholder="Street" name="street"
                               onChange={this.handleInputChange}
                               value={this.state.street}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Street Number</label>
                        <input type="text" className="form-control" placeholder="Street Number" name="streetNumber"
                               onChange={this.handleInputChange}
                               value={this.state.streetNumber}
                        />
                    </div>
                    <div className="mb-3">
                        <label>City Code</label>
                        <input type="text" className="form-control" placeholder="City Code" name="cityCode"
                               onChange={this.handleInputChange}
                               value={this.state.cityCode}
                        />
                    </div>
                    <div className="mb-3">
                        <label>City</label>
                        <input type="text" className="form-control" placeholder="City" name="city"
                               onChange={this.handleInputChange}
                               value={this.state.city}
                        />
                    </div>
                    <div className="mb-3">
                        <label>IBAN</label>
                        <input type="text" className="form-control" placeholder="IBAN Number" name="iban"
                               onChange={this.handleInputChange}
                               value={this.state.iban}
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            Sign Up
                        </button>
                    </div>
                    <p className="forgot-password text-right">
                        Already registered <a href="/sign-in">sign in?</a>
                    </p>
                    {isError && <div>{errorMessage}</div>}
                </form>
            </div>
        );
    }
}

export default Register;