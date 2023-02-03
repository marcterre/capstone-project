import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

export default function MaterialListForm({ addNewMaterial }) {
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

    addNewMaterial(newDimension);
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
            type="number"
            id="width"
            step={0.01}
            name="width"
            max={10000}
            placeholder="5 characters allowed"
          />
          <label htmlFor="height">height:</label>
          <input
            type="number"
            pattern="^[0-9][0-9.,]{1,}"
            id="height"
            step={0.01}
            name="height"
            max={10000}
            placeholder="5 characters allowed"
          />
          <label htmlFor="depth">depth:</label>
          <input
            type="number"
            pattern="^[0-9][0-9.,]{1,}"
            id="depth"
            name="depth"
            step={0.01}
            max={10000}
            placeholder="5 characters allowed"
          />
          <label htmlFor="pieces">number of pieces:</label>
          <input
            type="text"
            pattern="^[0-9][0-9.,]"
            id="pieces"
            name="pieces"
            step={0.01}
            max={10000}
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

const AddNewButton = styled.button`
  padding: 0.3em 7em;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5em;
  padding-bottom: 2em;
`;
