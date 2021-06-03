import {Box} from "@chakra-ui/react";
import {Redirect} from "react-router";


const Profile = ({user}) => {

  if(!user){
    return <Redirect path="/"/>
  }

  return(
      <Box border="1px" borderColor="red" h="100%">
        <p>{user.name} Profile</p>
      </Box>
    )
}

export default Profile;