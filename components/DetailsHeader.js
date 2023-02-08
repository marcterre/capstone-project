import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import BinIcon from "@/public/icons/bin.svg";
import PencilIcon from "@/public/icons/pencil.svg";
import BackIcon from "@/public/icons/back-arrow.svg";
import UnlargeIcon from "@/public/icons/arrow-unlarge.svg";
import IconX from "@/public/icons/alpha-x.svg";
import SettingsIcon from "@/public/icons/settings.svg";
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
    <Header>
      <TitleWrapper>
        <Title>{name}</Title>
        {children}
      </TitleWrapper>
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
        <EmptyImageWrapper>
          <p>There has no sketch been added yet.</p>
        </EmptyImageWrapper>
      )}
      <ImageButton
        type="button"
        onClick={() => {
          setShowModalSketch(!showModalSketch);
        }}
      >
        <StyledUnlargeIcon />
      </ImageButton>
      <ButtonWrapper>
        <SettingsWrapper>
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
          {popUpSettings && (
            <>
              <Button
                type="button"
                onClick={() => setShowModalDelete(!showModalDelete)}
              >
                <BinIcon />
              </Button>
              <Button
                type="button"
                onClick={() => setShowModalEdit(!showModalEdit)}
              >
                <PencilIcon />
              </Button>
            </>
          )}
        </SettingsWrapper>
        <Button type="button" onClick={() => router.back()}>
          <BackIcon />
        </Button>
      </ButtonWrapper>
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
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  flex-direction: column-reverse;
`;

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
  padding: 6em 0 0.5em 0;
`;

const StyledUnlargeIcon = styled(UnlargeIcon)`
  width: 2.5em;
  height: 2.5em;
`;

const ImageButton = styled.button`
  display: flex;
  position: absolute;
  right: 0.3rem;
  top: 8.5rem;
  border: none;
  border-radius: 50% 0 50% 0;
  cursor: pointer;
  background: none;
  background-color: rgb(250, 250, 250, 0.4);
  box-shadow: 0 0 0.8em 0.8em rgb(250, 250, 250, 0.4);
`;

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
  object-fit: fill;
  align-self: center;
  border-bottom: var(--border-darkblue);
  background-color: var(--color-list-items-white);
  border-radius: 0 0 2em 2em;
`;

const ButtonWrapper = styled.div`
  justify-self: end;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  padding: 0.3em;
`;

const SettingsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
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

const EmptyImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: fill;
  border-radius: 2em;
  align-self: center;
  border: var(--border-darkblue);
  background-color: var(--color-list-items-white);
  border-radius: 2em;
  width: 350px;
  height: 180px;
`;
