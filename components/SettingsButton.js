import SettingsIcon from "@/public/settings.svg";
import styled from "styled-components";
import BinIcon from "@/public/binIcon.svg";
import PencilIcon from "@/public/pencil.svg";

export default function SettingsButton({
  handleToggleModalDelete,
  handlePopUpSettings,
  popUpSettings,
}) {
  return (
    <SettingsWrapper>
      <Button onClick={handlePopUpSettings}>
        <StyledSettingsIcon />
      </Button>
      {popUpSettings ? (
        <>
          <Button onClick={() => handleToggleModalDelete()}>
            <StyledBinIcon />
          </Button>
          <Button>
            <StyledPencilIcon />
          </Button>
        </>
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

const StyledBinIcon = styled(BinIcon)`
  width: 36px;
  height: 36px;
`;

const StyledPencilIcon = styled(PencilIcon)`
  width: 36px;
  height: 36px;
`;
