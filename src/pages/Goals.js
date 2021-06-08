import { Box, Heading, HStack, VStack } from "@chakra-ui/layout";
import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";

const GoalNav = lazy(()=>import("../components/GoalNav"));
const Time = lazy(()=> import("../components/Time"));


const Goals = ({user})=> {
  const {path} = useRouteMatch();
  if(!user ) return <Redirect path="/"/>;
  

  return(
    <VStack>
      <HStack>
        <Heading>Goals</Heading>
      </HStack>
      <GoalNav />
      <Box>
      <Switch>
        <Suspense fallback={<p>Loading Goals</p>}>
        <Route path={`${path}/:time`} children={<Time />}/>
        </Suspense>
      </Switch>
      </Box>
    </VStack>
    
    )
}

export default Goals;