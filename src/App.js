import {AppBar, Box, Toolbar, styled} from "@mui/material"


import Messeneger from "./components/Messeneger";
import Loginpage from "./components/acount/Loginpage";


import { GoogleOAuthProvider } from '@react-oauth/google';




function App() {
  const clientId = "590059928752-df6pvh4viq5oakp2sc8kvp8ocplhg9mg.apps.googleusercontent.com"

  return (
    <GoogleOAuthProvider  clientId = {clientId}>

  
    <Messeneger />
    </GoogleOAuthProvider>
  
  );
}

export default App;
