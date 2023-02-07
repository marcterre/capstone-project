import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import SettingsIcon from "@/public/icons/settings.svg";
import BinIcon from "@/public/icons/bin.svg";
import PencilIcon from "@/public/icons/pencil.svg";
import BackIcon from "@/public/icons/back-arrow.svg";
import UnlargeIcon from "@/public/icons/arrow-unlarge.svg";
import { useAtom } from "jotai";
import { showModalSketchAtom } from "@/lib/atom.js";
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

  function handleChanges(event) {
    handleDetailsChanges(event);
    setShowModalEdit(false);
    setPopUpSettings(false);
  }

  return (
    <Header>
      <TitleWrapper>
        <Title>{name}</Title>
        {children}
        <CategoryTitle>catergory: {currentEntry.categories}</CategoryTitle>
      </TitleWrapper>
      {image.url ? (
        <>
          <StyledImage
            src={image.url}
            alt={`here should be a sketch of your view`}
            width="350"
            height="160"
          />
        </>
      ) : (
        <EmptyImageWrapper>
          <p>There has no sketch been added.</p>
        </EmptyImageWrapper>
      )}
      <ImageButton
        onClick={() => {
          setShowModalSketch(!showModalSketch);
        }}
      >
        <StyledUnlargeIcon />
      </ImageButton>
      <ButtonWrapper>
        <SettingsWrapper>
          <Button onClick={() => setPopUpSettings(!popUpSettings)}>
            <SettingsButton />
          </Button>
          {popUpSettings && (
            <>
              <Button onClick={() => setShowModalDelete(!showModalDelete)}>
                <BinIcon />
              </Button>
              <Button onClick={() => setShowModalEdit(!showModalEdit)}>
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
        }}
      />
      <ModalEdit
        showModalEdit={showModalEdit}
        currentEntry={currentEntry}
        handleClose={() => {
          setShowModalEdit(false);
          setPopUpSettings(false);
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

const StyledUnlargeIcon = styled(UnlargeIcon)`
  width: 2.5em;
  height: 2.5em;
`;

const ImageButton = styled.button`
  display: flex;
  position: absolute;
  right: 1.3rem;
  top: 10.1rem;
  border: none;
  border-radius: 50% 0 50% 0;
  cursor: pointer;
  background: none;
  background-color: rgb(250, 250, 250, 0.4);
  box-shadow: 0 0 0.8em 0.8em rgb(250, 250, 250, 0.4);
`;

const StyledImage = styled(Image)`
  object-fit: fill;
  border-radius: 2em;
  align-self: center;
  border: var(--border-darkblue);
  background-color: var(--color-list-items-white);
  border-radius: 2em;
`;

const SettingsButton = styled(SettingsIcon)`
  transform: rotate(90deg);
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
`;

const Header = styled.header`
  display: flex;
  flex-direction: column-reverse;
`;

const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 1em;
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
  padding: 0 0 0.5em 0;
`;

const CategoryTitle = styled.p`
  grid-column: 1 / span 2;
  margin: 0;
  padding: 0.5em 0 1em 0;
  font-size: 0.9em;
  font-weight: 300;
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
  height: 160px;
`;
