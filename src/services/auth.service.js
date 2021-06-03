import axios from "axios";
import logger from "../utils/logger";

const URL = "http://localhost:3001/api/auth";

const signUpUser = async (data) => {
    const response = await axios.post(URL+"/signup",data);
    return response.data;
}

const signInUser = async (data) => {
    const response = await axios.post(URL+"/signin",data);
    localStorage.setItem("identity",JSON.stringify(response.data));
    return response.data 
}


const authServices = {
  signInUser,
  signUpUser,
}

export default authServices;