import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { StyledButton } from "./StyledComponents";

export default function MaterialListForm({ addNewMaterial }) {
  const [showAddNewMaterial, setShowAddNewMaterial] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newDimension = {
      ...data,
      id: uuidv4(),
    };

    addNewMaterial(newDimension);
    event.target.reset();
  }

  return (
    <>
      <StyledButton
        variant="full-width"
        onClick={() => setShowAddNewMaterial(!showAddNewMaterial)}
      >
        {showAddNewMaterial ? "click to fold" : "add new dimensions"}
      </StyledButton>
      {showAddNewMaterial && (
        <Form onSubmit={handleSubmit}>
          <GridWrapper variant="two-rows">
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
              max={99999}
              min={0}
              placeholder="5 characters allowed"
            />
            <label htmlFor="height">height:</label>
            <input
              type="number"
              pattern="^[0-9][0-9.,]{1,}"
              id="height"
              step={0.01}
              name="height"
              max={99999}
              min={0}
              placeholder="5 characters allowed"
            />
            <label htmlFor="depth">depth:</label>
            <input
              type="number"
              pattern="^[0-9][0-9.,]{1,}"
              id="depth"
              name="depth"
              step={0.01}
              max={99999}
              min={0}
              placeholder="5 characters allowed"
            />
            <label htmlFor="pieces">number of pieces:</label>
            <input
              type="number"
              pattern="^[0-9][0-9.,]{1,}"
              id="numberOfPieces"
              name="numberOfPieces"
              max={99999}
              min={1}
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
          </GridWrapper>
          <StyledButton variant="submit">save</StyledButton>
        </Form>
      )}
    </>
  );
}

const Form = styled.form`
  padding: 1em 0;
  gap: 1em;
  display: grid;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5em;
`;
