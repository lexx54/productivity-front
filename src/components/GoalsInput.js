import { Input, FormControl, FormLabel, FormHelperText } from "@chakra-ui/react";

const GoalsInput = ({type="text",title,data,width,error}) => (
  <FormControl width={width}>
    <FormLabel>{title}</FormLabel>
    <Input type={type} {...data}/>
    {error && <FormHelperText color="red">{error.message}</FormHelperText>}
  </FormControl>
)

export default GoalsInput;