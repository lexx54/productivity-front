import { Redirect } from "react-router";

const Budget = ({user})=> {

  if(!user){
    return <Redirect path="/"/>
  }

  return(
    <p>Budget Goals</p>
  )
}

export default Budget;