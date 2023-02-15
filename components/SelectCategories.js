import { Label, Selection } from "./StyledComponents";

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
      <Selection name="categories" id="categories">
        {children}
        <option value="none">- select a category -</option>
        {categories.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </Selection>
    </>
  );
}
