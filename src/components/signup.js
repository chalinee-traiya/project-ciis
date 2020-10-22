import React, { Component } from "react";
export default class Signup extends Component {
    render() {
        return (
            <form>
                <div class="text-center">
                    <img src="/images/user.png" width="70px" /> 
                </div>
                
                
                <h3>LOGIN</h3>
                

                <div className="form-group">
                    <label>Email *</label>
                    <input type="email" className="form-control" placeholder="email" />
                </div>

                <div className="form-group">
                    <label>Password *</label>
                    <input type="password" className="form-control" placeholder="password" />
                </div>

                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>

                <button type="submit" className="btn btn-dark rounded-pill btn-block">SIGN IN</button>

                <p className="dont-have-account">
                    Don't have account? <a href="#">Register</a>
                </p>
            </form>
        );
    }
}