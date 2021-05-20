import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
//components
import Navegation from "./components/Navegation";
//Pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import Register from "./pages/Register";
//styles
import { Grid, GridItem, Slide, useDisclosure, Button } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'



const App = () => {
  const {isOpen, onToggle} = useDisclosure();
  return (
  <Router >
    <Slide direction="left" in={isOpen} style={{ zIndex: 10 }}>
      <Navegation />
    </Slide>

    <Button colorScheme="red" onClick={onToggle} 
    style={{ zIndex: 11 }} pos="fixed" bottom="6vh" right="8vw">
        <HamburgerIcon/>
    </Button>

    <Grid border="5px" borderColor="green" templateColumns="1fr" 
    templateRows="1fr 20%" gap="0" minHeight="100vh">
      <GridItem>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/register" component={Register}/>
      </Switch>
      </GridItem>
      <GridItem>
        <Footer />
      </GridItem>
    </Grid>
  </Router>
  )
};

export default App;
