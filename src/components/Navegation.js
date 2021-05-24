import { VStack, Button } from "@chakra-ui/react";


const Navegation = () => {
  return(
    <VStack spacing="4" height="100vh" 
    justify="center" w={["auto","8rem"]} bg="red.600"
    pos="absolute" top="0">
      {/*Basic option*/}
      <Button variant="link" colorScheme="whiteAlpha" as="a" href="/">
        Home
      </Button>
      <Button variant="link" colorScheme="whiteAlpha" as="a" href="/register">
        Sign up
      </Button>

      <Button variant="outline" colorScheme="whiteAlpha" as="a" href="/login">
        Sign In
      </Button>


      {/*User In option*/}
      <Button variant="link" colorScheme="whiteAlpha" as="a" href="/profile">
        Profile
      </Button>
      <Button variant="link" colorScheme="whiteAlpha" as="a" href="#">
        Short Goals
      </Button>
      <Button variant="link" colorScheme="whiteAlpha" as="a" href="#">
        Long Goals
      </Button>
      <Button variant="link" colorScheme="whiteAlpha" as="a" href="#">
        Budget
      </Button>
      <Button variant="link" colorScheme="whiteAlpha" as="a" href="#">
        Notes
      </Button>
    </VStack>
    
  )
}

export default Navegation;