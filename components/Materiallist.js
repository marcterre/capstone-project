import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import SwipeToDeleteItem from "./SwipeToDelete";

export default function Materiallist({
  addNewMaterial,
  projectId,
  currentEntry,
  handleMateriallistDelete,
}) {
  const [showAddNewMaterial, setShowAddNewMaterial] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newDimension = {
      name: data.name,
      material: data.material,
      width: data.width,
      height: data.height,
      depth: data.depth,
      numberOfPieces: data.pieces,
      unit: data.unit,
      id: uuidv4(),
    };

    addNewMaterial(projectId, newDimension);
    event.target.reset();
  }

  return (
    <>
      <Heading>Materiallist</Heading>
      <ButtonWrapper>
        <AddNewButton
          onClick={() => setShowAddNewMaterial(!showAddNewMaterial)}
        >
          {showAddNewMaterial ? "click to fold" : "add new dimensions"}
        </AddNewButton>
      </ButtonWrapper>
      {showAddNewMaterial ? (
        <Form onSubmit={handleSubmit}>
          <label htmlFor="name">name:</label>
          <input
            type="text"
            id="name"
            name="name"
            pattern="^[a-zA-Z0-9äüöÄÜÖ][a-zA-Z0-9-_ äüöÄÜÖß.`'´]{1,}"
            maxLength={15}
            placeholder="15 characters allowed"
            required
          />
          <label htmlFor="material">material:</label>
          <input
            type="text"
            id="material"
            name="material"
            pattern="^[a-zA-Z0-9äüöÄÜÖ][a-zA-Z0-9-_ äüöÄÜÖß.`'´]{1,}"
            maxLength={15}
            placeholder="15 characters allowed"
          />
          <label htmlFor="width">width:</label>
          <input
            type="text"
            pattern="^[0-9][0-9.,]{1,}"
            id="width"
            name="width"
            maxLength={5}
            placeholder="5 characters allowed"
          />
          <label htmlFor="height">height:</label>
          <input
            type="text"
            pattern="^[0-9][0-9.,]{1,}"
            id="height"
            name="height"
            maxLength={5}
            placeholder="5 characters allowed"
          />
          <label htmlFor="depth">depth:</label>
          <input
            type="text"
            pattern="^[0-9][0-9.,]{1,}"
            id="depth"
            name="depth"
            maxLength={5}
            placeholder="5 characters allowed"
          />
          <label htmlFor="pieces">number of pieces:</label>
          <input
            type="text"
            pattern="^[0-9][0-9.,]{1,}"
            id="pieces"
            name="pieces"
            maxLength={3}
            placeholder="3 characters allowed"
          />
          <label htmlFor="unit">unit of measurement</label>
          <select id="unit" name="unit">
            <option value="mm">mm</option>
            <option value="cm">cm</option>
            <option value="dm">dm</option>
            <option value="m">m</option>
            <option value="in">in</option>
            <option value="ft">ft</option>
          </select>
          <button>save</button>
        </Form>
      ) : null}
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
  font-size: 0.8em;
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

const Heading = styled.h2`
  margin: 0;
  padding: 0.3em;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 0.5em;
`;

const AddNewButton = styled.button`
  padding: 0.3em 7em;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5em;
  padding-bottom: 2em;
`;
