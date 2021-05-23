import axios from "axios";

const URL = "http://localhost:3001/api/user";

const addUser = async (data) => {
  try{
    const response = await axios.post(URL,data);
    return response.data;
  } catch(err){
    console.error(err.message)
  }
  
}

const services = {
  addUser
}

export default services;