import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import SettingsIcon from "@/public/settings.svg";
import BinIcon from "@/public/binIcon.svg";
import PencilIcon from "@/public/pencil.svg";
import { useAtom } from "jotai";
import { showModalSketchAtom } from "@/lib/atom.js";

const ModalDelete = dynamic(() => import("../components/ModalDelete"));
const ModalEdit = dynamic(() => import("../components/ModalEdit"));
const ModalSketch = dynamic(() => import("../components/ModalSketch"));

export default function DetailsHeader({
  name,
  image,
  entry,
  handleDelete,
  currentEntry,
  handleDetailsChanges,
  handleImageChange,
  handleDeleteImage,
}) {
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
        {image.url ? (
          <ImageWrapper>
            <Image
              src={image.url}
              alt={`here should be a sketch of your view`}
              width="100"
              height="100"
            />
            <ImageButton
              onClick={() => {
                setShowModalSketch(!showModalSketch);
              }}
            >
              Click me
            </ImageButton>
          </ImageWrapper>
        ) : (
          <EmptyImageButton
            onClick={() => {
              setShowModalSketch(!showModalSketch);
            }}
          >
            <NoSketchText>click to add a sketch</NoSketchText>
          </EmptyImageButton>
        )}
      </TitleWrapper>
      <SettingsWrapper>
        <Button onClick={() => setPopUpSettings(!popUpSettings)}>
          <StyledSettingsIcon />
        </Button>
        {popUpSettings ? (
          <>
            <Button onClick={() => setShowModalDelete(!showModalDelete)}>
              <StyledBinIcon />
            </Button>
            <Button onClick={() => setShowModalEdit(!showModalEdit)}>
              <StyledPencilIcon />
            </Button>
          </>
        ) : null}
      </SettingsWrapper>
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

const ImageButton = styled.button`
  padding: 0;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  border: 1px solid black;
  width: 100px;
  height: 100px;
`;

const SettingsWrapper = styled.div`
  justify-self: end;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 10px 10px;
`;

const StyledSettingsIcon = styled(SettingsIcon)`
  width: 36px;
  height: 36px;
`;

const Button = styled.button`
  background: none;
  border: none;
  justify-self: end;
`;

const StyledBinIcon = styled(BinIcon)`
  width: 36px;
  height: 36px;
`;

const StyledPencilIcon = styled(PencilIcon)`
  width: 36px;
  height: 36px;
`;

const Header = styled.header`
  width: 100vw;
  display: flex;
  flex-direction: column-reverse;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Title = styled.h1`
  overflow-wrap: break-word;
  overflow: hidden;
  font-size: 1.5em;
  width: 50vw;
  margin: 0;
`;

const NoSketchText = styled.p`
  padding: 5px;
  text-align: center;
  margin: 0;
`;

const EmptyImageButton = styled.button`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  background: none;
  cursor: pointer;
  &:hover {
    background-color: grey;
  }
`;
