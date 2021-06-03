import {Box, VStack, Heading, HStack, Flex} from "@chakra-ui/react";
import userServices from "../services/user.service.js"
import {useState,useEffect} from "react";
import { Redirect } from "react-router";

import NotesAdder from "../components/NotesAdder";
import NotesCard from "../components/NotesCard";


const Notes = ({user})=> {
  const [notes,setNotes]=useState("");
  const [numOfNotes,setNumOfNotes]=useState(0);
  const [userId, setUserId] = useState("");
  const [errMessage, setErrMessage]=useState("");
  
  console.log("notes")

  useEffect(()=>{
    const bringUserInfo = async() => {
      const id = await userServices.getUserData().id;
      setUserId(id);
      console.log(id)
    }
    bringUserInfo();
  },[])

  useEffect(()=>{
    const bringNotes = async () => {
      try{
        const response = await userServices.getUserNotes();
        setNotes(response)
      }catch(err){
        setErrMessage(err.message)
      }
    }
    bringNotes();
  },[numOfNotes])

  if(!user){
    return <Redirect path="/"/>
  }

  return(
    <>
    <VStack>
    <Box>
      <Heading size="xl" my="5">Notes</Heading>
      <NotesAdder error={setErrMessage} userId={userId} setNotes={setNumOfNotes}/>
    </Box>
    {
      errMessage && <p>{errMessage}</p>
    }
    <Flex direction={["column",null,"row"]} px="4">
    {
      notes? (
        notes.map( note => {
          return <NotesCard data={note} setNotes={setNumOfNotes} 
          error={setErrMessage}  key={note.id}/>
        })
      )
        :<p>Loading ...</p>
    }
    </Flex>
    </VStack>
    </>
  )
}

export default Notes;

