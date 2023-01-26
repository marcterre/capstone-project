import SettingsIcon from "@/public/settings.svg";
import styled from "styled-components";
import DeleteButton from "./DeleteButton";
import { useState } from "react";

export default function SettingsButton({ setEntries, id }) {
  const [popUpSettings, setPopUpSettings] = useState(false);

  return (
    <SettingsWrapper>
      <Button onClick={() => setPopUpSettings(!popUpSettings)}>
        <StyledSettingsIcon />
      </Button>
      {popUpSettings ? <DeleteButton setEntries={setEntries} id={id} /> : null}
    </SettingsWrapper>
  );
}

const SettingsWrapper = styled.div`
  justify-self: end;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 10px 10px 0 0;
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
