import { Dialog } from '@mui/material'
import React from 'react'



const dialogStyle = {
    height: "96%",
    width:"100%",
    maxWidth: "100%",
    maxHeight: "100%",
    margin:"30px",
    boxShadow: "none",
    overflow: "none",
    backgroundColor:'none'
  };

const Chatpage = () => {
  return (
    <Dialog 
    open={true}
    PaperProps={{sx: dialogStyle}}
    hideBackdrop ={true}
    
    >

    </Dialog>
  )
}

export default Chatpage