import styled from "styled-components";
import Modal from "./Modal";
import { Wrapper, StyledButton, Subtitle } from "./StyledComponents";
import { useAtom } from "jotai";
import { settingsIconAtom, showSettingsAtom } from "@/lib/atom";
import SvgIcon from "./SvgIcon";

export default function ModalDelete({
  entry,
  showModalDelete,
  handleDelete,
  handleClose,
}) {
  const [settingsIcon, setSettingsIcon] = useAtom(settingsIconAtom);
  const [showSettings, setShowSettings] = useAtom(showSettingsAtom);

  return (
    <Modal show={showModalDelete}>
      <GridWrapper>
        <Subtitle variant="center">
          Do you really want to delete your {entry}?
        </Subtitle>
        <Wrapper variant="gap">
          <StyledButton variant="cancel" onClick={handleClose}>
            No
          </StyledButton>
          <StyledButton
            variant="submit"
            onClick={() => {
              handleDelete();
              setSettingsIcon(<SvgIcon variant="settings" />);
              setShowSettings(false);
            }}
          >
            Yes
          </StyledButton>
        </Wrapper>
      </GridWrapper>
    </Modal>
  );
}

const GridWrapper = styled.div`
  background-color: var(--color-background);
  max-width: 95vw;
  min-height: 30vh;
  border-radius: 1em;
  padding: 10px;
  display: grid;
  align-items: flex-start;
  justify-items: center;
`;
