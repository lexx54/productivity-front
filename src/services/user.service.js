const getUserData = () => {
  const response = localStorage.getItem("identity");
  return JSON.parse(response);
}

const logOut = () => {
  localStorage.removeItem("identity")
}

const userServices = {
  getUserData,
  logOut
}

export default userServices;