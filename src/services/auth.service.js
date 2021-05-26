import axios from "axios";
import logger from "../utils/logger";

const URL = "http://localhost:3001/api/auth";

const signUpUser = async (data) => {
  try{
    const response = await axios.post(URL+"/signup",data);
    return response.data;
  } catch(err){
    logger.error(err.message)
  }
  
}

const signInUser = async (data) => {
    const response = await axios.post(URL+"/signin",data);
    localStorage.setItem("identity",JSON.stringify(response.data));
    return response.data 

}


const services = {
  signInUser,
  signUpUser,

}

export default services;