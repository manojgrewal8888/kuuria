import React, { Component } from 'react'
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
class Login extends Component {
    constructor() {
        super();
        this.state = {
          email: "",
          password: "",
          errors: {}
        };
      }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/dashboard"); // push user to dashboard when they login
        }
    if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };
    onSubmit = e => {
        e.preventDefault();
    const userData = {
          email: this.state.email,
          password: this.state.password
        };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
      };
    
      componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
      }
    
    render() {
        const { errors } = this.state;
        return (
            <div className="wrap_login">
                 <Link to="/"><img src="./img/kuria-new.png" alt="" className="login_img" /></Link>

                <div className="contain_login">
                <form noValidate onSubmit={this.onSubmit} className=''>
                    <h2 className="log_head">Log In</h2>
                   {/*  <input className="login_input" type="email" name="mail" id="mail" placeholder="Email"/> */}
                   <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={'login_input '+classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}/>
                    <div className="log_head1"><span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span></div>
                   {/*  <input className="login_input" type="password" name="pwd" id="pwd" placeholder="Password"/>  */}
                   <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  placeholder="Password"
                  className={'login_input '+classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                   <div className="log_head1"><span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span></div> 
                        <button  type="submit"
                            className="newevnt-btn btn-animatelog btn btn-large waves-effect waves-light hoverable blue accent-3"
                                >
                                Log In
                        </button>   
                    </form>
                    <Link to="/forgetpassword"><p className="login_para">Forget Password?</p></Link>
                </div>
                <div className="box1_login"></div>
                <div className="box2_login"></div>
                <div className="box3_login"></div>
                <div className="box4_login"></div>
            </div>
        )
    }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
