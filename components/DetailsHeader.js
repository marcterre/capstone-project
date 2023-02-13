import { useState } from "react";
import { useAtom } from "jotai";
import { showModalSketchAtom, settingsIconAtom } from "@/lib/atom.js";
import { useRouter } from "next/router";
import { StyledButton, Wrapper } from "./StyledComponents";
import styled, { css } from "styled-components";
import Image from "next/image";
import dynamic from "next/dynamic";
import SvgIcon from "./SvgIcon";

const ModalDelete = dynamic(() => import("../components/ModalDelete"), {
  ssr: false,
});
const ModalEdit = dynamic(() => import("../components/ModalEdit"), {
  ssr: false,
});
const ModalSketch = dynamic(() => import("../components/ModalSketch"), {
  ssr: false,
});

export default function DetailsHeader({
  name,
  image,
  entry,
  children,
  handleDelete,
  currentEntry,
  handleDetailsChanges,
  handleImageChange,
  handleDeleteImage,
}) {
  const router = useRouter();
  const [popUpSettings, setPopUpSettings] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalSketch, setShowModalSketch] = useAtom(showModalSketchAtom);
  const [settingsIcon, setSettingsIcon] = useAtom(settingsIconAtom);

  function handleChanges(event) {
    handleDetailsChanges(event);
    setShowModalEdit(false);
    setPopUpSettings(false);
    setSettingsIcon(<SvgIcon variant="settings" />);
  }

  return (
    <header>
      <Wrapper variant="button">
        <StyledButton
          variant="settings"
          type="button"
          onClick={() => router.back()}
        >
          <SvgIcon variant="backArrow" />
        </StyledButton>
        <Wrapper variant="settings">
          {popUpSettings && (
            <>
              <StyledButton
                variant="settings"
                type="button"
                onClick={() => setShowModalEdit(!showModalEdit)}
              >
                <SvgIcon variant="pencil" />
              </StyledButton>
              <StyledButton
                variant="settings"
                type="button"
                onClick={() => setShowModalDelete(!showModalDelete)}
              >
                <SvgIcon variant="bin" />
              </StyledButton>
            </>
          )}
          <StyledButton
            variant="settings"
            type="button"
            onClick={() => {
              setPopUpSettings(!popUpSettings);
              popUpSettings && setSettingsIcon(<SvgIcon variant="settings" />);
              !popUpSettings && setSettingsIcon(<SvgIcon variant="aplhaX" />);
            }}
          >
            {settingsIcon}
          </StyledButton>
        </Wrapper>
      </Wrapper>
      <StyledButton
        variant="image"
        type="button"
        onClick={() => {
          setShowModalSketch(!showModalSketch);
        }}
      >
        {image.url ? (
          <SvgIcon variant="arrowUnlarge" />
        ) : (
          <SvgIcon variant="addImage" />
        )}
      </StyledButton>
      {image.url ? (
        <>
          <StyledImage
            src={image.url}
            alt={`here should be a sketch of your view`}
            width="350"
            height="180"
          />
        </>
      ) : (
        <EmptyImageText>There has no sketch been added yet.</EmptyImageText>
      )}
      <TitleWrapper>
        <Title>{name}</Title>
        {children}
      </TitleWrapper>
      <ModalDelete
        entry={entry}
        showModalDelete={showModalDelete}
        handleDelete={handleDelete}
        handleClose={() => {
          setShowModalDelete(false);
          setPopUpSettings(false);
          setSettingsIcon(<SvgIcon variant="settings" />);
        }}
      />
      <ModalEdit
        showModalEdit={showModalEdit}
        currentEntry={currentEntry}
        handleClose={() => {
          setShowModalEdit(false);
          setPopUpSettings(false);
          setSettingsIcon(<SvgIcon variant="settings" />);
        }}
        handleChanges={handleChanges}
      />
      <ModalSketch
        showModalSketch={showModalSketch}
        image={image}
        handleClose={() => setShowModalSketch(false)}
        currentEntry={currentEntry}
        handleImageChange={(event) => handleImageChange(event)}
        handleDeleteImage={() => {
          handleDeleteImage();
        }}
      />
    </header>
  );
}

const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 0 0 1em;
`;

const Title = styled.h1`
  grid-row: 2;
  grid-column: 1 / span 2;
  overflow-wrap: break-word;
  overflow: hidden;
  align-self: stretch;
  font-size: 1.5em;
  font-weight: 700;
  margin: 0;
  padding: 4em 0 0.5em 0;
`;

const ImageSection = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  box-shadow: var(--box-shadow-black);
`;

const StyledImage = styled(Image)`
  ${ImageSection}
  object-fit: cover;
  align-self: center;
  background-color: var(--color-list-items-white);
  border-radius: 0 0 2em 2em;
`;

const EmptyImageText = styled.p`
  ${ImageSection}
  height: 5em;
  top: 5.5em;
  text-align: center;
  border-bottom: var(--border-darkblue);
  border-radius: 0 0 2em 2em;
`;
