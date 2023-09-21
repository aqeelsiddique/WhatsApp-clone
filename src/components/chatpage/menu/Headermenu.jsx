import { React, useState } from "react";
import { Menu, MenuItem, styled } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import InfoDrawer from "../../drawer/Drawer";


const MenuOption= styled(MenuItem)`
fontsize: 14px;
padding: 15px 60px 5px 24px;
color:#4a4a4a


`


const Headermenu = ({setOpenDrawer}) => {
  // const [openDrawer, setOpenDrawer] = useState(false);

  const [open, setOpen] = useState(null);


  const handleClose = () => {
    setOpen(null);
  };

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };

  return (
    <>
      <MoreVert onClick={handleClick} />

      <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}

      >
        <InfoDrawer />


        {/* <MenuOption
          onClick={() => {
            handleClose();
            toggleDrawer();
          }}
        >
          Profile
        </MenuOption>
        <MenuOption
          onClick={() => {
            handleClose();
          }}
        >      
        </MenuOption> */}
        
        <MenuOption onClick={() => {handleClose();  setOpenDrawer(true);}} > Profile</MenuOption>

        <MenuOption onClick={handleClose}>My account</MenuOption>
        <MenuOption onClick={handleClose}>Logout</MenuOption>
      </Menu>
    </>
  );
};

export default Headermenu;
