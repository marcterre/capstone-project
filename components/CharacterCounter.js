import styled from "styled-components";

export default function CharacterCounter({ maxLength, counter }) {
  return (
    <Wrapper>
      {counter < maxLength && counter >= 0 ? (
        <CounterLetters> {maxLength - counter} characters left</CounterLetters>
      ) : (
        <CounterLetters>no characters left</CounterLetters>
      )}
    </Wrapper>
  );
}

const CounterLetters = styled.p`
  font-size: 0.8em;
  margin: 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
