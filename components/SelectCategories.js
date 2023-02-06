import { useRouter } from "next/router";

export default function SelectCategories() {
  const router = useRouter();

  return (
    <>
      {router.pathname === "/create-new-project" && (
        <>
          <label htmlFor="categories">Choose a catergory</label>
          <select name="categories" id="categories">
            <option value="woodwork">woodwork</option>
            <option value="metalwork">metalwork</option>
            <option value="electricity">electricity</option>
            <option value="knitting-crocheting">knitting/crocheting</option>
            <option value="stitching">stitching</option>
            <option value="other">other</option>
          </select>
        </>
      )}
    </>
  );
}
