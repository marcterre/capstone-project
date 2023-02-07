export default function SelectCategories({ children }) {
  return (
    <>
      <label htmlFor="categories">Choose a catergory</label>
      <select name="categories" id="categories">
        {children}
        <option value="none">- select a category -</option>
        <option value="woodwork">woodwork</option>
        <option value="metalwork">metalwork</option>
        <option value="electricity">electricity</option>
        <option value="knitting/crocheting">knitting/crocheting</option>
        <option value="stitching">stitching</option>
        <option value="other">other</option>
      </select>
    </>
  );
}
