import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme} from "@chakra-ui/react"

const theme = extendTheme({
  colors:{
    brand:{
      lava:"#463f3a",
      silver:"#bcb8b1",
      alabaster:"#f4f3ee"
    }
  },
  components:{
    Textarea:{
      colorSchemes:{
        "deno":{
          bg: "red.400",
          border:"2px",
          bordeColor:"red"
        }
      }
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

