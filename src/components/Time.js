import { lazy } from "react";
import { useParams } from "react-router";

const LongGoals = lazy(()=> import("./LongGoals"));
const ShortGoals = lazy(()=> import("./ShortGoals"));

const Time = () => {
    const {time} = useParams();
    return (
      <>
      {time === "long"
        ?<LongGoals />
        :<ShortGoals />
    }
    </>)
}

export default Time;