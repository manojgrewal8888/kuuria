import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode"; 
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING
} from "./types";
// Register User
export const addQuestion = (postdata, history) => dispatch => {
  axios
    .post("/api/vendor/add_question", postdata)
    .then(res => history.push("/manage_questions")) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}; 
export const editQuestion = (postdata, history) => dispatch => {
  axios
    .post("/api/vendor/update_question", postdata)
    .then(res => history.push("/manage_questions")) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}; 

export const create_ticket = (ticket, history) => dispatch => {
  axios
    .post("/api/vendor/create_ticket", ticket)
    .then(res => history.push("/manage_ticket")) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}; 
export const editTicket = (ticket, history) => dispatch => {
  axios
    .post("/api/vendor/update_ticket", ticket)
    .then(res => history.push("/manage_ticket")) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}; 
export const addcategory = (userdata, history) => dispatch => {
  axios
    .post("/api/vendor/add_category", userdata)
    .then(res => window.location = "/categories") // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}; 
export const updatecategory = (userdata, history) => dispatch => {
  axios
    .post("/api/vendor/edit_category", userdata)
    .then(res => window.location = "/categories") // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}; 