import { Box, Heading, HStack, VStack, Tabs} from "@chakra-ui/react";
import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";

const GoalNav = lazy(()=>import("../components/GoalNav"));
const Time = lazy(()=> import("../components/Time"));


const Goals = ({user})=> {
  const {path} = useRouteMatch();
  if(!user ) return <Redirect path="/"/>;

  return(
    <Tabs isLazy  id="upper" height="100%">
    <VStack id="container" height="inherit">
      <HStack>
        <Heading>Goals</Heading>
      </HStack>
      <GoalNav />
      <Box height="auto" width="100%" border="1px" borderColor="yellow">
      <Switch>
        <Suspense fallback={<p>Loading Goals</p>}>
          <Route path={`${path}/:time`} children={<Time />}/>
          <Route exact path={`${path}`} children={<p>CLick an option</p>}/>
        </Suspense>
      </Switch>
      </Box>
    </VStack>
    </Tabs>
    
    )
}

export default Goals;