import { projectsAtom } from "@/lib/atom";
import { Fragment, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useSwipeable } from "react-swipeable";

export default function Materiallist({
  addNewDimension,
  projectId,
  currentEntry,
}) {
  const [showAddNewDimensions, setShowAddNewDimensions] = useState(false);

  const handlers = useSwipeable({
    onSwiped: (eventData) => console.log("User Swiped!", eventData),
    trackMouse: true,
    swipeDuration: 5000,
    preventScrollOnSwipe: false,
  });

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

    addNewDimension(projectId, newDimension);
  }

  return (
    <>
      <Heading>Materiallist</Heading>
      <ButtonWrapper>
        <Button onClick={() => setShowAddNewDimensions(!showAddNewDimensions)}>
          {showAddNewDimensions ? "click to fold" : "add new dimensions"}
        </Button>
      </ButtonWrapper>
      {showAddNewDimensions ? (
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
            id="width"
            name="width"
            pattern="^[0-9][0-9.,]{1,}"
            maxLength={5}
            placeholder="5 characters allowed"
          />
          <label htmlFor="height">height:</label>
          <input
            type="text"
            id="height"
            name="height"
            pattern="^[0-9][0-9.,]{1,}"
            maxLength={5}
            placeholder="5 characters allowed"
          />
          <label htmlFor="depth">depth:</label>
          <input
            type="text"
            id="depth"
            name="depth"
            pattern="^[0-9][0-9.,]{1,}"
            maxLength={5}
            placeholder="5 characters allowed"
          />
          <label htmlFor="pieces">number of pieces:</label>
          <input
            type="text"
            id="pieces"
            name="pieces"
            pattern="^[0-9][0-9.,]{1,}"
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
        {currentEntry.dimensions
          ? currentEntry.dimensions.map((dimension) => (
              <li key={dimension.id}>
                <StyledSubList>
                  <FlexWrapper>
                    <ListItems>
                      {dimension.numberOfPieces
                        ? dimension.numberOfPieces
                        : "-"}
                    </ListItems>
                    <ListItems>
                      {dimension.width ? dimension.width : "-"}
                    </ListItems>
                    <ListItems>
                      {dimension.height ? dimension.height : "-"}
                    </ListItems>
                    <ListItems>
                      {dimension.depth ? dimension.depth : "-"}
                    </ListItems>
                    <ListItems>
                      {dimension.unit ? dimension.unit : "-"}
                    </ListItems>
                  </FlexWrapper>
                  <div>
                    <li>name: {dimension.name}</li>
                    {dimension.material ? (
                      <li>material: {dimension.material}</li>
                    ) : null}
                  </div>
                </StyledSubList>
              </li>
            ))
          : null}
      </List>
    </>
  );
}

const ListHeader = styled.h3`
  padding: 0 0.5em;
  margin: 0;
  padding: 0.3em 0;
`;

const ListItems = styled.li`
  justify-items: center;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  padding-bottom: 5em;
`;

const StyledSubList = styled.ul`
  margin: 0 0 0.3em 0;
  padding: 0;
  list-style: none;
  padding: 0.5em 0;
  border: 0.1em solid black;
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

const Button = styled.button`
  width: 90vw;
  padding: 0.3em;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5em;
`;
