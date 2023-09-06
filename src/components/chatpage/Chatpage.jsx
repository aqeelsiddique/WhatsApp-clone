import { Box, Dialog, styled } from "@mui/material";
import Chatmenu from "./menu/Chatmenu";
import Chatsection from "./chatsection/Chatsection";
////Componenets imports

const dialogStyle = {
  height: "95%",
  width: "100%",
  margin: "20px",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: 0,
  boxShadow: "none",
  overflow: "hidden",
};

const Compnonent = styled(Box)`
  display: flex;
`;

const Leftside = styled(Box)`
  min-width: 450px;
`;

const Rightside = styled(Box)`
width: 73%;
min-width: 300px;
height: 100%;
border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

const Chatpage = () => {
  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <Compnonent>
        <Rightside>
          <Chatmenu />
        </Rightside>

        <Leftside>
          <Chatsection />
        </Leftside>
      </Compnonent>
    </Dialog>
  );
};

export default Chatpage;
