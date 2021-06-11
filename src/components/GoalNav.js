import { HStack,Link, TabList, Tab} from "@chakra-ui/react";
import {Link as RL, useRouteMatch} from "react-router-dom"



const GoalNav = () => {

  const {url} = useRouteMatch();
  return(
  <HStack as="nav">
    <TabList>
      <Tab>
        <Link as={RL} to={`${url}/short`}>Short Run</Link>
      </Tab>
      <Tab>
      <Link as={RL} to={`${url}/long`}>Long Run</Link>
      </Tab>
    </TabList>
    
  </HStack>
  )
}

export default GoalNav;