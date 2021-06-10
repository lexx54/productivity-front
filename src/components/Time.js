import { TabPanel, TabPanels } from "@chakra-ui/tabs";
import { lazy } from "react";
import { useParams } from "react-router";

const LongGoals = lazy(()=> import("./LongGoals"));
const ShortGoals = lazy(()=> import("./ShortGoals"));

const Time = () => {
    const {time} = useParams();
    console.log(time)
    return (
        <TabPanels>
          <TabPanel> <ShortGoals /> </TabPanel>
          <TabPanel> <LongGoals /> </TabPanel>
      </TabPanels>
    )
}

export default Time;