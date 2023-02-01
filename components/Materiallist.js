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
    preventScrollOnSwipe: true,
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
            maxLength={20}
          />
          <label htmlFor="material">material:</label>
          <input
            type="text"
            id="material"
            name="material"
            pattern="^[a-zA-Z0-9äüöÄÜÖ][a-zA-Z0-9-_ äüöÄÜÖß.`'´]{1,}"
            maxLength={20}
          />
          <label htmlFor="width">width:</label>
          <input type="text" id="width" name="width" />
          <label htmlFor="height">height:</label>
          <input type="text" id="height" name="height" />
          <label htmlFor="depth">depth:</label>
          <input type="text" id="depth" name="depth" />
          <label htmlFor="pieces">number of pieces:</label>
          <input type="text" id="pieces" name="pieces" />
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
      <Table>
        <thead>
          <TableRow>
            <th>p</th>
            <th>w</th>
            <th>h</th>
            <th>d</th>
            <th>unit</th>
          </TableRow>
        </thead>
        <tbody>
          {currentEntry.dimensions
            ? currentEntry.dimensions.map((dimension) => (
                <Fragment key={dimension.id}>
                  <TableRow>
                    <td>{dimension.pieces}</td>
                    <td>{dimension.width}</td>
                    <td>{dimension.height}</td>
                    <td>{dimension.depth}</td>
                    <td>{dimension.unit}</td>
                  </TableRow>
                  <tr>
                    <td>name: {dimension.name}</td>
                  </tr>
                  <tr>
                    <td>material: {dimension.material}</td>
                  </tr>
                </Fragment>
              ))
            : null}
        </tbody>
      </Table>
    </>
  );
}

const TableRowWrapper = styled.div`
  border: 1px solid black;
  display: grid;
`;

const Table = styled.table`
  display: grid;
  width: 100%;
  padding-bottom: 10em;
`;

const TableRow = styled.tr`
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid black;
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
