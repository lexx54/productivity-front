import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const NormalInput = ({data,Component,placeholder}) => {
  return (<InputGroup mt="3">
    <InputLeftElement pointerEvents="none"
      children={<Component color="red.300" />}/>
      <Input variant="flushed" placeholder={placeholder} {...data}/>
  </InputGroup>)
}

export default NormalInput;