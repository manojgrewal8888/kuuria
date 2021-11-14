import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode"; 
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING
} from "./types";
// Register User
export const addevent = (userData, history) => dispatch => {
  axios
    .post("/api/users/addevent", userData)
    .then(res => history.push("/manage_events")) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}; 