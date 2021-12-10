import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addQuestion,editQuestion } from "../../actions/ManagerActions";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import classnames from "classnames"
import axios from "axios";
import Extramenu from "./Extramenu";
class ManageQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            question:'',
            status:0, 
            user_id:'', 
            update: false,
            errors:{}
        };
    } 
    
    componentWillReceiveProps(nextProps) {
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
        if(this.props.location.state && this.props.location.state.question_id !=''){
            var postdata = {
                user_id: this.state.user_id,
                question: this.state.question, 
                status: this.state.status, 
                question_id:this.props.location.state.question_id
            };  
            this.props.editQuestion(postdata, this.props.history); 
        }else{ 
            var postdata = {
                user_id: this.state.user_id,
                question: this.state.question, 
                status: this.state.status, 
            }; 
            this.props.addQuestion(postdata, this.props.history); 
        }
    }; 

    setstatus = e => {
        if(this.state.status == 0){
            this.setState({
                status: 1
            });
        }else{
            this.setState({
                status: 0
            });
        }
    }
    async componentDidMount(){
        var user_id = localStorage.getItem('_id');
        if (user_id) {
            this.setState({
                user_id: user_id
            });
        }
        if (!this.props.auth.isAuthenticated) {
            this.props.history.push("/login");
        }
        if(this.props.location.state && this.props.location.state.question_id !=''){  
            this.setState({  
                showloader:true
            }); 
            await axios
            .post("/api/vendor/view_question", {
                question_id: this.props.location.state.question_id
            })
            .then((response) => { 
                if (response.status = 200) {
                    this.setState({ 
                        status: response.data.status,
                        question: response.data.question, 
                        update: true, 
                        showloader:false
                    }); 
                }
            });
        }    
    }
    render() {
        const { errors } = this.state;
        return (
            <div>
                <div className="wrap_vwendor">
                    <Sidebar history={this.props.history}/>   
                    <div className="right_vendor">
                    <Extramenu history={this.props.history} />
                        <div className="right_subven">
                        <Link className="ven_under back_ic"  to='/manage_questions'> 
                            <div  className="logout_ven1">
                                <i   className="fa fa-arrow-left "></i> Back
                            </div>
                        </Link>
                        <h4 className="meve_headin">Add Question</h4>

                        <form noValidate onSubmit={this.onSubmit}> 
                            <div className="viewt_wrap">
                                <div className="left_viewt"> 
                                    <p className="left_vt_in">Question</p> 
                                    <p className="left_vt_in">Status</p> 
                                </div>

                                <div className="hori_viewt"></div>

                                <div className="right_viewt">
                                    <p className="left_vt_in">
                                        <textarea className={'ticket_form' +classnames("", { invalid: errors.question })} onChange={this.onChange} type="text" placeholder="Enter Question" value={this.state.question} name="question" id="question" ></textarea>
                                    </p>
                                    <p className="left_vt_in">
                                        <div className="togfree">
                                           <input className={'check_tog '+classnames("", { invalid: errors.status })} onChange={this.setstatus} type="checkbox" checked={this.state.status && this.state.status == 1 ? 'checked' : ''} name="status" value={this.state.status} id="status" />
                                        </div>
                                    </p> 
                                </div>
                            </div>
                            <button type='submit' className="save_vte">Save</button>
                            </form>

                        </div>
                    </div>
                </div>
                <p className="bottom_vendash">Made With <i className="fa fa-heart icon_venbottom" ></i> In Trasacco Valley ,Ghana</p>
            </div>
        )
    }
}
ManageQuestions.propTypes = { 
    auth: PropTypes.object.isRequired, 
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors:state.errors
});
export default connect(
    mapStateToProps, 
    {addQuestion,editQuestion}
)(ManageQuestions);