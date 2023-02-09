import styled from "styled-components";

export default function SelectCategories() {
  return (
    <>
      <Label htmlFor="categories">Choose a catergory</Label>
      <Select name="categories" id="categories">
        <option value="none">- select a category -</option>
        <option value="woodwork">woodwork</option>
        <option value="metalwork">metalwork</option>
        <option value="electricity">electricity</option>
        <option value="knitting/crocheting">knitting/crocheting</option>
        <option value="stitching">stitching</option>
        <option value="other">other</option>
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
