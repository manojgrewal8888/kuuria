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
      <div>
        <div className="wrap_login">
          <div className="wrapleft_sign">
            <div className="left_alisi">
              <div className="onestar"><img className="star_rese" src="./img/stars.png" alt="" />
                <div className="para_swrap"><p className="para_str">All the tools you need.No metter the size of your events.</p></div>
              </div>

              <div className="space_sig2">

                <div className="onestar2"><img className="star_rese" src="./img/stars.png" alt="" />
                  <div className="para_swrap"><p className="para_str">Generate Revenue from hosting and selling your event tickets.</p></div>
                </div>
              </div>
              <div className="space_sig">
                <div className="onestar3"><img className="star_rese" src="./img/stars.png" alt="" />
                  <div className="para_swrap"><p className="para_str">Personalize nomination pages with custom fields</p></div>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapright_sign">
            <Link to="/"><img src="./img/kuria-new.png" alt="" className="login_img" /></Link>
            <p className="wecreate">We Create ,You Celebrate.</p>

            <div className="contain_login">
            <form noValidate onSubmit={this.onSubmit} className=''>
              <h2 className="log_head">Log In</h2>
            


             <input
                   placeholder="Email"
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={'login_input '+classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}/>
                    <div className="log_head1"><span className="red-text1">
                  {errors.email}
                  {errors.emailnotfound}
                </span></div>


              


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
              <Link to="/forgetpassword"><p className="login_para1">Forget Password?</p></Link>
                   <div className="log_head1"><span className="red-text1">
                  {errors.password}
                  {errors.passwordincorrect}
                </span></div> 

            


              <div className="">

                <button type="submit" className="newevnt-btn btn-animatelog btn btn-large wa ves-effect waves-light hoverable blue accent-3">
                   Log In
                </button>
        <Link to="/signup"><p className="login_para">Or Sign up</p></Link>

              </div>
        </form>
             
            </div>

            <div className="box1_login"></div>
            <div className="box2_login"></div>
            <div className="box3_login"></div>
            <div className="box4_login"></div>
            <div className="box1_sign"></div>
          </div>
        </div>
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