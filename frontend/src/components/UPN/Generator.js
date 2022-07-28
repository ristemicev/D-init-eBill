import React, {Component} from 'react';
import AuthContext from "../Context/AuthContext";

export class Generator extends Component {

    static contextType = AuthContext

    async componentDidMount() {

        const Auth = this.context
        const isLoggedIn = Auth.userIsAuthenticated()

        if (isLoggedIn) {

            const loggedUser = JSON.parse(sessionStorage.getItem("user"))
            const options = {
                headers: {'Content-type': 'application/json'},
                method: 'POST',
                body: loggedUser.id,
            };

            const response = await fetch('/user/getUserInfo', options).then((data) => data.json())
            this.setState({user: response});

            console.log(response)
            console.log(this.user)
        }
    }


    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-body">
                        <h3 className="text-center">Generate New Universal Payment Order</h3>
                        <hr></hr>
                        <form>
                            <div className="form-group">
                                <label htmlFor="cc_name">Recipient's name</label>
                                <input type="text"
                                       className="form-control"
                                       id="cc_name"
                                       title="First and last name"
                                       required="required" disabled></input>
                            </div>
                            <div className="form-group">
                                <label>Recipient IBAN</label>
                                <select className="form-control"
                                        autoComplete="off"
                                        title="Recipient's IBAN" required name="recipientIBAN">
                                    <option></option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cc_address">Recipient's Address</label>
                                <input type="text"
                                       className="form-control"
                                       id="cc_address"
                                       title="Recipient's Address"
                                       required="required"
                                       disabled></input>
                            </div>
                            <div className="form-group">
                                <label>Payment Code</label>
                                <select className="form-control" autoComplete="off"
                                        title="Payment Code" required id="forma" name="paymentCode">
                                    <option>Please choose</option>
                                    <option></option>
                                </select>
                            </div>
                            <div className="form-group" id="namena">
                                <label>Description</label>
                                <input type="text" className="form-control" title="Payment Code"
                                       required="required" id="tuka" name="description"></input>
                            </div>
                            <div className="form-group" id="amount">
                                <label>Amount</label>
                                <input type="text" className="form-control" title="Amount"
                                       required="required" name="amount"></input>
                            </div>
                            <div className="form-group" id="deadline">
                                <label>Deadline</label>
                                <input type="date" className="form-control" title="Deadline"
                                       required="required" name="deadline"></input>
                            </div>
                            <hr></hr>
                            <div className="form-group row">
                                <div className="col-md-6">
                                    <button type="reset"
                                            className="btn btn-danger btn-lg btn-block">Cancel
                                    </button>
                                </div>
                                <div className="col-md-6">
                                    <button type="submit"
                                            className="btn btn-success btn-lg btn-block">Generate
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Generator;