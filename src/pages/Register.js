import {Box,Text, Input ,Button, VStack, } from "@chakra-ui/react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { EmailIcon, EditIcon } from '@chakra-ui/icons'
//components
import Password from "../components/Password";
import AlertMessage from "../components/AlertMessage";
import NormalInput from "../components/NormalInput";

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
    <VStack h="100%">
      <Box my="5">
        <Text fontSize="2rem">Register</Text>
      </Box>
      <Box as="form" width={["80%",null,"400px"]} border="2px" 
      borderColor="brand.lava" py="5" px="3" borderRadius="10px"
      onSubmit={handleSubmit(onSubmit)}>
        <Controller control={control} name="name" rules={{ required: true }}
          render={({field})=><NormalInput placeholder="Full Name" data={field} Component={EditIcon}/>}/>
        {errors.name && <AlertMessage message={errors.name.message}/>}
        
        <Controller control={control} name="user" rules={{ required: true }}
          render={({field})=><NormalInput placeholder="User Name" data={field} Component={EditIcon}/>}/>
        {errors.user && <AlertMessage message={errors.user.message} />}
        
        <Controller control={control} name="email"
          render={({field})=><NormalInput placeholder="Email" data={field} Component={EmailIcon}/>}/>
        {errors.email && <AlertMessage message={errors.email.message} />}

        <Controller control={control} name="password"
          render={({field})=><Password data={field} />}/>
        {errors.password && <AlertMessage message={errors.password.message} />}

        <Button type="submit" mt="4">
          Submit
        </Button>
      </Box>
    </VStack>
    
  )
}

export default Register;