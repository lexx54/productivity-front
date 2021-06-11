import { Button, Flex, HStack, Input} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import GoalsInput from "./GoalsInput";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
  shortGoal:yup.string().required(),
  date:yup.string().required()
})

const ShortGoals = ( ) => {
  const {handleSubmit,control,formState:{errors}}=useForm({
    resolver: yupResolver(schema)
  });

  const handleData = (data) => {
    console.log(data)
  }

  return(
    <>
      <HStack as="form" onSubmit={handleSubmit(handleData)} align="center">
        <Controller name="shortGoal" control={control} placeholder="goal"
        render={({field})=> <GoalsInput data={field} title="Goal" flex="3"
        error={errors.shortGoal}/> } />
        {/* {errors.shortGoal && <p>{errors.shortGoal.message}</p>} */}

        <Controller name="date" control={control}  rules={{ required: true }}
        render={({field})=><GoalsInput data={field} title="Date Expectation" 
        type="date" width="150px" error={errors.date}/> } />
        {/* {errors.date && <p>{errors.date.message}</p>} */}

        <Button type="submit">
          Enviar
        </Button>
      </HStack>
    </>
  )
}

export default ShortGoals;