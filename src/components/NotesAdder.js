import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  Input,
  Checkbox,
  FormControl,
  FormLabel,
  Textarea
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import AlertMessage from "../components/AlertMessage";
// import userServices from "../services/user.service.js";

const schema = yup.object().shape({
  title:yup.string().required().min(6).max(20).trim(),
  important:yup.boolean(),
  content:yup.string().required().min(10).max(250).trim()
  // author:yup.string().required()
})

const NotesAdder = ({error, userId}) => {
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {handleSubmit,control,formState:{errors}} = useForm({
    resolver:yupResolver(schema)
  })

  const onSubmit = async (data) => {
    console.log(data);
    
    try{
      // await userServices.addNote(data);
    }catch(err){
      // error(err.message)
    }
    
  };

  return (
    <>
      <Button onClick={onOpen}>New Note</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Add a new Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box  >
            <Controller control={control} name="title"
              render={({field})=>(
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input {...field}/>
              </FormControl>
              
              )} />
            {errors.title && <AlertMessage message={errors.title.message}/>}

            <Controller control={control} name="content"
              render={({field})=>(
                <FormControl>
                  <FormLabel>Content</FormLabel>
                  <Textarea {...field} resize="none" colorScheme="red"
                  variant="filled"/>
                </FormControl>
              
              )} />
            {errors.content && <AlertMessage message={errors.content.message}/>}

            <Controller control={control} name="important" defaultValue={false}
              render={({field})=><Checkbox defaultValue="false" {...field} >Important</Checkbox>} />  

            <Controller control={control} name="author" defaultValue={userId}
              render={({field})=><Input type="hidden" {...field} />} />
            {errors.author && <AlertMessage message={errors.author.message}/>}
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button variant="ghost" type="submit">Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default NotesAdder;

