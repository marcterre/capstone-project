import styled from "styled-components";

export default function SelectViewSide() {
  const viewSides = [
    { name: "front" },
    { name: "back" },
    { name: "left" },
    { name: "right" },
    { name: "top" },
    { name: "bottom" },
    { name: "cut" },
    { name: "detail" },
    { name: "other" },
  ];
  return (
    <>
      <Label htmlFor="viewSide">Choose a view side</Label>
      <Select name="viewSide" id="viewSide">
        <option value="none">- select a category -</option>
        {viewSides.map((side) => (
          <option key={side.name} value={side.name}>
            {side.name}
          </option>
        ))}
      </Select>
    </>
  );
}

const Label = styled.label`
  font-weight: 600;
  font-size: 1.2em;
  padding: 0.5em 0;
`;

const Select = styled.select`
  border: none;
  padding: 0.5em 2em;
  border-radius: 2em;
  text-align: center;
  cursor: pointer;
  border: var(--border-yellow);
`;
