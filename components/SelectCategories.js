import styled from "styled-components";

export default function SelectCategories({ children }) {
  const categories = [
    { name: "woodwork" },
    { name: "metalwork" },
    { name: "electricity" },
    { name: "knitting/crocheting" },
    { name: "stitching" },
    { name: "other" },
  ];
  return (
    <>
      <Label htmlFor="categories">Choose a view side</Label>
      <Select name="categories" id="categories">
        {children}
        <option value="none">- select a category -</option>
        {categories.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name}
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
