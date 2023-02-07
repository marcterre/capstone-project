import styled from "styled-components";
import { useState } from "react";
import CharacterCounter from "./CharacterCounter";
import { useAtom } from "jotai";
import { statusUploadAtom } from "@/lib/atom";
import SelectCategories from "./SelectCategories";
import { useRouter } from "next/router";

export default function Form({ handleSubmit }) {
  const [count, setCount] = useState(0);
  const [countDescription, setCountDescription] = useState(0);
  const [statusUpload, setStatusUpload] = useAtom(statusUploadAtom);
  const router = useRouter();

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        type="text"
        pattern="^[a-zA-Z0-9äüöÄÜÖ][a-zA-Z0-9-_ äüöÄÜÖß.`'´]{1,}"
        maxLength="30"
        onChange={(event) => setCount(event.target.value.length)}
        required
      />
      <CharacterCounter maxLength={30} counter={count} />
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        maxLength="100"
        onChange={(event) => setCountDescription(event.target.value.length)}
      />
      <CharacterCounter maxLength={100} counter={countDescription} />
      {router.pathname === "/create-new-project" && <SelectCategories />}
      <label htmlFor="imageFile">Add your sketch:</label>
      <input
        type="file"
        name="imageFile"
        id="imageFile"
        size={10000}
        required
      />
      <Button type="submit" disabled={statusUpload}>
        Save
      </Button>
      <p>{statusUpload}</p>
    </StyledForm>
  );
}

const Button = styled.button`
  width: 150px;
  height: 40px;
  justify-self: flex-end;
  margin: 10px 0;
`;

const StyledForm = styled.form`
  display: grid;
  padding: 5vw 5vw 0 5vw;
  gap: 5px;
`;
