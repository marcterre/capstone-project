import styled, { css, keyframes } from "styled-components";
import { useState } from "react";
import CharacterCounter from "./CharacterCounter";
import { useAtom } from "jotai";
import { statusUploadAtom } from "@/lib/atom";
import SelectCategories from "./SelectCategories";
import { useRouter } from "next/router";
import SaveIcon from "@/public/icons/save.svg";
import CancelIcon from "@/public/icons/cancel.svg";
import SelectViewSide from "./SelectViewSide";
import {
  Wrapper,
  StyledInput,
  StyledTextarea,
  StyledButton,
} from "./StyledComponents";

export default function Form({ handleSubmit }) {
  const [count, setCount] = useState(0);
  const [countDescription, setCountDescription] = useState(0);
  const [statusUpload, setStatusUpload] = useAtom(statusUploadAtom);
  const router = useRouter();
  const { id } = router;

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Label htmlFor="name">Name:</Label>
      <StyledInput
        id="name"
        name="name"
        type="text"
        pattern="^[a-zA-Z0-9äüöÄÜÖ][a-zA-Z0-9-_ äüöÄÜÖß.`'´]{1,}"
        maxLength="30"
        onChange={(event) => setCount(event.target.value.length)}
        required
      />
      <CharacterCounter maxLength={30} counter={count} />
      <Label htmlFor="description">Description:</Label>
      <StyledTextarea
        id="description"
        name="description"
        maxLength="100"
        onChange={(event) => setCountDescription(event.target.value.length)}
      />
      <CharacterCounter maxLength={100} counter={countDescription} />
      {router.pathname === "/create-new-project" && <SelectCategories />}
      {router.pathname.includes("add-new-view") && <SelectViewSide />}
      <Label htmlFor="imageFile">Add your sketch:</Label>
      <StyledInput
        variant="file"
        type="file"
        name="imageFile"
        id="imageFile"
        size={10000}
        required
      />
      <Wrapper variant="formButtons">
        <StyledButton
          variant="cancel"
          type="button"
          onClick={() => router.back()}
        >
          <StyledCancelIcon /> Cancel
        </StyledButton>
        <StyledButton variant="submit" type="submit" disabled={statusUpload}>
          <StyledSaveIcon /> Save
        </StyledButton>
      </Wrapper>
      <LoadingStatus>
        {statusUpload && <Spinner />}
        {statusUpload}
      </LoadingStatus>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: grid;
  padding: 0 1em;
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 1.2em;
  padding: 0.5em 0;
`;

const StyledSvg = css`
  width: 2em;
  height: 2em;
`;

const StyledSaveIcon = styled(SaveIcon)`
  ${StyledSvg}
`;

const StyledCancelIcon = styled(CancelIcon)`
  ${StyledSvg}
`;

const rotate360 = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  border-top: 0.2em solid grey;
  border-right: 0.2em solid grey;
  border-bottom: 0.2em solid grey;
  border-left: 0.3em solid black;
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
`;

const LoadingStatus = styled.div`
  display: flex;
  gap: 1em;
  padding: 0 1em;
  position: relative;
  bottom: 1.2em;
`;
