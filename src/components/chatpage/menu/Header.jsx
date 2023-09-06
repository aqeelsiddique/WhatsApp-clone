import styled from "@emotion/styled";
import { Box } from "@mui/material";
import {
  Chat as MessageIcon,
  MoreVert,
  People,
  Restore,
} from "@mui/icons-material";
import { emptyProfilePicture } from "../../../conctant/data";

const Componenet = styled(Box)`
  height: 44px;
  background: #ededed;
  display: flex;
  padding: 8px 16px;
  align-items: center;
`;
const Wrapper = styled(Box)`
  margin-left: auto;
  & > * {
    margin-left: 2px;
    padding: 8px;
    color: #000;
  }
  & :first-child {
    font-size: 22px;
    margin-right: 8px;
    margin-top: 3px;
  }
`;
const QRCOde = styled("img")({
  height: 40,
  width: 40,
  borderRadius: "50%",
});

const Header = () => {
  return (
    <>
      <Componenet>
        <QRCOde src={emptyProfilePicture} alt="" />

        <Wrapper>
          <People />
          <Restore />
          <MessageIcon />
          <MoreVert />
        </Wrapper>
      </Componenet>
    </>
  );
};

export default Header;
