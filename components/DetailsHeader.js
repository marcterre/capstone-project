import styled, { css } from "styled-components";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import BinIcon from "@/public/icons/bin.svg";
import PencilIcon from "@/public/icons/pencil.svg";
import BackIcon from "@/public/icons/back-arrow.svg";
import UnlargeIcon from "@/public/icons/arrow-unlarge.svg";
import IconX from "@/public/icons/alpha-x.svg";
import SettingsIcon from "@/public/icons/settings.svg";
import AddImageIcon from "@/public/icons/add-image.svg";
import { useAtom } from "jotai";
import { showModalSketchAtom, settingsIconAtom } from "@/lib/atom.js";
import { useRouter } from "next/router";

const ModalDelete = dynamic(() => import("../components/ModalDelete"));
const ModalEdit = dynamic(() => import("../components/ModalEdit"));
const ModalSketch = dynamic(() => import("../components/ModalSketch"));

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
    setSettingsIcon(<SettingsIcon />);
  }

  return (
    <header>
      <ButtonWrapper>
        <Button type="button" onClick={() => router.back()}>
          <BackIcon />
        </Button>
        <SettingsWrapper>
          {popUpSettings && (
            <>
              <Button
                type="button"
                onClick={() => setShowModalEdit(!showModalEdit)}
              >
                <PencilIcon />
              </Button>
              <Button
                type="button"
                onClick={() => setShowModalDelete(!showModalDelete)}
              >
                <BinIcon />
              </Button>
            </>
          )}
          <Button
            type="button"
            onClick={() => {
              setPopUpSettings(!popUpSettings);
              popUpSettings && setSettingsIcon(<SettingsIcon />);
              !popUpSettings && setSettingsIcon(<IconX />);
            }}
          >
            {settingsIcon}
          </Button>
        </SettingsWrapper>
      </ButtonWrapper>
      <ImageButton
        type="button"
        onClick={() => {
          setShowModalSketch(!showModalSketch);
        }}
      >
        {image.url ? <UnlargeIcon /> : <AddImageIcon />}
      </ImageButton>
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
          setSettingsIcon(<SettingsIcon />);
        }}
      />
      <ModalEdit
        showModalEdit={showModalEdit}
        currentEntry={currentEntry}
        handleClose={() => {
          setShowModalEdit(false);
          setPopUpSettings(false);
          setSettingsIcon(<SettingsIcon />);
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

const ImageButton = styled.button`
  width: 3.8em;
  height: 3.5em;
  position: relative;
  top: 6.6em;
  left: 24.4em;
  border: none;
  border-radius: 2em 0;
  cursor: pointer;
  background-color: var(--color-background);
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

const ButtonWrapper = styled.div`
  justify-self: end;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.3em;
`;

const SettingsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5em;
`;

const Button = styled.button`
  width: 2.7em;
  height: 2.7em;
  display: flex;
  border: none;
  cursor: pointer;
  background-color: var(--color-buttons-yellow);
  fill: var(--color-icons-filling-black);
  border-radius: 50%;
  &:active {
    position: relative;
    top: 1px;
  }
`;

const EmptyImageText = styled.p`
  ${ImageSection}
  height: 5em;
  top: 5.5em;
  text-align: center;
  border-bottom: var(--border-darkblue);
  border-radius: 0 0 2em 2em;
`;
