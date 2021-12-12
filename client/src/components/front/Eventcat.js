import React, { Component } from 'react'; 
import Sidebar from "./Sidebar";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import Extramenu from './Extramenu'; 
import { addcategory } from "../../actions/ManagerActions";
import Modal from 'react-modal';

class Eventcat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            email:'',
            title:'',
            description:'',
            name:'',
            edit_id:'',
            showPopup:false,
            showloader: true,
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
    }
    
    onSubmit = e => {
        var user_id = localStorage.getItem('_id'); 
        e.preventDefault(); 
        var userdata = {
            title: this.state.title,
            description: this.state.description,
            user_id: user_id, 
        }; 
        if(this.state.edit_id){
            this.props.updatecategory(userdata, this.props.history);  
        }else{
            this.props.addcategory(userdata, this.props.history);  
        }
    }

    Editcat = e => {
        if(e){
            axios
            .post("/api/vendor/single_cat", {category_id:e})
            .then(res => {
                if (res) {
                  console.log(res.data)
                    this.setState({
                        edit_id: res.data.edit_id,
                        title: res.data.title,
                        description: res.data.description,
                        showloader: false,
                        showPopup: true, 
                    }); 
                }

            })
            .catch(err =>
                this.setState({
                    showloader: false
                })
            );
        }

    }

    setModalIsOpen = e => {
        if(this.state.showPopup == true){
            this.setState({
                showPopup: false, 
            });
        }else{
            this.setState({
                showPopup: true,  
            });
         } 
    };
    
    componentDidMount(){
        if (this.props.auth.isAuthenticated == false) {
            this.props.history.push("/login");
        }
        var user_id = {
            id: localStorage.getItem('_id')
        }
        if (user_id) {
            axios
                .post("/api/vendor/category_list", user_id)
                .then(res => {
                    if (res) {
                        this.setState({
                            categories: res.data,
                            showloader: false
                        })
                    }

                })
                .catch(err =>
                    this.setState({
                        showloader: false
                    })
                );
        }
    }
    render() {
        return (
                <div> 
                    <div className="wrap_vwendor">
                        <Sidebar history={this.props.history} />
                        <div className="right_home1">

                        <Extramenu history={this.props.history} />

                        <div className="right_gen"> 
                            <button className="ecat_txtnw" onClick={this.setModalIsOpen} >
                                <i className="fa fa-plus-circle ecat_iconnw"></i> New Category
                            </button>  
                            {this.state.showloader && <div>
                                    <div className='text-center'><p className="loading">Loading Categories</p></div>
                                </div>}
                                <div className="ecat_box">
                                {
                                    Object.entries(this.state.categories).map((val, key) => {
                                       return (
                                            <>
                                            <div className="ecat_item2" onClick={(e) => {this.Editcat(val[1]._id)}}>
                                                <p className="nom_cat">{val[1].title}</p> 
                                            </div> 
                                            </>
                                        )})}
                            </div> 
                        </div>

                            <Modal isOpen={this.state.showPopup} onRequestClose={this.setModalIsOpen}>
                                <div className="addnewcat">
                                        <div className="wrapaddne">
                                    <form noValidate onSubmit={this.onSubmit}> 
                                            <p className="headingaddon">Create New Category</p>

                                            <input onChange={this.onChange} type="text" value={this.state.title} name="title" id="title" className="addon_inp1" placeholder="Title" />

                                            <label className="dis_labeladdon" >Description</label>

                                    <textarea onChange={this.onChange} id="description" name="w3review"  rows="4" cols="50" className='w3review'>{this.state.description ?? ''}</textarea>
                                            <div className="wrapbtnaddon_bt">
                                                    <button className="creteaddon_bt">CREATE</button>
                                            </div>
                                    </form>
                                        </div>   
                                    </div>   
                            </Modal> 
                    </div>
                </div> 
            </div> 
        )
    }
}
Eventcat.propTypes = {
    addcategory: PropTypes.func.isRequired, 
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { addcategory }
)(Eventcat);