import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import {lazy, Suspense} from "react"
//components
import Navegation from "./components/Navegation";
import Loader from "./components/Loader"
//Pages
// import Home from "./pages/Home";
// import Profile from "./pages/Profile";
// import Footer from "./components/Footer";
// import Register from "./pages/Register";
// import SignIn from "./pages/SignIn" 


//styles
import { Grid, GridItem, Slide, useDisclosure, Button } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'

const Home = lazy(()=> import("./pages/Home"));
const Profile = lazy(()=> import("./pages/Profile"));
const Footer = lazy(()=> import("./components/Footer"));
const Register = lazy(()=> import("./pages/Register"));
const SignIn = lazy(()=> import("./pages/SignIn"));



//colorp Palette
//red.500 red.300
//blue.400
//brand.lava brand.alabaster brand.silver


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

    <Grid border="5px" bg="brand.alabaster" templateColumns="1fr" 
    templateRows="1fr 20%" gap="0" minHeight="100vh">
      <GridItem pb="5">
        <Suspense fallback={<Loader/>}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={SignIn}/>
          </Switch>
        </Suspense>
      </GridItem>

      <GridItem>
        <Suspense fallback={<Loader/>}>
          <Footer />
        </Suspense>
      </GridItem>
    </Grid>
  </Router>
  )
};

export default App;
