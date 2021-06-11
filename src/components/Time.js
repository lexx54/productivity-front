import { TabPanel, TabPanels } from "@chakra-ui/tabs";
import { lazy } from "react";

const LongGoals = lazy(()=> import("./LongGoals"));
const ShortGoals = lazy(()=> import("./ShortGoals"));

const Time = () =>  (
        <TabPanels>
          <TabPanel> <ShortGoals /> </TabPanel>
          <TabPanel> <LongGoals /> </TabPanel>
      </TabPanels>
    )

export default Time;