import React, {Component} from 'react';
import AuthContext from "../Context/AuthContext";
import {handleLogError} from "../Helpers";


export class Generator extends Component {

    state = {
        user: [],
        codes: [],
        upn: {
            name: "",
            iban: "",
            address: "",
            paymentCode: "",
            description: "",
            amount: "",
            deadline: "",
        }
    }

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

            const response = await fetch('/user/getUserInfo', options)
            const body = await response.json()
            this.setState({user: body})

            const response2 = await fetch('/api/codes');
            const body2 = await response2.json();
            this.setState({codes: body2});
        }
    }

    updateCode = async () => {

        let elt = document.getElementById('paymentCode');

        const options = {
            headers: {'Content-type': 'application/json'},
            method: 'POST',
            body: elt.value
        };

        document.getElementById('codeDesc').value = await fetch('/api/generate/getOpis', options).then((res) => res.text())
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.target)

        const req = {
            name: data.get('name'),
            iban: data.get('recipientIBAN'),
            address: data.get('address'),
            paymentCode: data.get('paymentCode'),
            amount: data.get('amount'),
            description: data.get('description'),
            deadline: data.get('deadline')
        }

        const options = {
            headers: {'Content-type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(req)
        };

        console.log(req)
        fetch('/upn/generate',options)
    }

    render() {
        const {user, codes} = this.state;
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-body">
                        <h3 className="text-center">Generate New Universal Payment Order</h3>
                        <hr></hr>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="cc_name">Recipient's name</label>
                                <input type="text"
                                       className="form-control"
                                       id="cc_name"
                                       title="First and last name"
                                       name="name"
                                       required="required"
                                       readOnly
                                       value={user.name}
                                ></input>
                            </div>
                            <div className="form-group">
                                <label>Recipient IBAN</label>
                                <select className="form-control"
                                        autoComplete="off"
                                        title="Recipient's IBAN" required name="recipientIBAN">
                                    {
                                        user.accounts?.map((acc, ix) => (
                                            <option key={ix} value={acc.number}>{acc.number}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Recipient's Address</label>
                                <input type="text"
                                       className="form-control"
                                       title="Recipient's Address"
                                       required="required"
                                       value={user.address}
                                       name="address"
                                       readOnly></input>
                            </div>

                            <div className="form-group">
                                <label>Payment Code</label>
                                <select className="form-control" autoComplete="off"
                                        title="Payment Code" required id="paymentCode" name="paymentCode"
                                        onChange={this.updateCode}>
                                    <option selected="selected">Please choose</option>
                                    {
                                        codes.map((code, ix) => (
                                            <option key={ix + 1} value={code.code}>{code.code}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="form-group" id="namena">
                                <label>Description</label>
                                <input type="text" className="form-control" title="Payment Code"
                                       required="required" name="description" id="codeDesc"
                                       ></input>
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