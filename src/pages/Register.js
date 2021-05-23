import {Box,Center,Input,Button, } from "@chakra-ui/react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
//components
import Password from "../components/Password";
import AlertMessage from "../components/AlertMessage";

import services from "../services";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required().min(4).trim(),
  user: yup.string().required().min(3).max(10),
  password: yup.string().required().min(3).max(8),
  email:yup.string().email(),
})


const Register = () => {
  // const [errorMessage, setErrorMessage]=useState("");
  const {handleSubmit,control,formState:{errors}}=useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = async (data) => {
    console.log(data);
    try{
      // await services.addUser(data);
    }catch(err){
      // setErrorMessage(err.message)
    }
    
  };
  return(
    <Center border="1px" borderColor="red" h="100%">
      {/* {errorMessage && <Alert>
        <AlertIcon/>
        <AlertTitle>{errorMessage}</AlertTitle>
      </Alert>} */}

      <Box as="form" width={["80%",null,"600px"]} border="2px" 
      borderColor="green" height="600px" my="3rem" borderRadius="10px"
      onSubmit={handleSubmit(onSubmit)}>
        <Controller control={control} name="name" rules={{ required: true }}
          render={({field})=><Input variant="flushed" placeholder="Full Name" {...field} />}/>
        {errors.name && <AlertMessage message={errors.name.message}/>}
        
        <Controller control={control} name="user" rules={{ required: true }}
          render={({field})=><Input variant="flushed" placeholder="User Name" {...field} />}/>
        {errors.user && <AlertMessage message={errors.user.message} />}
        
        <Controller control={control} name="email"
          render={({field})=><Input variant="flushed" placeholder="Email" {...field}/>}/>
        {errors.email && <AlertMessage message={errors.email.message} />}

        <Controller control={control} name="password"
          render={({field})=><Password data={field} />}/>
        {errors.password && <AlertMessage message={errors.password.message} />}

        <Button type="submit">
          Submit
        </Button>
      </Box>
    </Center>
    
  )
}

export default Register;