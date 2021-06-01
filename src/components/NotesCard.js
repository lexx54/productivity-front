import { Box, Flex,Text, Heading, Center, Button, Spacer, Tag, TagLabel } from "@chakra-ui/react"
import userServices from "../services/user.service"

const NotesCard = ({data,setNotes,error}) => {
  console.log(data);
  const {title, date,content,important,id} = data;

  const erase = async (id) => {
    try{
      await userServices.deleteNote(id);
      setNotes(prev => prev-1);
      console.log("succesfully deleted")
    } catch (err){
      error(err.message)
    }
    
  }

  return(
  <Flex m="2" direction="column" border="2px" borderColor="brand.lava" borderRadius="10px"
  px="4" py="2">
    <Center>
    <Heading size="lg">{title}</Heading>
    </Center>
    <Flex>
      <Text fontSize="xs">
        {new Date(date).getDay()}/
        {new Date(date).getMonth()}/
        {new Date(date).getFullYear()}
      </Text>
      <Spacer/>
      <Tag colorScheme={important?"red":"blue"}>
        <TagLabel>
        {important?"Must Read":"Relax"}
        </TagLabel>
      </Tag>
    </Flex>
    
    <Text my="4">{content}</Text>
    
    <Flex justify="flex-end">
    <Button colorScheme="blackAlpha" variant="outline" 
      onClick={()=>{erase(id)}}>Delete</Button>
    </Flex>
    
  </Flex>
)}

export default NotesCard;