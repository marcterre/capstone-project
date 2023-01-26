import styled from "styled-components";
import Image from "next/image";
import PopUpWindow from "./PopUpWindow";

export default function DetailsHeader({
  name,
  sketch,
  setEntries,
  currentId,
  Entry,
}) {
  return (
    <>
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
            <NoSketchText>no sketch here</NoSketchText>
          )}
        </TitleWrapper>
        <PopUpWindow
          setEntries={setEntries}
          currentId={currentId}
          Entry={Entry}
        />
      </Header>
    </>
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
  border: 1px solid black;
  width: 100px;
  height: 100px;
  padding: 5px;
  text-align: center;
  margin: 0;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;
