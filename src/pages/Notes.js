import {Box, VStack, Heading} from "@chakra-ui/react";
import userServices from "../services/user.service.js"
import {useState,useEffect} from "react";

import NotesAdder from "../components/NotesAdder";


const Notes = ()=> {
  const [notes,setNotes]=useState("");
  const [errMessage, setErrMessage]=useState("");
  

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
  },[notes])
  return(
    <>
    <VStack>
    <Box>
      <Heading size="xl" my="5">Notes</Heading>
      <NotesAdder error={setErrMessage}/>
    </Box>
    {
      errMessage && <p>{errMessage}</p>
    }
    {
      notes? (<div>{
        notes.map(note=>{
          return (<p>{note.title}</p>)
        })
        }</div>)
        :<p>Loading ...</p>
    }
    </VStack>
    </>
  )
}

export default Notes;

