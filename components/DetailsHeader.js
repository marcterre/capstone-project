import styled from "styled-components";
import Image from "next/image";
// import ModalDelete from "./ModalDelete";
import SettingsButton from "./SettingsButton";
import { useState } from "react";
import dynamic from "next/dynamic";

const DynamicModalDelete = dynamic(() => import("../components/ModalDelete"), {
  loading: () => "Loading...",
});

export default function DetailsHeader({
  name,
  sketch,
  setEntries,
  currentId,
  entry,
}) {
  const [popUpSettings, setPopUpSettings] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  return (
    <Header>
      <TitleWrapper>
        <Title>{name}</Title>
        {sketch ? (
          <StyledImage
            src={sketch}
            alt={`here should be a sketch of your view`}
            width="100"
            height="100"
          />
        ) : (
          <NoSketchTextWrapper>
            <NoSketchText>no sketch here</NoSketchText>
          </NoSketchTextWrapper>
        )}
      </TitleWrapper>
      <SettingsButton
        handlePopUpSettings={() => setPopUpSettings(!popUpSettings)}
        setEntries={setEntries}
        handleToggleModalDelete={() => setShowModalDelete(!showModalDelete)}
        popUpSettings={popUpSettings}
      />
      <DynamicModalDelete
        setEntries={setEntries}
        currentId={currentId}
        entry={entry}
        setPopUpSettings={setPopUpSettings}
        showModalDelete={showModalDelete}
        setShowModalDelete={setShowModalDelete}
      />
    </Header>
  );
}

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

const NoSketchTextWrapper = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;
