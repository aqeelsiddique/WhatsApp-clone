import React from 'react'

import {AppBar, Box, Toolbar, styled} from "@mui/material"
import Loginpage from './acount/Loginpage'


const Header = styled(AppBar)`
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
  return (
    <Mcontainer>
    <Header>
      <Toolbar>

      </Toolbar>
    </Header>
    <Loginpage />
  </Mcontainer>
    )
}

export default Messeneger;