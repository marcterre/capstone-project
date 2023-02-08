import styled, { css, keyframes } from "styled-components";
import { useState } from "react";
import CharacterCounter from "./CharacterCounter";
import { useAtom } from "jotai";
import { statusUploadAtom } from "@/lib/atom";
import SelectCategories from "./SelectCategories";
import { useRouter } from "next/router";
import SaveIcon from "@/public/icons/save.svg";
import CancelIcon from "@/public/icons/cancel.svg";

export default function Form({ handleSubmit }) {
  const [count, setCount] = useState(0);
  const [countDescription, setCountDescription] = useState(0);
  const [statusUpload, setStatusUpload] = useAtom(statusUploadAtom);
  const router = useRouter();

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Label htmlFor="name">Name:</Label>
      <Input
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
      <DescriptionTextarea
        id="description"
        name="description"
        maxLength="100"
        onChange={(event) => setCountDescription(event.target.value.length)}
      />
      <CharacterCounter maxLength={100} counter={countDescription} />
      {router.pathname === "/create-new-project" && <SelectCategories />}
      <Label htmlFor="imageFile">Add your sketch:</Label>
      <Input
        type="file"
        name="imageFile"
        id="imageFile"
        size={10000}
        required
      />
      <ButtonWrapper>
        <Button type="button" onClick={() => router.back()}>
          <StyledCancelIcon /> Cancel
        </Button>
        <Button type="submit" disabled={statusUpload}>
          <StyledSaveIcon /> Save
        </Button>
      </ButtonWrapper>
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

const styledInputs = css`
  background-color: var(--color-list-items-white);
  border: none;
  border-radius: 2em;
  padding: 0.7em;
  &:focus {
    border-color: var(--color-buttons-yellow);
  }
`;

const Input = styled.input`
  ${styledInputs}
  min-height: 5vh;
  &:last-of-type {
    border: none;
    background: none;
    font-size: 0.9em;
  }
`;

const DescriptionTextarea = styled.textarea`
  ${styledInputs}
  min-height: 10vh;
  resize: none;
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

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1em;
  justify-content: space-evenly;
  position: relative;
  top: 3em;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin: 0;
  border: none;
  border-radius: 2em;
  cursor: pointer;
  &:active {
    position: relative;
    top: 1px;
  }
  &:last-of-type {
    background-color: var(--color-buttons-yellow);
    padding: 0.2em 3.5em;
  }
  &:first-of-type {
    background-color: var(--color-list-items-white);
    color: var(--color-project-inactive);
    fill: var(--color-project-inactive);
    padding: 0.2em 3em;
  }
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
  position: absolute;
  bottom: 5em;
`;
