
import styled from '@emotion/styled'
import {Box} from '@mui/material'
import {Chat as MessageIcon, MoreVert}  from '@mui/icons-material'

const Componenet =styled(Box)`
height:44px;
background:#ededed;
padding:8px 16px
display: flex;
align-items: center 

`
const Wrapper =styled(Box)`
margin-left:auto;


`
const Header = () => {


  return (
    <>
    <Componenet>
      <Wrapper>
      < MessageIcon / >
        <MoreVert / >  


      </Wrapper>

    </Componenet>
    </>
  )
}

export default Header