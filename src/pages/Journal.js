import { Redirect } from "react-router";

const Long = ({user})=> {

  if(!user){
    return <Redirect path="/"/>
  }

  return(
    <p>Long Goals</p>
  )
}

export default Long;