import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { useContext } from "react";
import { qrCodeImage } from "../../conctant/data";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { AccountContext } from "../../context/AccountProvider";
const dialogcss = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "none",
};
const Component = styled(Box)`
  display: flex;
`;
const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const QRCOde = styled("img")({
  margin: "50px 0 0 50px",
  height: 264,
  width: 264,
});

const Title = styled(Typography)`
  font-size: 26px;
  margin-bottom: 25px;
  color: #525252;
  font-family: Segoe UI, Helvetica Neue, Helvetica, Lucida Grande, Arial, Ubuntu,
    Cantarell, Fira Sans, sans-serif;
  font-weight: 300;
`;
const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    color: #4a4a4a;
  }
`;

const Loginpage = () => {
  const { setAccount,showloginButton, setShowloginButton, setShowlogoutButton } = useContext(AccountContext);
  const onLoginSuccess = (res) => {
    const decode = jwt_decode(res.credential);

    setAccount(decode);
  };

  const onLoginFailure = (res) => {
    console.log("login failed", res);
  };

  return (
    <Dialog open={true} PaperProps={{ sx: dialogcss }} hideBackdrop={true}>
      <Component>
        <Container>
          <Title>Use WhatsApp on your computer</Title>
          <StyledList>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>2. Tap setting menue nd select web page</ListItem>

            <ListItem>
              3s. Point your phone to this screen to capture the QR code
            </ListItem>
          </StyledList>
        </Container>

        <Box style={{ position: "relative" }}>
          <QRCOde src={qrCodeImage} alt="" />
          <Box style={{ position: "absolute", top: "50%" }}>
            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginFailure} />
          </Box>
        </Box>
      </Component>
    </Dialog>
  );
};

export default Loginpage;
