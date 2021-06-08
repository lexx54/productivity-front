import { HStack,Link } from "@chakra-ui/react";
import {Link as RL, useRouteMatch} from "react-router-dom"



const GoalNav = () => {

  const {url} = useRouteMatch();
  return(
  <HStack>
    <Link as={RL} to={`${url}/short`}>Short Run</Link>
    /
    <Link as={RL} to={`${url}/long`}>Long Run</Link>
  </HStack>
  )
}

export default GoalNav;