import axios from "axios";
const BASE_URL="http://localhost:3001/api/users"

const getUserData = () => {
  const response = localStorage.getItem("identity");
  return JSON.parse(response); 
}

const logOut = () => {
  localStorage.removeItem("identity")
}

const getUserNotes =async ()=>{
  const token = JSON.parse(localStorage.getItem("identity")).accessToken;
  const header = { 'x-access-token': token }
  try{
    const response = await axios.get(BASE_URL+"/notes",{headers:header});
    return response.data;
  } catch(err){
    console.error(err.message)
  }
}

const addNote = async (data) => {
  const token = JSON.parse(localStorage.getItem("identity")).accessToken;
  const header = { 'x-access-token': token }

  try{
    const response = await axios.post(BASE_URL+"/notes",data,{headers:header});
    return response.data;
  } catch(err){
    console.error(err.message)
  }
}

const deleteNote = async(id) => {
  const token = JSON.parse(localStorage.getItem("identity")).accessToken;
  const header = { 'x-access-token': token }

  try{
    const response = await axios.delete(BASE_URL+"/notes/"+id,{headers:header});
    return response.data;
  } catch(err){
    console.error(err.message)
  }
}
const userServices = {
  getUserData,
  logOut,
  getUserNotes,
  addNote,
  deleteNote
}

export default userServices;