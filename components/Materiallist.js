import { projectsAtom } from "@/lib/atom";
import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

export default function Materiallist({
  addNewDimension,
  currentEntry,
  entries,
}) {
  const [showAddNewDimensions, setShowAddNewDimensions] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // const newDimension = {
    //   ...data,
    //   dimension: {
    //     name: data.name,
    //     material: data.material,
    //     width: data.width,
    //     height: data.height,
    //     depth: data.depth,
    //     numberOfPieces: data.pieces,
    //     unit: data.unit,
    //     id: uuidv4(),
    //   },
    // };
    addNewDimension(data);
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
      <table>
        <tr>
          <th>p</th>
          <th>name</th>
          <th>w</th>
          <th>h</th>
          <th>d</th>
          <th>unit</th>
        </tr>
        {entries.map((entry) => (
          <>
            <tr key={entry.dimension.id}>
              <td>{entry.dimension.pieces}</td>
              <td>{entry.dimension.name}</td>
              <td>{entry.dimension.width}</td>
              <td>{entry.dimension.height}</td>
              <td>{entry.dimension.depth}</td>
              <td>{entry.dimension.unit}</td>
            </tr>
            <p>material: {entry.dimension.material}</p>
          </>
        ))}
      </table>
    </>
  );
}

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
  padding-bottom: 5em;
`;
