import {Box,Heading, Button, VStack, Center,Alert ,AlertDescription} from "@chakra-ui/react";
import {Redirect} from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { EditIcon } from '@chakra-ui/icons';


//components
import Password from "../components/Password";
import AlertMessage from "../components/AlertMessage";
import NormalInput from "../components/NormalInput";

import services from "../services/auth.service";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from "react";
import logger from "../utils/logger";

const schema = yup.object().shape({
  user: yup.string().required().min(3).max(10),
  password: yup.string().required().min(3).max(8),
})

const SignIn = ({history}) => {
  const [errorMessage , setErrorMessage] = useState("");
  // const [userLogged, setUserLogged]=useState(false)
  const {handleSubmit,control,formState:{errors}}=useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit =  async (data) => {
    try{
      const response = await services.signInUser(data);
      if(response){
        history.push("/profile");
        window.location.reload();
      }
    } catch(err){
      const resMessage =
            (err.response &&
              err.response.data &&
              err.response.data.message) ||
            err.message ||
            err.toString();
              console.log(err.response)
          // setLoading(false);
          setErrorMessage(resMessage);
    }
    
    
      // services.signInUser(data)
      //   .then(()=>{
      //     console.log("pass")
          // history.push("/profile");
          // window.location.reload();
        // },(error) => {
        //   const resMessage =
        //     (error.response &&
        //       error.response.data &&
        //       error.response.data.message) ||
        //     error.message ||
        //     error.toString();
        //       console.log(error.response)
        //   // setLoading(false);
        //   setErrorMessage(resMessage);
        // })

  };

  return(
  <VStack h="100%">
    {/* {userLogged && <Redirect to="/profile"/>} */}
    <Box my="5">
      <Heading size="xl">Sign In</Heading>
    </Box>
    {
      errorMessage && (
        <Box my="4">
          <Alert>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        </Box>
      )
    }
    <Box as="form" width={["80%",null,"400px"]} border="2px" 
      borderColor="brand.lava" py="5" px="3" borderRadius="10px"
      onSubmit={handleSubmit(onSubmit)}>

      <Controller control={control} name="user" rules={{ required: true }}
        render={({field})=><NormalInput placeholder="User Name" data={field} Component={EditIcon}/>}/>
        {errors.user && <AlertMessage message={errors.user.message} />}

      <Controller control={control} name="password"
        render={({field})=><Password data={field} />}/>
        {errors.password && <AlertMessage message={errors.password.message} />}

        <Button type="submit" mt="4" colorScheme="blackAlpha" size="sm">
          Sign In
        </Button>
        <Center mt="2">
          <Button colorScheme="linkedin" variant="link" href="/register" as="a">
            New around here?
          </Button>
        </Center>
      </Box>
  </VStack>
  )
}

export default SignIn;