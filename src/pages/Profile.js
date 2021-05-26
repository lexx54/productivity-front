import {Box} from "@chakra-ui/react";
import userServices from "../services/user.service";


const Profile = () => {
  const user = userServices.getUserData();

  return(
    <>
    {user && 
      <Box border="1px" borderColor="red" h="100%">
        <p>{user.name} Profile</p>
      </Box>
    }
    </>
    
  )
}

export default Profile;