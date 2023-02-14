import { Label, Selection } from "./StyledComponents";

export default function SelectViewSide({ children }) {
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
      <Selection name="viewSide" id="viewSide">
        {children}
        <option value="none">- select a category -</option>
        {viewSides.map((side) => (
          <option key={side.name} value={side.name}>
            {side.name}
          </option>
        ))}
      </Selection>
    </>
  );
}
