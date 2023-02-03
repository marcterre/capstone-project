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
      <FlexList>
        <ListHeader>p</ListHeader>
        <ListHeader>w</ListHeader>
        <ListHeader>h</ListHeader>
        <ListHeader>d</ListHeader>
        <ListHeader>unit</ListHeader>
      </FlexList>
      <List>
        {currentEntry.dimensions.map((dimension) => (
          <li key={dimension.id}>
            <SwipeToDeleteItem
              handleMateriallistDelete={() =>
                handleMateriallistDelete(dimension.id)
              }
            >
              <StyledList>
                <StyledSubList>
                  <ListItem>
                    name: {dimension.name}
                    <Tooltip>ᗏ Swipe left to delete</Tooltip>
                  </ListItem>
                  {dimension.material && (
                    <ListItem>material: {dimension.material}</ListItem>
                  )}
                </StyledSubList>
                <StyledSubListDimensions>
                  <li>
                    {dimension.numberOfPieces
                      ? `${dimension.numberOfPieces}x`
                      : "-"}
                  </li>
                  <li>{dimension.width ? dimension.width : "-"}</li>
                  <li>{dimension.height ? dimension.height : "-"}</li>
                  <li>{dimension.depth ? dimension.depth : "-"}</li>
                  <li>{dimension.unit ? dimension.unit : "-"}</li>
                </StyledSubListDimensions>
              </StyledList>
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

const ListHeader = styled.li`
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

const StyledList = styled.ul`
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

const StyledSubListDimensions = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;
`;

const StyledSubList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.2em;
`;

const FlexList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
`;
