import styled from "styled-components";
import Modal from "./Modal";
import { Wrapper, StyledButton, Subtitle } from "./StyledComponents";

export default function ModalDelete({
  entry,
  showModalDelete,
  handleDelete,
  handleClose,
}) {
  return (
    <Modal show={showModalDelete}>
      <GridWrapper>
        <Subtitle variant="modal">
          Do you really want to delete your {entry}?
        </Subtitle>
        <Wrapper variant="gap">
          <StyledButton variant="cancel" onClick={handleClose}>
            No
          </StyledButton>
          <StyledButton variant="submit" onClick={handleDelete}>
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
