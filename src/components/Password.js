import {useState} from "react";
import {InputGroup, Input, InputRightElement, Button, InputLeftElement} from "@chakra-ui/react";
import { LockIcon } from '@chakra-ui/icons';

const Password = ({data}) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size="md" mt="3">
      <InputLeftElement pointerEvents="none"
      children={<LockIcon color="red.300" />}/>
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Enter password"
        variant="flushed"
        {...data}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick} colorScheme="red">
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default Password;