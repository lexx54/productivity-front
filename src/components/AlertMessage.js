import {Alert, AlertIcon, AlertTitle} from "@chakra-ui/react";

const AlertMessage = ({message}) => (
  <Alert status="error">
    <AlertIcon />
    <AlertTitle mr={2}>{message}</AlertTitle>
  </Alert>
  )


export default AlertMessage;