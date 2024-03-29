import { VStack, Button } from "@chakra-ui/react";

const Navegation = ({user,out}) => {

  return(
    <VStack spacing="4" height="100vh" 
    justify="center" w={["auto","8rem"]} bg="red.600"
    pos="absolute" top="0">
      {/*Basic option*/}
      <Button variant="link" colorScheme="whiteAlpha" as="a" href="/">
        Home
      </Button>

      {!user && (
      <><Button variant="link" colorScheme="whiteAlpha" as="a" href="/register">
        Sign up
      </Button>

      <Button variant="outline" colorScheme="whiteAlpha" as="a" href="/login">
        Sign In
      </Button>
      </>)
      }

      {/*User In option*/}
      { user && (
      <>
      <Button variant="link" colorScheme="whiteAlpha" as="a" href="/profile">
        {user.user}
      </Button>

      <Button variant="link" colorScheme="whiteAlpha" as="a" href="/goals">
        Goals
      </Button>

      <Button variant="link" colorScheme="whiteAlpha" as="a" href="/journal">
        Journal
      </Button>

      <Button variant="link" colorScheme="whiteAlpha" as="a" href="/budget">
        Budget
      </Button>

      <Button variant="link" colorScheme="whiteAlpha" as="a" href="/notes">
        Notes
      </Button>

      <Button variant="outline" colorScheme="whiteAlpha" onClick={out}>
        LogOut
      </Button>
      </>)}
    </VStack>
    
  )
}

export default Navegation;