import {useContext} from 'react'


// import React from 'react'
import {AppBar, Box, Toolbar, styled} from "@mui/material"
import { AccountContext } from '../context/AccountProvider'


import Loginpage from "./acount/Loginpage"


import Chatpage from './chatpage/Chatpage'

const ChatHeader = styled(AppBar)`
background-color:#00a884;
height: 125px;
box-Shadow:none

`

const LoginHeader = styled(AppBar)`
background-color:#00a884;
width: 100%;
height: 222px;
box-Shadow:none

`
const Mcontainer = styled(Box)`
background-color:#111B21;
width: 100%;
height: 100vh;

`
const Messeneger = () => {
    const { account} = useContext(AccountContext)
  return (

    <Mcontainer>
    {account ? 
    <>
     <ChatHeader>
          <Toolbar></Toolbar>
        </ChatHeader>
        <Chatpage />

    </>
    
     : 
      <>
        <LoginHeader>
          <Toolbar></Toolbar>
        </LoginHeader>
        <Loginpage />
      </>
      }
  </Mcontainer>
  //   <Mcontainer>
  //   <Header>
  //     <Toolbar>

  //     </Toolbar>
  //   </Header>
  //   <Loginpage />
  // </Mcontainer>
    )
}

export default Messeneger;