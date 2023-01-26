import SettingsIcon from "@/public/settings.svg";
import styled from "styled-components";

export default function SettingsButton({ handlePopUp }) {
  return (
    <Button onClick={handlePopUp}>
      <StyledSettingsIcon />
    </Button>
  );
}

const StyledSettingsIcon = styled(SettingsIcon)`
  width: 36px;
  height: 36px;
`;

const Button = styled.button`
  background: none;
  border: none;
  justify-self: end;
`;
