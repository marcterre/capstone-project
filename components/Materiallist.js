import styled from "styled-components";
import SwipeToDeleteItem from "./SwipeToDelete";
import MaterialListForm from "./MaterialListForm";

export default function MaterialList({
  addNewMaterial,
  currentEntry,
  handleMateriallistDelete,
}) {
  return (
    <>
      <MaterialListForm addNewMaterial={addNewMaterial} />
      <FlexWrapper>
        <ListHeader>p</ListHeader>
        <ListHeader>w</ListHeader>
        <ListHeader>h</ListHeader>
        <ListHeader>d</ListHeader>
        <ListHeader>unit</ListHeader>
      </FlexWrapper>
      <List>
        {currentEntry.dimensions.map((dimension) => (
          <li key={dimension.id}>
            <SwipeToDeleteItem
              handleMateriallistDelete={() =>
                handleMateriallistDelete(dimension.id)
              }
              dimensionId={dimension.id}
            >
              <StyledSubList>
                <Wrapper>
                  <ListItem>
                    name: {dimension.name}
                    <Tooltip>ᗏ Swipe left to delete</Tooltip>
                  </ListItem>
                  {dimension.material ? (
                    <ListItem>material: {dimension.material}</ListItem>
                  ) : null}
                </Wrapper>
                <FlexWrapper>
                  <li>
                    {dimension.numberOfPieces
                      ? `${dimension.numberOfPieces}x`
                      : "-"}
                  </li>
                  <li>{dimension.width ? dimension.width : "-"}</li>
                  <li>{dimension.height ? dimension.height : "-"}</li>
                  <li>{dimension.depth ? dimension.depth : "-"}</li>
                  <li>{dimension.unit ? dimension.unit : "-"}</li>
                </FlexWrapper>
              </StyledSubList>
            </SwipeToDeleteItem>
          </li>
        ))}
      </List>
    </>
  );
}

const Tooltip = styled.span`
  visibility: hidden;
  text-align: end;
  font-size: 0.7em;
`;

const Wrapper = styled.div`
  display: grid;
`;

const ListHeader = styled.h3`
  padding: 0 0.5em;
  margin: 0;
  padding: 0.3em 0;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  padding-bottom: 5em;
`;

const StyledSubList = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  gap: 0.5em;
  list-style: none;
  padding: 0;
  border: 0.1em solid black;
  background-color: white;
  &:hover ${Tooltip} {
    visibility: visible;
  }
  &:hover {
    background-color: lightgreen;
  }
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.2em;
`;

const FlexWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;
