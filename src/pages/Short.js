import { Redirect } from "react-router";

const Short = ({user})=> {

  if(!user){
    return <Redirect path="/"/>
  }

  return(
    <p>Short Goals</p>
    )
}

export default Short;