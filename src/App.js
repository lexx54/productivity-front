import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import {lazy, Suspense,useState,useEffect} from "react"
//components
import userServices from "./services/user.service";
import Navegation from "./components/Navegation";
import Loader from "./components/Loader"

//styles
import { Grid, GridItem, Slide, useDisclosure, Button } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'

//pages
const Home = lazy(()=> import("./pages/Home"));
const Profile = lazy(()=> import("./pages/Profile"));
const Footer = lazy(()=> import("./components/Footer"));
const Register = lazy(()=> import("./pages/Register"));
const SignIn = lazy(()=> import("./pages/SignIn"));
const Goals = lazy(()=> import("./pages/Goals"));
const Journal = lazy(()=> import("./pages/Journal"));
const Budget = lazy(()=> import("./pages/Budget"));
const Notes = lazy(()=> import("./pages/Notes"));

//color Palette
//red.500 red.300
//blue.400
//brand.lava brand.alabaster brand.silver

const App = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [isLoggingOut,setIsLoggingOut] = useState(false);
  const {isOpen, onToggle} = useDisclosure();


  console.log("app")
  //functions

  const logOut = () =>{
    userServices.logOut();
    setIsLoggingOut(prev => !prev)
  }

  useEffect(()=>{
    const response = userServices.getUserData();
    if(response) setCurrentUser(response);
    else setCurrentUser(undefined)
  },[isLoggingOut])



  return (
  <Router >
    <Slide direction="left" in={isOpen} style={{ zIndex: 10 }}>
      <Navegation user={currentUser} out={logOut}/>
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
            <Route exact path="/profile" render={()=><Profile user={currentUser}/>} />
            <Route path="/register" component={Register}/>
            <Route path="/login" component={SignIn}/>
            <Route path="/goals" render={()=><Goals user={currentUser}/>}/>
            <Route path="/journal" render={()=><Journal user={currentUser}/>}/>
            <Route path="/budget" render={()=><Budget user={currentUser}/>}/>
            <Route path="/notes" render={()=><Notes user={currentUser}/>}/>
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
