import { useState } from "react";
import { useAtom } from "jotai";
import { showModalSketchAtom, settingsIconAtom } from "@/lib/atom.js";
import { useRouter } from "next/router";
import { StyledButton, Wrapper, GridWrapper } from "./StyledComponents";
import styled from "styled-components";
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
      <GridWrapper variant="title">
        <Title>{name}</Title>
        {children}
        <Wrapper variant="image">
          {image.url && (
            <StyledImage
              src={image.url}
              alt={`here should be a sketch of your view`}
              width="120"
              height="120"
            />
          )}
          {!image.url && <EmptyImageText>no image available</EmptyImageText>}
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
          {/* </>
          ) : (
            <EmptyImageText>no image available</EmptyImageText>
          )} */}
        </Wrapper>
      </GridWrapper>
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

// const TitleWrapper = styled.div`
//   display: grid;
//   grid-template-columns: fit-content(repeat(2, 1fr));
//   grid-template-rows: fit-content(repeat(3, 1fr));
//   align-items: center;
//   row-gap: 0.3em;
//   padding: 0.5em 1em 0 1em;
//   margin: 0;
// `;

const Title = styled.h1`
  overflow-wrap: break-word;
  overflow: hidden;
  grid-row: 1;
  font-size: 1.5em;
  font-weight: 700;
  margin: 0;
  padding: 0.5em;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  background-color: #d9dde9;
  border-radius: 50%;
`;

const EmptyImageText = styled.p`
  margin: 0;
  text-align: center;
  border-radius: 50%;
  background-color: #d9dde9;
`;
