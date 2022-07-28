import React, {Component} from 'react';
import AuthContext from "../Context/AuthContext";
import {handleLogError} from "../Helpers";
import {Navigate} from 'react-router-dom';


class Login extends Component {

    static contextType = AuthContext

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            isError: false,
            errorMessage: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        const Auth = this.context
        const isLoggedIn = Auth.userIsAuthenticated()
        this.setState({isLoggedIn})
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

        const {username, password} = this.state
        if (!(username && password)) {
            this.setState({
                isError: true,
                errorMessage: 'Please, inform all fields!'
            })
            return
        }

        const user = {username, password}

        const options = {
            headers: {'Content-type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(user),
        };
        fetch('/auth/authenticate', options)
            .then((response) => response.json()).then((data) => {

            const {id, name, role} = data
            const authdata = window.btoa(username + ':' + password)
            const user = {id, name, role, authdata}

            const Auth = this.context
            Auth.userLogin(user)

            this.setState({
                username: '',
                password: '',
                isLoggedIn: true,
                isError: false
            })
        })
            .catch(error => {
                handleLogError(error)
                this.setState({isError: true})
            })
    }

    render() {

        const {isLoggedIn, isError} = this.state
        if (isLoggedIn) {
            return <Navigate to='/home'/>
        } else {
            return (
                <div className="container-sm">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Sign In</h3>
                        <div className="mb-3">
                            <label>Username</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter username"
                                name="username"
                                onChange={this.handleInputChange}
                                value={this.state.username}
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
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            );
        }
    }
}

export default Login;