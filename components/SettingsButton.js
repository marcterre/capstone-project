import SettingsIcon from "@/public/settings.svg";
import styled from "styled-components";
import DeleteButton from "./DeleteButton";

export default function SettingsButton({
  setEntries,
  id,
  toggleModalDeleteButton,
  handlePopUpSettings,
  popUpSettings,
}) {
  return (
    <SettingsWrapper>
      <Button onClick={() => handlePopUpSettings()}>
        <StyledSettingsIcon />
      </Button>
      {popUpSettings ? (
        <DeleteButton
          toggleModalDeleteButton={toggleModalDeleteButton}
          setEntries={setEntries}
          id={id}
        />
      ) : null}
    </SettingsWrapper>
  );
}

const SettingsWrapper = styled.div`
  justify-self: end;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 10px 10px;
`;

const StyledSettingsIcon = styled(SettingsIcon)`
  width: 36px;
  height: 36px;
`;

const Button = styled.button`
  background: none;
  border: none;
  justify-self: end;
`;
